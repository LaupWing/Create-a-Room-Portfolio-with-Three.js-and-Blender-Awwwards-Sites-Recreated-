import Experience from "..";
import * as THREE from "three"

export default class Room {
   constructor(){
      this.experience = new Experience()
      this.scene = this.experience.scene
      this.resources = this.experience.resources
      this.room = this.resources.items.room
      this.actualRooom = this.room.scene
      this.time = this.experience.time
      
      this.setModel()
      this.setAnimation()
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
            child.material.color.set(0x549dd2)
            child.material.ior = 3
            child.material.transmission = 1
            child.material.opacity =1
         }

         if(child.name === "Computer_Screen"){
            child.material = new THREE.MeshBasicMaterial({
               map: this.resources.items.screen
            })
         }
      })

      this.scene.add(this.actualRooom)
      this.actualRooom.scale.set(0.11, 0.11, 0.11)
      this.actualRooom.rotation.y = Math.PI
   }

   setAnimation(){
      this.mixer = new THREE.AnimationMixer(this.actualRooom)
      this.room.animations.forEach(a=>{
         const swim = this.mixer.clipAction(a)
         swim.play()
      })
   }

   resize(){
      
   }

   update(){
      this.mixer.update(this.time.delta * 0.0009)
   }
}