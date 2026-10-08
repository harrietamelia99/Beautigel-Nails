const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')

const markdown = fs.readFileSync(
  path.join(__dirname, '../docs/payment-management-guide.md'),
  'utf8'
)

// Basic markdown → HTML conversion
function mdToHtml(md) {
  return md
    // H1
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // H2
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    // H4
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Blockquote
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // Hr
    .replace(/^---$/gm, '<hr>')
    // Tables — header row
    .replace(/^\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)*)/gm, (match, header, rows) => {
      const ths = header.split('|').filter(c => c.trim()).map(c => `<th>${c.trim()}</th>`).join('')
      const trs = rows.trim().split('\n').map(row => {
        const tds = row.split('|').filter(c => c.trim()).map(c => `<td>${c.trim()}</td>`).join('')
        return `<tr>${tds}</tr>`
      }).join('')
      return `<table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`
    })
    // Unordered list items
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    // Ordered list items
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Paragraphs — wrap lines that aren't already wrapped
    .split('\n\n')
    .map(block => {
      block = block.trim()
      if (!block) return ''
      if (/^<(h[1-6]|ul|ol|li|table|blockquote|hr)/.test(block)) return block
      return `<p>${block.replace(/\n/g, ' ')}</p>`
    })
    .join('\n')
}

const body = mdToHtml(markdown)

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Playfair+Display:wght@400;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 12.5pt;
    line-height: 1.75;
    color: #111111;
    background: #F5F0EB;
    padding: 60px 64px;
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22pt;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #111111;
    margin-bottom: 6px;
    padding-bottom: 16px;
    border-bottom: 1.5px solid #b4cbe6;
  }

  h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 14pt;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #111111;
    margin-top: 36px;
    margin-bottom: 12px;
    padding-bottom: 6px;
    border-bottom: 1px solid #EDE6DC;
  }

  h3 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 11.5pt;
    font-weight: 600;
    color: #111111;
    margin-top: 24px;
    margin-bottom: 8px;
  }

  h4 {
    font-size: 10pt;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #9A8E82;
    margin-top: 18px;
    margin-bottom: 6px;
  }

  p {
    margin-bottom: 10px;
    color: #111111;
  }

  ul {
    margin: 8px 0 12px 20px;
  }

  li {
    margin-bottom: 5px;
  }

  strong {
    font-weight: 600;
    color: #111111;
  }

  code {
    font-family: 'Courier New', monospace;
    font-size: 10.5pt;
    background: #EDE6DC;
    padding: 1px 5px;
    border-radius: 3px;
    color: #111111;
  }

  blockquote {
    border-left: 3px solid #b4cbe6;
    padding: 8px 16px;
    margin: 14px 0;
    background: #EDE6DC;
    border-radius: 0 4px 4px 0;
    color: #9A8E82;
    font-style: italic;
    font-size: 11.5pt;
  }

  hr {
    border: none;
    border-top: 1px solid #EDE6DC;
    margin: 28px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0 20px;
    font-size: 11pt;
  }

  th {
    background: #b4cbe6;
    color: #111111;
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    font-size: 9.5pt;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 8px 12px;
    text-align: left;
  }

  td {
    padding: 7px 12px;
    border-bottom: 1px solid #EDE6DC;
    vertical-align: top;
  }

  tr:last-child td { border-bottom: none; }
  tr:nth-child(even) td { background: rgba(237,230,220,0.4); }

  a {
    color: #111111;
    text-decoration: underline;
  }

  .footer {
    margin-top: 48px;
    padding-top: 16px;
    border-top: 1px solid #EDE6DC;
    font-size: 9pt;
    color: #9A8E82;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
</style>
</head>
<body>
${body}
<div class="footer">Beautigel Nails London &nbsp;·&nbsp; Confidential Client Guide</div>
</body>
</html>`

;(async () => {
  console.log('Launching browser...')
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: 'networkidle0' })
  const outputPath = path.join(__dirname, '../docs/payment-management-guide.pdf')
  await page.pdf({
    path: outputPath,
    format: 'A4',
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    printBackground: true,
  })
  await browser.close()
  console.log(`✓ PDF saved to: ${outputPath}`)
})()
