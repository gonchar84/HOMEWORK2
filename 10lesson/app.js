let user = {
  name: 'John',
  surname: 'Smith',
  showFullname: function () {
    console.log(this.name + ' ' + this.surname)
  }
}

user.showFullname()
user.name = 'Pete'
user.showFullname()


class People {
  name = 'Misha'
  age = 0
  constructor(name) {
    this.name = name;
  }
  greeting = function () {
    console.log(this.name)
  }
  say() {
    console.log(this.age)
  }
}
let Misha = new People('Misha')
Misha.greeting()
let Peter = new People('Peter')
Peter.greeting()


class User {
  name = 'John'
  surname = 'Smith'

  constructor(name) {
    this.name = name;
  }

  greeting = function () {
    console.log(this.name, this.surname)
  }

}

let John = new User('John');
John.greeting()
let Pete = new User('Pete');
Pete.greeting()