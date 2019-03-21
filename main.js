import { initStates } from './src/village-state/init-state.js'
import { runRobot } from './src/robots/run-robot.js'
import { goRandom } from './src/robots/random.js'
import { goRoute } from './src/robots/route.js'
import { goGoal } from './src/robots/goal.js'

const start = initStates()
// runRobot(goRandom, start)

// runRobot(goRoute, start)
runRobot(goGoal, start)
