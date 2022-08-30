import Experience from "..";
import * as THREE from "three"

export default class Room {
   constructor(){
      this.experience = new Experience()
      this.scene = this.experience.scene
      this.resources = this.experience.resources
      this.room = this.resources.items.room
      this.actualRooom = this.room.scene
      
      this.setModel()
   }

   setModel(){
      this.scene.add(this.actualRooom)
   }

   resize(){
      
   }

   update(){
      
   }
}