export default class Sizes {
   constructor(){
      this.start = Date.now()
      this.current = this.start
      this.delta = 16
      this.elapsed= 0
      this.update()
   }

   update(){
      window.requestAnimationFrame(this.update.bind(this))
   }
}