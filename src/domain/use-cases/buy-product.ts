import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Buy } from '../entities/buy'
import { BuyRepository } from '../repositories/buy-repository'

interface BuyProductUseCaseRequest {
    idProduct: string
    deliveryTime: string
}
export class BuyProductUseCase {
    constructor(
        private buyRepository: BuyRepository,
    ) { }

    async execute({ idProduct, deliveryTime }: BuyProductUseCaseRequest) {
        const buy = Buy.create({
            idProduct: new UniqueEntityID(idProduct),
            deliveryTime
        })

        await this.buyRepository.create(buy)

        return buy
    }
}