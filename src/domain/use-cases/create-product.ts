import { Product } from '../entities/product'
import { ProductRepository } from '../repositories/product-repository'

interface CreateProductUseCaseRequest {
    size: string
    color: string
    buyPrice: number
    sellPrice: number
}
export class CreateProductUseCase {
    constructor(
        private productRepository: ProductRepository,
    ) { }

    async execute({ size, color, buyPrice, sellPrice }: CreateProductUseCaseRequest) {
        const product = Product.create({
            size,
            color,
            buyPrice,
            sellPrice,
        })

        await this.productRepository.create(product)

        return product
    }
}