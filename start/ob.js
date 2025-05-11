// object literal
const JsUser = {
    name: "Paaro",
    age: 23,
    location: "Karnataka",
    email: "paaro@gmail.com",
    isLoggeIn: false,
}
console.log(JsUser.name)
console.log(JsUser["location"])
console.log(JsUser.isLoggeIn)
console.log(JsUser)

JsUser.greetingTwo = function(){
    console.log('Hello Change the world, ${this.name}');
}
console.log(JsUser.greetingTwo());