const students = {
  name: "John",
  age: 20,
  address: "New York",
  great: "A+",
};

// console.log(
//   `the student name is ${students.name} .his age is ${students.age} and he lives in ${students.address}. .he got ${students.great} grade`
// );
const { name: students2, great = "Golden A+", address = "Dhaka"} = {name: "Doe"};
// console.log(students);
// console.log(students2, great, address);

function gettingInfo({name, age, address = "Dhaka"}){
  console.log(name, age, address);
}

gettingInfo(students);// calling function with object
gettingInfo({name: "Smith", age: 30});s