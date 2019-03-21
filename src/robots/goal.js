import { map } from '../map/map.js'

function findRoute(from, to) {
  let work = [{ at: from, routes: [] }]
  for (let i = 0; i < work.length; i++) {
    let { at, routes } = work[i]
    for (let place of map[at]) {
      if (place === to) {
        routes.push(place)
        return routes
      }
      if (!work.some(w => w.at == place)) {
        work.push({ at: place, routes: routes.concat(place) })
      }
    }
  }
}

let routes = []
export function goGoal(state) {
  let next
  const { place, parcels } = state
  if (routes.length === 0) {
    routes = findParcelRoute(place, parcels[0])
  }
  next = routes[0]
  routes = routes.slice(1)
  return next
}

function findParcelRoute(place, parcel) {
  let routes
  if (place === parcel.from) {
    // find a route to deliver the parcel
    routes = findRoute(place, parcel.to)
  } else {
    // find a route to get the parcel
    routes = findRoute(place, parcel.from)
  }
  return routes
}
