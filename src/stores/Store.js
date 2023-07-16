class Store {
  constructor() {
    this.activeSet = false;
    this.data = false;
  }

  setActiveSet(newSet) {
    this.activeSet = newSet;
    console.log(this.activeSet)
  }

}

export default Store;
