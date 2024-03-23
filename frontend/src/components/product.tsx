import Link from "next/link"
import { GetProductResponse } from "@/__generated__/types"

interface ProductProps {
    product: GetProductResponse["data"]
}

export default function Product({ product }: ProductProps) {
    if (!product) return null

    return (
        <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href="#">
                        <span className="absolute inset-0" />
                        {product.name}
                    </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {product.description}
                </p>
            </div>
        </article>
    )
}
