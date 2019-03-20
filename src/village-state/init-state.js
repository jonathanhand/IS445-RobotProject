import { map } from '../map/map.js'
import { randomPick } from '../shared/random.js'
import { VillageState } from './village-state.js'

const START_PLACE = 'Post Office'

export function initStates(parcelCount = 5) {
  const parcelAddresses = Object.keys(map).filter(address => address !== START_PLACE)
  const parcels = []
  for (let count = 0; count < parcelCount; count++) {
    let address = randomPick(parcelAddresses)
    parcels.push(address)
  }
  return new VillageState(START_PLACE, parcels)
}
