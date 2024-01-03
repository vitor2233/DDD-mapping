import { SellRepository } from '../repositories/sell-repository'

interface CheckSellHistoryUseCaseRequest {
    initialDate: Date
    endDate: Date
}
export class CheckSellHistoryUseCase {
    constructor(
        private sellRepository: SellRepository,
    ) { }

    async execute({ initialDate, endDate }: CheckSellHistoryUseCaseRequest) {

        const sells = await this.sellRepository.checkHistory(initialDate, endDate)

        return sells
    }
}