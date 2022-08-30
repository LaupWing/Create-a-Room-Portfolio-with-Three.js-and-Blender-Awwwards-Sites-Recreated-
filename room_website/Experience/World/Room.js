import Experience from "..";
import * as THREE from "three"

export default class Room {
   constructor(){
      this.experience = new Experience()
      this.scene = this.experience.scene
      this.resources = this.experience.resources
      this.room = this.resources.items.room
      this.actualRooom = this.room.scene
      console.log(this.actualRooom)
   }

   resize(){
      
   }

   update(){
      
   }
}