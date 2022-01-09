# Notion Cover Image Image Generator

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcaolanxyz%2Fnotion-banners%2Ftree%2Fmain&env=NEXT_PUBLIC_LOGO&envDescription=512px%20Logo%20Image%20for%20cards%20(Upload%20to%20somewhere%20like%20'ibb.co'%20if%20you%20don't%20have%20a%20URL)&project-name=notion-covers&repo-name=notion-covers&demo-title=Notion%20Cover%20Generator&demo-description=Dynamically%20generated%20cover%20images%20for%20Notion%20Galleries&demo-url=https%3A%2F%2Fcovers.api.caolan.xyz&demo-image=https%3A%2F%2Fcovers.api.caolan.xyz%2Fapi%2Fimage%3FfileType%3Dpng%26layoutName%3DProject%26Theme%3DPurple%26title%3DHello%2BWorld%2521%26subtitle%3DHere%2527s%2Ban%2Bexample%2521%26Icon%3DHide)

Service that dynamically generates cover images for gallery view databases in [Notion](https://notion.so/product). These look something like

<img width="600" src="https://covers.api.caolan.xyz/api/image?fileType=png&layoutName=Project&Theme=Purple&title=Hello+World%21&subtitle=Here%27s+an+example%21&Icon=Hide" />

# 🧐 How It Works

Images are generated through the `/api/image` route. When you hit this route the following happens

- Query params are parsed
- Layout is looked up in list of layouts using the `layoutName` query param
- `layout.getCSS` called with all query params
- `layout.Component` is rendered with all query params as `config` prop
- HTML page built, rendered with Puppeteer, and screenshot
- Screenshot returned with a long cache max age

## Layouts

This service can generate images using multiple _layouts_. A layout is defined as a

- Collection of properties that are user configurable. The UI for these properties is auto genearted
- Function that takes in layout config and returns CSS needed to render
- A React component that takes in layout config as a prop

# 🚀 Development

To start hacking, do the following:

**One-click Deploy**

Use the button below to fork this repo and deploy to Vercel straight away!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcaolanxyz%2Fnotion-banners%2Ftree%2Fmain&env=NEXT_PUBLIC_LOGO&envDescription=512px%20Logo%20Image%20for%20cards%20(Upload%20to%20somewhere%20like%20'ibb.co'%20if%20you%20don't%20have%20a%20URL)&project-name=notion-covers&repo-name=notion-covers&demo-title=Notion%20Cover%20Generator&demo-description=Dynamically%20generated%20cover%20images%20for%20Notion%20Galleries&demo-url=https%3A%2F%2Fcovers.api.caolan.xyz&demo-image=https%3A%2F%2Fcovers.api.caolan.xyz%2Fapi%2Fimage%3FfileType%3Dpng%26layoutName%3DProject%26Theme%3DPurple%26title%3DHello%2BWorld%2521%26subtitle%3DHere%2527s%2Ban%2Bexample%2521%26Icon%3DHide)

**Advanced Users**

1. [Fork](https://github.com/nestdotland/og/fork) this repo and clone it
2. Run `yarn` or `npm install` to install all dependencies
3. Run locally with `yarn dev` and visit [`localhost:3000`](http://localhost:3000)

Now you're ready to start local development!

The frontend is a [NextJS](https://nextjs.org) site and the image generation happens in an API route.

```
# Start local development server
yarn dev

# Build for production
yarn build

# Start in production
yarn start
```

# 🙌 Acknowledgement

Credit where credit is due. This started as a forked repo from [Nest's OpenGraph image generator](https://github.com/nestdotland/og)

# License

This project is distributed under [The MIT Licese](./LICENSE)
