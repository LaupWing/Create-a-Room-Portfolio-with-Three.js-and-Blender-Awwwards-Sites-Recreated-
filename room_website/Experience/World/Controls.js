import Experience from "..";
import * as THREE from "three"

export default class Controls {
   constructor(){
      this.experience = new Experience()
      this.scene = this.experience.scene
      this.resources = this.experience.resources
      this.time = this.experience.time
      
      this.setPath()
   }

   setPath(){
      this.curve = new THREE.CatmullRomCurve3([
         new THREE.Vector3(-10, 0, 10),
         new THREE.Vector3(-5, 5, 5),
         new THREE.Vector3(0, 0, 0),
         new THREE.Vector3(5, -5, 5),
         new THREE.Vector3(10, 0, 10)
      ])

      const points = this.curve.getPoints(50)
      const geomtry = new THREE.BufferGeometry().setFromPoints(points)

      const material = new THREE.LineBasicMaterial({color: 0xff0000})

      const curveObject = new THREE.Line(geomtry, material)

      this.scene.add(curveObject)
   }

   resize(){
      
   }

   update(){
      
   }
}