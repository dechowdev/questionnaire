import { Application } from "stimulus"

import QuestionController from "./question_controller"

const application = Application.start()
application.register("question", QuestionController)
