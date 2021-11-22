import { leaderBoard } from "./view.js"
import { scores } from "./logic.js"
import { sortScores } from "./helpers.js"

leaderBoard(sortScores(scores));