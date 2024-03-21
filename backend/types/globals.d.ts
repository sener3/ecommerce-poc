declare global {
    interface IResponse {
        message: string
        code: number
    }
    interface IResponseWithData<T> extends IResponse {
        data: T
    }
    type PartialExceptOne<T, K extends keyof T> = Partial<T> &
        Required<Pick<T, K>>
}

export {}
