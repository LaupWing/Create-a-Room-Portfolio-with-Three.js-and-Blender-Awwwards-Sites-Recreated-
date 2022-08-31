import Experience from ".";
import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

export default class Camera {
   constructor(){
      this.experience = new Experience()
      this.sizes = this.experience.sizes
      this.canvas = this.experience.canvas
      this.scene = this.experience.scene
      
      OrbitControls
      this.createPerspectiveCamera()
      this.createOrthographicCamera()
      this.setOrbitControls()
      
   }
   createPerspectiveCamera(){
      this.perspectiveCamera = new THREE.PerspectiveCamera(
         35, 
         this.sizes.aspect, 
         0.1, 
         100
      )
      this.scene.add(this.perspectiveCamera)
      this.perspectiveCamera.position.z = 5
   }  
   createOrthographicCamera(){
      this.frustrum = 5
      this.orthographicCamera = new THREE.OrthographicCamera(
         (-this.sizes.aspect * this.sizes.frustrum)/2, 
         (this.sizes.aspect * this.sizes.frustrum)/2, 
         this.sizes.frustrum/2, 
         -this.sizes.frustrum/2,
         -100,
         100
      )
      this.scene.add(this.orthographicCamera)
   }

   setOrbitControls(){
      this.controls = new OrbitControls(this.perspectiveCamera, this.canvas)
      this.controls.enableDamping =true
      this.controls.enableZoom = true
   }

   resize(){
      this.perspectiveCamera.aspect = this.sizes.aspect
      this.perspectiveCamera.updateProjectionMatrix()

      this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum)/2
      this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum)/2
      this.orthographicCamera.top = this.sizes.frustrum/2
      this.orthographicCamera.bottom = -this.sizes.frustrum/2
   }

   update(){
      this.controls.update()
   }
}