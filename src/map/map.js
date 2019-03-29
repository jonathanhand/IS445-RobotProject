import { paths } from './paths.js' //import array of connections
//paths acts as a global variable in the file, so functions can access it
function addEdge(map, from, to) {
  if (map[from] === undefined) {
    map[from] = [to]
  } else {
    map[from].push(to) //adds 'to' to a key 'from' in map
  }
}

function buildGraph() {
  const map = Object.create(null)

  const ends = paths.map(r => r.split('-'))
  for (let [from, to] of ends) { //adds the split into var from and two (called destruction)
    addEdge(map, from, to)
    addEdge(map, to, from)
  }

  return map //returns addedge
}

export const map = buildGraph() //exporting the map (don't need to pass paths because global)

export const START_PLACE = 'Post Office' //place you start at
