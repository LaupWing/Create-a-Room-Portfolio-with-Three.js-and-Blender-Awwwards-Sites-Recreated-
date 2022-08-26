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
      this.perspectiveCamera = new THREE
   }  
   createOrthographicCamera(){

   }
}