import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

const GRAPHQL_ENDPOINT = "http://localhost:4000/graphql"

export const client = new ApolloClient({
    link: new HttpLink({
        uri: GRAPHQL_ENDPOINT,
        fetch: async (uri, options) => {
            const res = await fetch(uri, {
                ...options,
                headers: {
                    ...options?.headers,
                },
            })
            return res
        },
    }),
    cache: new InMemoryCache(),
})
