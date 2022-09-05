import Experience from "..";
import * as THREE from "three"
import GSAP from "gsap"

export default class Controls {
   constructor(){
      this.experience = new Experience()
      this.scene = this.experience.scene
      this.resources = this.experience.resources
      this.time = this.experience.time
      this.camera = this.experience.camera

      this.progress = 0
      this.dummyVector = new THREE.Vector3(0,0,0)

      this.lerp = {
         current: 0,
         target: 0,
         ease: 0.1
      }
      this.position = new THREE.Vector3(0,0,0)
      this.lookAtPosition = new THREE.Vector3(0, 0, 0)

      this.directionalVector = new THREE.Vector3(0, 0, 0)
      this.staticVector = new THREE.Vector3(0, 1, 0)
      this.crossVector = new THREE.Vector3(0, 0, 0)

      this.setPath()
      this.onWheel()
   }

   setPath(){
      this.curve = new THREE.CatmullRomCurve3([
         new THREE.Vector3(-5, 0, 0),
         new THREE.Vector3(0, 0, -5),
         new THREE.Vector3(5, 0, 0),
         new THREE.Vector3(0, 0, 5)
      ], true)

      const points = this.curve.getPoints(50)
      const geomtry = new THREE.BufferGeometry().setFromPoints(points)

      const material = new THREE.LineBasicMaterial({color: 0xff0000})

      const curveObject = new THREE.Line(geomtry, material)

      this.scene.add(curveObject)
   }

   onWheel(){
      window.addEventListener("wheel", (e)=>{
         if(e.deltaY > 0){
            this.lerp.target += 0.01
            this.back = false
         }else{
            this.lerp.target -= 0.01
            this.back = true
         }
      })
   }

   resize(){
      
   }

   update(){
      this.lerp.current = GSAP.utils.interpolate(
         this.lerp.current,
         this.lerp.target,
         this.lerp.ease
      )
      this.curve.getPointAt(this.lerp.current %1, this.position)
      this.camera.orthographicCamera.position.copy(this.position)

      this.directionalVector.subVectors(
         (this.lerp.current%1) + 0.000001, 
         this.position
      )
      this.directionalVector.normalize()
   }
}