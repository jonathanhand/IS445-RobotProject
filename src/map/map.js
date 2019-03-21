import { paths } from './paths.js'

function addEdge(map, from, to) {
  if (map[from] == null) {
    map[from] = [to]
  } else {
    map[from].push(to)
  }
}

function buildGraph(paths) {
  const map = Object.create(null)

  const ends = paths.map(r => r.split('-'))
  for (let [from, to] of ends) {
    addEdge(map, from, to)
    addEdge(map, to, from)
  }

  return map
}

export const map = buildGraph(paths)

export const START_PLACE = 'Post Office'
