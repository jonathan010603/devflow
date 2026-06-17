import fastify from "fastify";

const app = fastify({ logger: true });

app.get('/health', async () => ({ status: 'ok' }))

const start = async () => {
    await app.listen({ port: 3333, host: '0.0.0.0' })
}

start()

export { app }