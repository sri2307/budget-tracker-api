import swaggerJSDoc, { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Budget Tracker API',
      version: '1.0.0',
      description: 'API documentation for the Budget Tracker application',
    },
    servers: [
      {
        url: 'https://budget-tracker-api-mybm.onrender.com',
        // url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Adjust paths to your route and controller files
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
