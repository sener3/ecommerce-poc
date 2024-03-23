"use client"

import { FC, PropsWithChildren } from "react"
import { client } from "@/graphql/client"
import { ApolloProvider } from "@apollo/client"

interface ApolloWrapperProps extends PropsWithChildren {}

const ApolloWrapper: FC<ApolloWrapperProps> = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloWrapper
