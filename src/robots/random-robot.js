import { map } from '../map/map.js'
import { randomPick } from '../shared/random.js'

export function randomRobot(state) {
  return {
    direction: randomPick(map[state.place]),
    memory: [],
  }
}
