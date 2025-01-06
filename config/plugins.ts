export default ({ env }) => ({
    graphql: {
        config: {
            endpoint: '/graphql', // Ruta donde estará disponible el endpoint
            shadowCRUD: true, // Habilita el CRUD automático para tipos de contenido
            playgroundAlways: true, // Activa el entorno interactivo de GraphQL
            depthLimit: 10, // Limita la profundidad máxima de las consultas
            amountLimit: 100, // Limita la cantidad máxima de registros por consulta
        },
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
});
