import { roads } from './roads.js'

function addEdge(graph, from, to) {
  if (graph[from] == null) {
    graph[from] = [to]
  } else {
    graph[from].push(to)
  }
}

function buildGraph(roads) {
  let graph = Object.create(null)
  for (let [from, to] of roads.map(r => r.split('-'))) {
    addEdge(graph, from, to)
    addEdge(graph, to, from)
  }
  return graph
}

export const roadGraph = buildGraph(roads)
