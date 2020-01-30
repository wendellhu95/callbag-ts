import { forEach } from '../sinks/forEach'
import { interval } from './interval'

const dipose = forEach(v => console.log(v))(interval(100))
