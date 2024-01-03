import { UniqueEntityID } from '../../core/entities/unique-entity-id'
import { Tracking } from '../entities/tracking'
import { TrackingRepository } from '../repositories/tracking-repository'

interface CreateTrackingUseCaseRequest {
    idProduct: UniqueEntityID
    action: string
}
export class CreateTrackingUseCase {
    constructor(
        private trackingRepository: TrackingRepository,
    ) { }

    async execute({ idProduct, action }: CreateTrackingUseCaseRequest) {
        const tracking = Tracking.create({
            idProduct,
            action,
        })

        await this.trackingRepository.create(tracking)

        return tracking
    }
}