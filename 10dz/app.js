

// 1 задание

// class Counter {
//   count = 0;
  
//   constructor(count) {
//     this.count = count}

//   up= function (a) {
//     console.log(this.count + a)
//   }
//   down = function (a) {
//     console.log(this.count - a)
//   }
//   clear() {
//       console.log(this.count)
//     }
   

// }
// let show = new Counter(0)
// show.up(1)
// show.down(1)
// show.clear()

// let counts = new Counter(5) 


// counts.up (2)
// counts.down(5)

// 2 задание

let Counter = {
  count: 0,
  
  upCount: function (a) {
    console.log(this.count + a)
  },
  downCount: function (a) {
    console.log(this.count - a)
  },
  clearCount: function () {
    console.log(this.count)
  }

}
Counter.upCount(1)
Counter.downCount(1)
Counter.clearCount()


Counter.count = 5
Counter.upCount(2)
Counter.downCount(5)



// 3 задание


class Mikser {
  color;
  year;  
  brand;
  property = function () {
    console.log(this.color + ' ' + this.year + ' '  + this.brand)
  }

  power(speed) {
      console.log(speed + 'Vt')
  }
  avtoStop() {

  }
  whip() {

  }

}
let myMikser = new Mikser()
myMikser.color = 'white';
myMikser.year = '2021';
myMikser.brand = 'Bosh';


myMikser.power(500)
myMikser.property()

// 4 задание

setTimeout(function () {
  console.log('Hello')
}, 1000);

setTimeout(function () {
  console.log('O, Hello')
}, 5000);


// 5 задание

setTimeout(function (а) {
  console.log(Counter.count = 7)
}, 10000);