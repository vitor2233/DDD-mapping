import { StockRepository } from '../repositories/stock-repository'

interface DefineMinimumStockUseCaseRequest {
    minimum: number
}
export class CreateStockUseCase {
    constructor(
        private stockRepository: StockRepository,
    ) { }

    async execute({ minimum }: DefineMinimumStockUseCaseRequest) {

        await this.stockRepository.defineMinimum(minimum)

        return minimum
    }
}