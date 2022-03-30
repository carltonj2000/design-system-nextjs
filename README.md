# A Design System With NextJS

The code in this repo is based on the following.

- [Create a Design System with CSS](https://youtu.be/lRaL-8qZ0mM)
  Run the development server via:

Imported the figma drawing at the above link to

https://www.figma.com/file/o8ytwSHyFpWR1TKVMUdLDJ/space-tourism-website?node-id=0%3A1

## Code History

Set up form:

- https://nextjs.org/learn/excel/typescript
- https://vanilla-extract.style/documentation/setup/#nextjs
- https://blog.logrocket.com/vanilla-extract-tutorial-create-zero-runtime-stylesheets-in-typescript/

```bash
yarn dev
yarn add --dev typescript @types/react @types/node
# rename .js files to .tsx and modify _app.tsx
npm install @vanilla-extract/css @vanilla-extract/babel-plugin @vanilla-extract/next-plugin
# modify next.config.js according to link above
npm install @vanilla-extract/sprinkles
```
