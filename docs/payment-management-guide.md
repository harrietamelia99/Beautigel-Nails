# Beautigel Nails London — Payment Management Guide

This guide covers everything you can manage yourself through the Stripe and Snipcart dashboards without needing a developer.

---

## Quick Reference

| Task | Where |
|------|-------|
| View orders & payments | Stripe Dashboard |
| Issue a refund | Stripe Dashboard |
| Create or change a discount code | Stripe Dashboard |
| Change subscription prices | Stripe Dashboard |
| Manage subscribers / cancel subscriptions | Stripe Dashboard |
| View cart activity & abandoned carts | Snipcart Dashboard |

---

## 1. Stripe Dashboard

**Login:** [dashboard.stripe.com](https://dashboard.stripe.com)

> Make sure you are in **Live mode** (toggle in the top-left corner). Test mode shows dummy data only.

---

### Viewing Orders & Payments

1. In the left menu, click **Payments**
2. Each row is a completed payment — click any row to see the full details (customer name, email, items, amount, date)
3. Use the search bar at the top to find a specific customer by name or email

---

### Issuing a Refund

1. Go to **Payments** and click the payment you want to refund
2. Click the **Refund** button (top right of the payment page)
3. Choose whether to refund the full amount or a partial amount
4. Click **Refund** to confirm — the money is returned to the customer's card within 5–10 business days
5. Stripe automatically sends the customer a refund confirmation email

---

### Discount Codes

#### Changing the WELCOME10 code

1. Go to **Products → Coupons** in the left menu
2. Find the coupon attached to WELCOME10 — click into it
3. Under **Promotion codes**, you will see `WELCOME10` listed
4. To **deactivate** it (stop it working), click the three dots next to it and select **Deactivate**
5. To **change the discount percentage**, you cannot edit an existing coupon — instead, deactivate it and create a new one (see below)

#### Creating a new discount code

1. Go to **Products → Coupons**
2. Click **+ Create coupon** (top right)
3. Fill in:
   - **Name** — internal label, e.g. "Summer Sale 15%"
   - **Type** — choose "Percentage" or "Fixed amount"
   - **Discount** — e.g. 15 for 15% off
   - **Duration** — "Once" means it applies to one payment only
   - **Redemption limits** — tick "Limit the total number of times this coupon can be redeemed" if you want to cap it (e.g. first 100 customers only)
   - **Expiry date** — optional, set a date for it to automatically stop working
4. Click **Create coupon**
5. On the next screen, click **Add promotion code**
6. Type the code customers will enter (e.g. `SUMMER15`) — use capitals, no spaces
7. Click **Create promotion code**

The new code will now work at checkout immediately.

---

### Subscriptions

#### Viewing active subscribers

1. Go to **Billing → Subscriptions** in the left menu
2. You'll see a list of all active subscribers with their name, plan, and renewal date

#### Cancelling a subscription on behalf of a customer

1. In **Billing → Subscriptions**, find the customer
2. Click their subscription
3. Click **Cancel subscription** — you can choose to cancel immediately or at the end of their current billing period
4. The customer will receive an automatic cancellation email from Stripe

#### Changing the price of a subscription plan

> Changing a subscription price in Stripe does **not** automatically update existing subscribers — they continue paying the old price until their subscription is manually updated. Only new subscribers will be charged the new price.

1. Go to **Products → Products** in the left menu
2. Click the subscription product (e.g. "Subscribe & Save — 2 Wraps")
3. Click **+ Add another price** to create a new price tier
4. Fill in the new amount and set the billing interval (monthly)
5. Click **Save**
6. Let your developer know the new price ID so the website checkout buttons can be updated

---

### Payouts — Getting Your Money

Stripe holds funds briefly before sending them to your bank account.

1. Go to **Balances** in the left menu
2. You'll see your available balance and pending balance
3. Payouts happen automatically on the schedule set in your account (usually every 7 days for new accounts, moving to 2 days over time)
4. To check or change your payout schedule: **Settings → Payouts**

---

## 2. Snipcart Dashboard

**Login:** [app.snipcart.com](https://app.snipcart.com)

Snipcart manages the shopping cart experience on the website (adding items, cart sessions). Payments themselves are processed by Stripe, so most of your day-to-day management will be in Stripe rather than here.

---

### What Snipcart is used for on this site

- Powering the "Add to Bag" button on product pages
- Tracking what is in each customer's cart session
- Viewing abandoned carts (customers who added items but didn't check out)

---

### Viewing Abandoned Carts

1. Log in and go to **Abandoned Carts** in the left menu
2. You'll see a list of sessions where customers added items but didn't complete checkout
3. You can use this information to follow up with customers (e.g. by sending them a discount code via email)

---

### Orders in Snipcart

Because this site uses Stripe for checkout, completed orders will appear in Stripe rather than in Snipcart's orders section. Use Stripe as your primary source of truth for all completed sales.

---

## 3. Things That Need a Developer

The following changes require edits to the website code and should be passed back to your developer:

| Task | Why it needs a developer |
|------|--------------------------|
| Changing the price of a one-time product | Prices for non-subscription products are set in the website code |
| Adding a new product to the shop | Requires a new product page and code changes |
| Changing the free shipping threshold (currently £35) | Set in the website code |
| Changing shipping prices or options | Set in the website code |
| Updating product photos or descriptions | Requires changes to the website files |

---

## 4. Contact & Support

If you're unsure about anything or something doesn't look right, please contact your developer before making changes in the dashboard — especially anything related to products or pricing, as some changes in Stripe affect all customers immediately.

**Stripe support:** [support.stripe.com](https://support.stripe.com)  
**Snipcart support:** [support.snipcart.com](https://support.snipcart.com)
