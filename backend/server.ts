import resolvers from "@/graphql/resolvers"
import typeDefs from "@/graphql/type-defs"
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

async function startServer() {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context: async ({ req }) => {
            const token = req.headers.authorization
            return { token }
        },
    })

    console.log(`🚀Server ready at: ${url}`)
}

startServer()
