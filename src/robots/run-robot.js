import { print } from '../view/print.js'

function runRobot(robot, state, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      print(`Done in ${turn} turns`)
      break
    }
    let action = robot(state, memory)
    state = state.move(action.direction)
    memory = action.memory
    print(`Moved to ${action.direction}`)
  }
}
