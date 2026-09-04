# ProGear Mats

Responsive React and Tailwind website for a premium car-mat brand. Customer enquiries continue through WhatsApp; there is no checkout or backend.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.
 
## Common edits

| Change | File |
| --- | --- |
| WhatsApp number, phone, email, address or map | `src/data.js` → `site` |
| 7D/9D collections, colours and specifications | `src/data.js` → `products` |
| Confirmed client fittings | `src/data.js` → `fitments` |
| Car-finder brands and models | `src/data.js` → `carBrands` / `carModels` |
| Reviews, benefits and process steps | `src/data.js` |
| Homepage section order | `src/pages/Home.jsx` |
| Global colours, spacing and component styles | `src/index.css` |
| Logo and product photography | `public/images/` |

Keep image filenames unchanged to replace artwork without editing code. Add a confirmed vehicle once inside `fitments`; the collection detail and homepage fitment lists will use that shared source.

## Deploy to Vercel

Import the GitHub repository and keep the detected Vite settings. `vercel.json` already provides the SPA route fallback needed for direct product-page links.
