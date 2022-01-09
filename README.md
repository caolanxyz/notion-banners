# Notion Cover Image Image Generator

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcaolanxyz%2Fnotion-banners"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

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

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcaolanxyz%2Fnotion-banners"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

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
