import { HttpCode } from "@/utils/http-code"
import { erorrMessages, successMessages } from "@/utils/response-messages"
import { PartialProductRequiredId, ProductOmitId } from "@/types/product"
import db, { Product } from "@/lib/db"

const getProduct = async (
    id: string
): Promise<IResponseWithData<Product | null>> => {
    try {
        const foundProduct = await db.product.findUnique({
            where: {
                id: id,
            },
        })

        if (!foundProduct) {
            return {
                data: null,
                message: erorrMessages.PRODUCT_NOT_FOUND,
                code: HttpCode.NOT_FOUND,
            }
        }

        return {
            data: foundProduct,
            message: successMessages.PRODUCT_FOUND,
            code: HttpCode.OK,
        }
    } catch (err) {
        return {
            data: null,
            message: erorrMessages.GENERAL,
            code: HttpCode.BAD_REQUEST,
        }
    }
}

const getProducts = async (): Promise<IResponseWithData<Product[] | null>> => {
    try {
        const foundProducts = await db.product.findMany({})

        if (!foundProducts.length) {
            return {
                data: foundProducts,
                message: erorrMessages.PRODUCTS_NOT_FOUND,
                code: HttpCode.NOT_FOUND,
            }
        }

        return {
            data: foundProducts,
            message: successMessages.PRODUCTS_FOUND,
            code: HttpCode.OK,
        }
    } catch (err) {
        return {
            data: null,
            message: erorrMessages.GENERAL,
            code: HttpCode.BAD_REQUEST,
        }
    }
}

const createProduct = async (product: ProductOmitId): Promise<IResponse> => {
    try {
        await db.product.create({
            data: product,
        })
        return {
            message: successMessages.PRODUCT_CREATED,
            code: HttpCode.OK,
        }
    } catch (err) {
        return {
            message: erorrMessages.PRODUCT_NOT_CREATED,
            code: HttpCode.BAD_REQUEST,
        }
    }
}

const updateProduct = async (
    product: PartialProductRequiredId
): Promise<IResponse> => {
    try {
        const { id, ...productBody } = product

        await db.product.update({
            where: {
                id: id,
            },
            data: productBody,
        })

        return {
            message: successMessages.PRODUCT_UPDATED,
            code: HttpCode.OK,
        }
    } catch (err) {
        return {
            message: erorrMessages.PRODUCT_NOT_UPDATED,
            code: HttpCode.BAD_REQUEST,
        }
    }
}

const productResolver = {
    Query: {
        getProduct: async (_, { id }: { id: string }) => getProduct(id),
        getProducts: () => getProducts(),
    },
    Mutation: {
        createProduct: async (_, { product }: { product: ProductOmitId }) =>
            createProduct(product),
        updateProduct: async (
            _,
            { product }: { product: PartialProductRequiredId }
        ) => updateProduct(product),
    },
}

export default productResolver
