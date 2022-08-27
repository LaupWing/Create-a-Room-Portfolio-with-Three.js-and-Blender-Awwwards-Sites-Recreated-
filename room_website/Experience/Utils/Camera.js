import Experience from "..";

export default class Camera {
   constructor(){
      this.experience = new Experience()
      this.sizes = this.experience.sizes
      this.canvas = this.experience.canvas
      this.scene = this.experience.scene
      
      
      this.createPerspectiveCamera()
      this.createOrthographicCamera()
      
   }
   createPerspectiveCamera(){
      this.perspectiveCamera = new THREE.PerspectiveCamera(
         35, 
         this.sizes.aspect, 
         0.1, 
         100
      )
      this.scene.add(this.perspectiveCamera)
   }  
   createOrthographicCamera(){
      this.frustrum = 5
      this.orthographicCamera = new THREE.OrthographicCamera(35, this.sizes.aspect, 0.1, 100)
      this.scene.add(this.orthographicCamera)
   }
}