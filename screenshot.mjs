import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const pages = [
  { url: 'http://localhost:3004', filename: 'homepage.png' },
  { url: 'http://localhost:3004/products', filename: 'products.png' },
  { url: 'http://localhost:3004/products/starter-kit', filename: 'starter-kit.png' },
  { url: 'http://localhost:3004/about', filename: 'about.png' },
  { url: 'http://localhost:3004/how-to', filename: 'how-to.png' },
]

const outDir = path.join(__dirname, 'public', 'previews')
fs.mkdirSync(outDir, { recursive: true })

const browser = await puppeteer.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  defaultViewport: { width: 1440, height: 900 },
})

const page = await browser.newPage()

for (const p of pages) {
  console.log(`📸 Capturing ${p.filename}...`)
  await page.goto(p.url, { waitUntil: 'networkidle0', timeout: 30000 })
  await new Promise(r => setTimeout(r, 1500))
  await page.screenshot({ path: path.join(outDir, p.filename), fullPage: true })
  console.log(`   ✓ Saved`)
}

await browser.close()
console.log('\nAll screenshots saved to public/previews/')
