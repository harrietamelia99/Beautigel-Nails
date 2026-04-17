/**
 * Mock product data sourced from the client's Shopify store at 43bff2-b4.myshopify.com
 * Used as a preview fallback until the Storefront API token is connected.
 * Images are temporary picsum.photos placeholders — will be replaced by real Shopify CDN images once live.
 */

import { Product } from './types'

function makeImage(path: string) {
  return {
    url: path,
    altText: null,
    width: 1200,
    height: 1600,
  }
}

function makeVariant(price: string, compareAtPrice: string | null = null) {
  return {
    id: `mock-variant-${Math.random().toString(36).slice(2)}`,
    title: 'Default Title',
    availableForSale: true,
    quantityAvailable: 99,
    price: { amount: price, currencyCode: 'GBP' },
    compareAtPrice: compareAtPrice
      ? { amount: compareAtPrice, currencyCode: 'GBP' }
      : null,
    selectedOptions: [{ name: 'Title', value: 'Default Title' }],
  }
}

const DESCRIPTIONS: Record<string, string> = {
  'UV Lamp': '<p>Our compact UV lamp cures your Beautigel gel nail wraps in just 60–90 seconds for a hard, glossy, salon-quality finish. Lightweight and easy to use at home.</p><ul><li>Cures in 60–90 seconds</li><li>Compatible with all Beautigel gel wraps</li><li>Compact and travel-friendly</li><li>Long-lasting chip-resistant results</li></ul>',
  'Gel Wraps': '<p>Premium semi-cured gel nail wraps that deliver a polished, salon-effect manicure from the comfort of home. Each kit contains wraps in a range of sizes to fit every nail.</p><ul><li>16 wraps per kit (fits most hand sizes)</li><li>Lasts up to 2–3 weeks</li><li>Cure under UV lamp for 60–90 seconds</li><li>Removes without damage</li><li>Cruelty-free and vegan</li></ul>',
  'Cuticle Oil': '<p>A nourishing cuticle oil formulated to hydrate, strengthen and revitalise your natural nails. Apply daily for best results, especially after wearing gel wraps.</p><ul><li>Available in Strawberry, Peach, Lavender and Rose</li><li>Vegan and cruelty-free</li><li>Suitable for daily use</li><li>Helps maintain nail health between manicures</li></ul>',
}

function makeProduct(
  handle: string,
  title: string,
  price: string,
  productType: string,
  imageSeed: string,
  compareAtPrice: string | null = null,
  tags: string[] = [],
): Product {
  const img = makeImage(imageSeed)
  const descHtml = DESCRIPTIONS[productType] ?? DESCRIPTIONS['Gel Wraps']
  return {
    id: `mock-${handle}`,
    handle,
    title,
    description: descHtml.replace(/<[^>]+>/g, ''),
    descriptionHtml: descHtml,
    productType,
    tags,
    availableForSale: true,
    images: [img],
    featuredImage: img,
    price,
    compareAtPrice,
    currencyCode: 'GBP',
    variants: [makeVariant(price, compareAtPrice)],
    options: [{ name: 'Title', values: ['Default Title'] }],
    isPreOrder: false,
    estimatedShipDate: null,
  }
}

export const MOCK_PRODUCTS: Product[] = [
  makeProduct(
    'starter-kit',
    'The Ultimate Starter Kit',
    '[TBC]',
    'Starter Kit',
    '/products/starter-kit.png',
    null,
    ['starter-kit'],
  ),
  makeProduct(
    'coffee-and-cream-ombre-semi-cured-gel-nail-wrap-kit',
    'Coffee and Cream Ombré Semi-Cured Gel Nail Wrap Kit',
    '13.99',
    'Gel Wraps',
    '/products/coffee-and-cream.png',
    null,
    ['gel-wraps', 'ombre-and-marbled'],
  ),
  makeProduct(
    'candy-apple-red-glitter-semi-cured-gel-nail-wrap-kit',
    'Candy Apple Red Glitter Semi-Cured Gel Nail Wrap Kit',
    '13.99',
    'Gel Wraps',
    '/products/candy-apple-red.png',
    null,
    ['gel-wraps', 'glitter'],
  ),
  makeProduct(
    'black-french-tip-semi-cured-gel-nail-wrap-kit',
    'Black French Tip Semi-Cured Gel Nail Wrap Kit',
    '13.99',
    'Gel Wraps',
    '/products/black-french-tip.png',
    null,
    ['gel-wraps', 'french-tips'],
  ),
  makeProduct(
    'cappuccino-semi-cured-gel-nail-wrap-kit',
    'Cappuccino Semi-Cured Gel Nail Wrap Kit',
    '13.99',
    'Gel Wraps',
    '/products/cappuccino.png',
    null,
    ['gel-wraps', 'classic'],
  ),
  makeProduct(
    'cherry-blossom-semi-cured-gel-nail-wrap-kit',
    'Cherry Blossom Semi-Cured Gel Nail Wrap Kit',
    '13.99',
    'Gel Wraps',
    '/products/cherry-blossom.png',
    null,
    ['gel-wraps', 'nail-art'],
  ),
]
