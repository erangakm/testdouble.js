import satisfy from '../satisfy'

let instance = null

export default class StubbingRegister {
  static get instance () {
    if (instance) return instance
    instance = new StubbingRegister()
    return instance
  }

  constructor () {
    this.stubbings = new Map()
  }

  add (double, stubbing) {
    if (this.stubbings.has(double)) {
      this.stubbings.get(double).push(stubbing)
    } else {
      this.stubbings.set(double, [stubbing])
    }
  }

  satisfy (double, call) {
    return satisfy(call, this.stubbings.get(double))
  }
}

