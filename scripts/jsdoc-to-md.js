import fs from 'fs';
import path, {dirname} from 'path';
import {globby} from 'globby';
import {fileURLToPath} from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SRC_DIR = path.resolve(__dirname, '../src');
const OUT_DIR = path.resolve(__dirname, '../docs-vite/auto');

if (!fs.existsSync(OUT_DIR)) { fs.mkdirSync(OUT_DIR, {recursive: true}); }

const jsFiles = await globby(['**/*.js'], {cwd: SRC_DIR});

// --- helpers ---
function cleanCommentLine(line) {
	return line.replace(/^\s*\/\/+\s?/, '').trim();
}

// --- extract top-of-file class block ---
function extractClassMeta(content) {
	const block = content.match(/\/\*[\s\S]*?\*\//);
	if (!block) { return null; }

	const lines = block[0]
		.split('\n')
		.map(l => l.replace(/^\s*\/?\*+\s?/, '').trim());

	const meta = {
		className: '',
		inherits: '',
		description: [],
		constructors: []
	};

	for (const line of lines) {
		if (!line.startsWith('/') && !line.startsWith('@class') && !line.startsWith('@inherits')) {
			meta.description.push(line);
		}

		if (line.startsWith('@class')) {
			meta.className = line.split(/\s+/)[1] || '';
			continue;
		}
		if (line.startsWith('@inherits')) {
			meta.inherits = line.split(/\s+/)[1] || '';
			continue;
		}
	}

	return meta;
}

// --- extract other sections ---
function extractSections(content) {
	const lines = content.split('\n');
	const sections = {
		functions: [],
		events: [],
		optionsBySection: {},
		generalOptions: []
	};

	let currentSection = null;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i].trim();

		if (line.startsWith('// @section')) {
			const match = line.match(/@section\s+(.+)/);
			currentSection = match ? match[1].trim() : null;
			continue;
		}

		if (line.startsWith('// @function')) {
			// eslint-disable-next-line no-useless-escape
			const funcMatch = line.match(/@function\s+([^(]+)\(([^)]*)\):?\s*([\w<>{}\[\]]+)?/);
			if (!funcMatch) { continue; }
			const [, name, params, returns] = funcMatch;
			const desc = cleanCommentLine(lines[i + 1] || '');
			sections.functions.push({
				method: `\`${name}(${params})\``,
				returns: returns ? `\`${returns}\`` : '',
				desc
			});
			continue;
		}

		if (line.startsWith('// @option')) {
			const optMatch = line.match(/@option\s+(\w+)\s*:\s*([\w<>|]+)\s*(?:=\s*([^ ]+))?/);
			if (!optMatch) { continue; }
			const [, name, type, def] = optMatch;
			const desc = cleanCommentLine(lines[i + 1] || '');
			const option = {
				option: `\`${name}\``,
				type: `\`${type}\``,
				def: def ? `\`${def}\`` : '',
				desc
			};
			if (currentSection) {
				if (!sections.optionsBySection[currentSection]) {
					sections.optionsBySection[currentSection] = [];
				}
				sections.optionsBySection[currentSection].push(option);
			} else {
				sections.generalOptions.push(option);
			}
			continue;
		}

		if (line.startsWith('// @event')) {
			const evtMatch = line.match(/@event\s+([\w-]+)\s*\(?([\w<>|]*)\)?/);
			if (!evtMatch) { continue; }
			const [, name, data] = evtMatch;
			const desc = cleanCommentLine(lines[i + 1] || '');
			sections.events.push({
				event: `\`${name}\``,
				data: data ? `\`${data}\`` : '',
				desc
			});
			continue;
		}
	}

	return sections;
}

// --- markdown builder ---
function toMarkdown(meta, sections, fileName) {
	let md = `# ${meta?.className || path.basename(fileName, '.js')}\n\n`;

	// description
	if (meta?.description?.length) {
		md += `${meta.description.join('\n').replaceAll('@example', '### Usage example').trim()  }\n\n`;
	}

	if (meta?.constructors?.length) {
		md += '### Creation\n\n| Factory | Description |\n| --- | --- |\n';
		for (const c of meta.constructors) {
			md += `| ${c} |\n`;
		}
		md += '\n';
	}

	// Options grouped by @section
	const allSections = {...sections.optionsBySection};
	if (sections.generalOptions.length) {
		allSections['Options'] = sections.generalOptions;
	}

	for (const [sectionName, opts] of Object.entries(allSections)) {
		if (!opts.length) { continue; }
		md += `## ${sectionName}\n\n| Option | Type | Default | Description |\n| --- | --- | --- | --- |\n`;
		for (const o of opts) {
			md += `| ${o.option} | ${o.type} | ${o.def} | ${o.desc} |\n`;
		}
		md += '\n';
	}

	if (sections.functions.length) {
		md += '## Methods\n\n| Method | Returns | Description |\n| --- | --- | --- |\n';
		for (const f of sections.functions) { md += `| ${f.method} | ${f.returns} | ${f.desc} |\n`; }
		md += '\n';
	}

	if (sections.events.length) {
		md += '## Events\n\n| Event | Data | Description |\n| --- | --- | --- |\n';
		for (const e of sections.events) { md += `| ${e.event} | ${e.data} | ${e.desc} |\n`; }
		md += '\n';
	}

	return `${md.trim()  }\n`;
}

// --- Clean last output ---
if (fs.existsSync(OUT_DIR)) {
	fs.rmSync(OUT_DIR, {recursive: true, force: true});
}
fs.mkdirSync(OUT_DIR, {recursive: true});

// --- main loop ---
for (const file of jsFiles) {
	const fullPath = path.join(SRC_DIR, file);

	const content = fs.readFileSync(fullPath, 'utf8');

	const meta = extractClassMeta(content);
	const sections = extractSections(content);
	const md = toMarkdown(meta, sections, file);

	const outPath = path.join(OUT_DIR, `${file.replace('.js', '.md')}`);
	const outDir = dirname(outPath);

	// Ensure nested directory exists
	if (!fs.existsSync(outDir)) {
		fs.mkdirSync(outDir, {recursive: true});
	}

	fs.writeFileSync(outPath, md);
	console.log(`✅ Generated: ${outPath}`);
}
