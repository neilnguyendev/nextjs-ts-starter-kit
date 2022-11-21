const configs = {
  api_prod: process.env.API_PROD,
  api_dev: process.env.API_DEV,
  api: process.env.WEBSITE || 'http://localhost:4000', // Host for Project
  exceptionPath: ['static', '_next'],
  siteName: 'Starter',
  title: 'Next.js Typescript Starter Kit',
  description: 'Starter code for your Nextjs Boilerplate with Tailwind CSS',
  locale: 'en',
};

export default configs;
