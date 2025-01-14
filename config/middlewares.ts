// config/middlewares.ts

export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'https://market-assets.strapi.io'], // Aquí añadimos https://market-assets.strapi.io
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://157.173.210.105:1337'],  // Orígenes permitidos
      // origin: ['http://localhost:3000', 'http://localhost:1337'],   Orígenes permitidos
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],       // Métodos permitidos
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept'], // Encabezados permitidos
      credentials: true,  // Permite el uso de cookies si es necesario
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
