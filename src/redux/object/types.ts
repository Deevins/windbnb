import { BuildingType } from '../../@types/BuildingType'
import { FetchStatusEnum } from '../../@types/enums/FetchStatusEnum'

export interface IBuildingSliceState {
  items: BuildingType[]
  status: FetchStatusEnum
}
