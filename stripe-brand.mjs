import Stripe from 'stripe'
import fs from 'fs'

const key = process.env.STRIPE_SECRET_KEY
if (!key) { console.error('No STRIPE_SECRET_KEY'); process.exit(1) }

const stripe = new Stripe(key, { apiVersion: '2026-06-24.dahlia' })

// 1. Upload icon
console.log('Uploading icon…')
const file = await stripe.files.create({
  purpose: 'business_icon',
  file: {
    data: fs.readFileSync('/tmp/beautigel-icon.png'),
    name: 'beautigel-icon.png',
    type: 'image/png',
  },
})
console.log('Icon uploaded:', file.id)

// 2. Update account branding
console.log('Setting brand colours & icon…')
const account = await stripe.account.update({
  settings: {
    branding: {
      icon: file.id,
      primary_color: '#b4cbe6',
      secondary_color: '#111111',
    },
  },
})
console.log('Branding updated ✓', account.settings?.branding)
