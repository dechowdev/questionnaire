import { Controller } from "stimulus"
import { questions } from "./questions.json";

export default class extends Controller {
  static targets = [ "output" ]
  connect() {
    document.addEventListener("keydown",this.inputEvent);
  }

  disconnect() {
    document.removeEventListener("keydown", this.inputEvent);
  }

  inputEvent = (e) => {
    if(e.keyCode === 32 || e.keyCode === 13) {
      this.greet();
    }
  }

  greet() {
    var maxOutput = questions.length - 1;
    var randomIndex = Math.floor(Math.random() * (maxOutput - 0+1)+0);
    var question = questions[randomIndex]
    this.outputTarget.textContent = question;
  }
}
