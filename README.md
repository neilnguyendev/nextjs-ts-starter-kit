<h1 align="center">Next.js + Typescript + React + Redux Saga + TailwindCSS</h1>

<p align="center">
  <a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/Next.js-v13-blueviolet.svg"></a>
  <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/React-v18-%238DD6F9.svg?logo=React"></a>
</p>

Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

This project helps you:

1. Have basic knowledge about Next.js: Routing; Pre-rendering (Static Generation, Server-side Rendering); Static file serving; API routes; Environment variables;...  
2. Have available configurations for CSS packages: SASS/SCSS, Tailwind, PostCSS. 
3. Work with forms, and validate fields by React Hook Form and Yup.
4. Work with Redux, Redux Saga configured to be compatible with Next.js.
5. Update SEO metadata, JSON-LD and Open Graph tags with Next SEO.
6. Absolute imports using @ prefix.
7. Write code better with Typescript, ESLint and Prettier.
8. Write unit tests with Jest.
9. Set up a reverse proxy to backend for preventing CORS attacks.
10. Using Axios to send HTTP request.
11. Start developing your web project easily and quickly.

Learn more here: https://nextjs.org/docs/getting-started

## Configurations

.env file:

```bash
#== ENVIRONMENT
NODE_ENV=<production or development>

#== APP
NEXT_PUBLIC_WEB_URL=<domain of the web>
BACKEND_URL=<url of the backend>
```

## Install and run the app
For development (Node 16, Yarn):
```bash
$ yarn
$ yarn dev
```

For running on live servers:
```bash
$ yarn start

# Then please config Nginx
```

Reference: 
+ https://github.com/microvn/nextjs-startkit
+ https://github.com/ixartz/Next-js-Boilerplate

