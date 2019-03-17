import { roadGraph } from './graph.js'

/**
 * There’s the robot’s current location and the collection
 * of undelivered parcels, each parcel has a current
 * location and a destination address.
 */

export class VillageState {
  constructor(place, parcels) {
    this.place = place
    this.parcels = parcels
  }

  move(destination) {
    // It first checks whether there is a road going
    // from the current place to the destination,
    // and if not, it returns the old state since
    // this is not a valid move.
    if (!roadGraph[this.place].includes(destination)) {
      return this
    } else {
      let parcels = this.parcels
        .map(p => {
          let result = p
          if (p.place == this.place) {
            result = { place: destination, address: p.address }
          }
          return result
        })
        .filter(p => p.place != p.address) // remove delivered
      return new VillageState(destination, parcels)
    }
  }
}
