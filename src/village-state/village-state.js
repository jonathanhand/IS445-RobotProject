import { map } from '../map/map.js'

export class VillageState {
  constructor(place, parcels) {
    this.place = place
    this.parcels = parcels
  }

  // check if there is a path to the destination
  // if not, return the current state
  // else, create a state with a new place and to-be-delivered parcels
  move(destination) {
    if (map[this.place].includes(destination)) {
      // now arrive destination,
      const undeliveredParcels = deliverParces(destination)
      return new VillageState(destination, undeliveredParcels)
    } else {
      // ooops, no way to go, return current state
      return this
    }
  }

  deliverParces(destination) {
    // drop a parcel when its address is the destination
    let undeliveredParcels = this.parcels.filter(p => {
      p.address !== p.destination
    })

    return undeliveredParcels
  }
}
