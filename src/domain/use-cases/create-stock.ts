import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Stock } from '../entities/stock'
import { StockRepository } from '../repositories/stock-repository'

interface CreateStockUseCaseRequest {
    idProduct: UniqueEntityID
    minimum: number
}
export class CreateStockUseCase {
    constructor(
        private stockRepository: StockRepository,
    ) { }

    async execute({ idProduct, minimum }: CreateStockUseCaseRequest) {
        const stock = Stock.create({
            idProduct,
            minimum,
        })

        await this.stockRepository.create(stock)

        return stock
    }
}