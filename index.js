const fastify = require('fastify')({ logger: true })

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

fastify.get('/goodbye', async (request, reply) => {
    return { goodbye: 'world!' }
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen({host: '0.0.0.0', port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
