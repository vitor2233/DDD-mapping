import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Sell } from '../entities/sell'
import { SellRepository } from '../repositories/sell-repository'

interface SellProductUseCaseRequest {
    idProduct: string
}
export class SellProductUseCase {
    constructor(
        private sellRepository: SellRepository,
    ) { }

    async execute({ idProduct }: SellProductUseCaseRequest) {
        const sell = Sell.create({
            idProduct: new UniqueEntityID(idProduct),
        })

        await this.sellRepository.create(sell)

        return sell
    }
}