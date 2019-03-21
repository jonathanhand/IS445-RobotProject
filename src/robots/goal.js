import { map } from '../map/map.js'

function findRoute(from, to) {
  let work = [{ at: from, routes: [] }]
  for (let index = 0; index < work.length; index++) {
    let { at, routes } = work[index]
    for (let nextPlace of map[at]) {
      if (nextPlace === to) {
        routes.concat(nextPlace)
        return routes
      }
      // if it is not already in the array, add the place
      if (!work.some(w => w.at === nextPlace)) {
        work.push({ at: nextPlace, routes: routes.concat(nextPlace) })
      }
    }
  }
}

let routes = []
export function goGoal(state) {
  let next
  const { place, parcels } = state
  if (routes.length == 0) {
    let parcel = parcels[0]
    if (place === parcel.from) {
      // find a route to deliver the parcel
      routes = findRoute(place, parcel.to)
    } else {
      // find a route to get the parcel
      routes = findRoute(place, parcel.from)
    }

    next = routes[0]
    routes = routes.slice(1)
  }
  return next
}
