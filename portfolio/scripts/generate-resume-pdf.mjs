import { writeFile } from 'node:fs/promises'

const pageWidth = 612
const pageHeight = 792
const left = 54
const right = 558
const commands = []
let cursor = 746

function pdfText(value) {
	return value.replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)')
}

function drawText(value, { size = 9.5, font = 'F1', color = '0.16 0.22 0.29' } = {}) {
	commands.push(`BT /${font} ${size} Tf ${color} rg ${left} ${cursor} Td (${pdfText(value)}) Tj ET`)
}

function drawParagraph(value, maxLength = 100) {
	const words = value.split(' ')
	let line = ''
	for (const word of words) {
		const nextLine = line ? `${line} ${word}` : word
		if (nextLine.length > maxLength && line) {
			drawText(line)
			cursor -= 13
			line = word
		} else {
			line = nextLine
		}
	}
	if (line) {
		drawText(line)
		cursor -= 13
	}
}

function addSection(title) {
	cursor -= 12
	drawText(title, { size: 12, font: 'F2', color: '0.12 0.20 0.34' })
	cursor -= 7
	commands.push(`0.24 0.38 0.78 RG 0.8 w ${left} ${cursor} m ${right} ${cursor} l S`)
	cursor -= 16
}

drawText('Shivam Kumar Singh', { size: 25, font: 'F2', color: '0.08 0.13 0.22' })
cursor -= 25
drawText('shivam231806@gmail.com  |  +91 7601890338', { size: 9.5, color: '0.24 0.38 0.78' })
cursor -= 14
drawText('github.com/Shivam1842  |  linkedin.com/in/shivam-singh-it')
cursor -= 2
commands.push(`0.24 0.38 0.78 RG 1.2 w ${left} ${cursor} m ${right} ${cursor} l S`)

addSection('OBJECTIVE')
drawParagraph('Driven IT professional and Frontend Developer specializing in building responsive, modern web user interfaces. Passionate about transforming ideas into efficient digital solutions.')

addSection('EDUCATION')
drawParagraph('Master of Computer Applications (MCA) - NMIT, Bengaluru (2025 - 2027)')
drawParagraph('Bachelor of Computer Applications (BCA) - KNU, Asansol (2022 - 2025)')

addSection('SKILLS')
drawParagraph('Frontend: React, Vite, JavaScript, HTML, CSS, Tailwind CSS')
drawParagraph('Programming: Python, Java, SQL')
drawParagraph('Data Science & ML: Scikit-Learn, Pandas, NumPy, Machine Learning (ExtraTreesClassifier)')
drawParagraph('Databases & Tools: Git, VS Code, SQLite, MySQL, Oracle')

addSection('PROJECTS & EXPERIENCE')
drawParagraph('Bone Density Imbalance Analysis: Independently analyzed structured clinical data (calcium, weight, vitamin D) and implemented ExtraTreesClassifier.')
drawParagraph('AI Medical Report Interpretation: AI/NLP system to interpret medical reports. Role: Frontend Developer (React, Vite).')
drawParagraph('Personal Portfolio: Built a responsive portfolio website with React and Vite. Role: Frontend Developer.')

addSection('LANGUAGES')
drawParagraph('Hindi (Native), English (Fluent), Bengali (Speaking).')

const stream = Buffer.from(commands.join('\n'), 'ascii')
const objects = [
	'<< /Type /Catalog /Pages 2 0 R >>',
	'<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
	'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>',
	'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
	'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
	`<< /Length ${stream.length} >>\nstream\n${stream.toString('ascii')}\nendstream`,
]

const chunks = [Buffer.from('%PDF-1.4\n', 'ascii')]
const offsets = [0]
let byteOffset = chunks[0].length

for (let index = 0; index < objects.length; index += 1) {
	const chunk = Buffer.from(`${index + 1} 0 obj\n${objects[index]}\nendobj\n`, 'ascii')
	offsets.push(byteOffset)
	chunks.push(chunk)
	byteOffset += chunk.length
}

const xrefOffset = byteOffset
const xref = [
	`xref\n0 ${objects.length + 1}`,
	'0000000000 65535 f ',
	...offsets.slice(1).map((offset) => `${String(offset).padStart(10, '0')} 00000 n `),
].join('\n')
const trailer = `\ntrailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`
chunks.push(Buffer.from(`${xref}\n${trailer}`, 'ascii'))

await writeFile(new URL('../public/Shivam_Kumar_Singh_Resume.pdf', import.meta.url), Buffer.concat(chunks))
console.log('Generated public/Shivam_Kumar_Singh_Resume.pdf')