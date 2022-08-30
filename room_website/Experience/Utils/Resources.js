import { EventEmitter } from "events"
import Experience from ".."

export default class Resources extends EventEmitter {
   constructor(){
      super()
      this.experience = new Experience()
      
   }
}