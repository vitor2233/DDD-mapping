import { StockRepository } from '../repositories/stock-repository'

export class CreateStockUseCase {
    constructor(
        private stockRepository: StockRepository,
    ) { }

    async execute() {

        const alert = await this.stockRepository.sendAlert()

        return alert
    }
}