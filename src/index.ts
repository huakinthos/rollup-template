class Demo {
  constructor(public name: string) {} 
  show(): void {
    console.log(this.name)
  }
  static create(): void {
    console.log('ruaya has been create')
  }
}
Demo.create()
export default Demo