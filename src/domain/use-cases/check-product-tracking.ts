import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { TrackingRepository } from '../repositories/tracking-repository'

interface CheckProductTrackingUseCaseRequest {
    idProduct: string
}
export class CheckProductTrackingUseCase {
    constructor(
        private trackingRepository: TrackingRepository,
    ) { }

    async execute({ idProduct }: CheckProductTrackingUseCaseRequest) {
        const tracking = await this.trackingRepository.trackProduct(new UniqueEntityID(idProduct))

        return tracking
    }
}