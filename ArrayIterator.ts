
class arrayIterator{
  array: any;
  index: number;
  constructor(){
    this.array = arr;
    this.index = 0;
  }
  next(){
    return {value: this.index + 1, done: true};
  }
}