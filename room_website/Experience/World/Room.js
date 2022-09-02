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
      this.actualRooom.children.forEach(child =>{
         child.castShadow = true
         child.receiveShadow = true
         
         if(child instanceof THREE.Group){
            child.children.forEach(groupChild=>{
               groupChild.castShadow = true
               groupChild.receiveShadow = true
            })
         }

         if(child.name === "Aquarium_glass"){
            child.material = new THREE.MeshPhysicalMaterial()
            child.material.roughness = 0
            child.material.color.set(0xffffff)
            child.material.ior = 3
            child.material.transmission = 1
            child.material.opacity =1
         }
      })

      this.scene.add(this.actualRooom)
      this.actualRooom.scale.set(0.11, 0.11, 0.11)
      this.actualRooom.rotation.y = Math.PI
   }

   resize(){
      
   }

   update(){
      
   }
}