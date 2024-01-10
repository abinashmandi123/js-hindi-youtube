// stack Memory (primitive), Heap(non-primitive)

let myName='abinash'
let anotherName=myName
anotherName='hitesh'

let userOne={
    email: 'abinash@google.com'
}

let userTwo={
    email: 'hitesh@google.com'
}

userTwo=userOne

userTwo.email='abc@google.com'

console.log(myName)
console.log(anotherName)

console.log(userOne.email)
console.log(userTwo.email)