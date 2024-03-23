"use client"

import { GetProducts } from "@/graphql/queries/product.gql"
import { useQuery } from "@apollo/client"
import Product from "./product"

export default function Products() {
    const { data, loading, error } = useQuery(GetProducts)
    console.log("data", data)

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error!</p>

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our products
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Discover our products
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {data?.getProducts?.data?.map((product) => (
                        <Product key={product?.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}
