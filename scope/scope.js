String.prototype.filter = function(banned_words){
    const words = this.split(/\s+/);
    let res = '';
    for(let i = 0; i < words.length; i++){
       if(banned_words.includes(words[i]) === false) res = res.concat(words[i] , " ");
    };
    return res.trim();
 };
console.log("This house is not nice!".filter('not'));

Array.prototype.bubbleSort = function() {
    const n = this.length;
    for(let i = n - 1; i > 0; i--){
        for(let j = 1; j <= i; j++) {
            if(this[j] < this[j-1]) {
                const tmp = this[j];
                this[j] = this[j-1];
                this[j-1] = tmp;
            }
        }
    };
    return this;
}

console.log([6,4,0, 3,-2,1].bubbleSort());

function Person(name) {
    this.name = name;
}

function Teacher(name) {
    Person.call(this, name);
    this.teach = function(subject) {
        console.log(this.name + " is now teaching " + subject);
    }
}

const teacher = new Teacher("Bob");
teacher.teach("Web Application Programming");

const p = Object.create({}, { name: { value: "Paul" } });
console.log(p.name);

const t = Object.create(p, {
    teach: {
        value: function(subject) {  
            console.log(this.name + " is now teaching " + subject);
        }
    }       
})

console.log(t.teach("Algorithms"));

console.error("class approach");

class Person1 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greeting() {
        console.log("Greetings, my name is " + this.name + " and I am " +
        this.age + " years old.");
    }
    salute() {
        console.log("Good morning!, and in case I dont see you, " +
        "good afternoon, good evening and good night!");
    }
}

let p1 = new Person1("Tom", "30");
p1.greeting();
p1.salute();

class Student1 extends Person1 {
    constructor(name, age, major) {
      super(name, age);
      this.major = major;
    }
    greeting() {
        console.log("Hey, my name is " + this.name + 
        " and I am studying " + this.major + ".");
    }
}



let s1 = new Student1("Anna", "20", "Computer Science");
s1.greeting();
s1.salute();

class Professor1 extends Person1 {
    constructor(name, age, department) {
      super(name, age);
      this.department = department;
    }
    greeting() {
        console.log("Good day, my name is " + this.name + 
        " and I am in the " + this.department + " department.");
    }
}

let pr1 = new Professor1("Chris", "50", "Science");
pr1.greeting();
pr1.salute();

console.error("function constructor approach");

function Person2(name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function() {
        console.log("Greetings, my name is " + this.name + " and I am " +
        this.age + " years old.");
    }
    this.salute = function() {
        console.log("Good morning!, and in case I dont see you, " +
        "good afternoon, good evening and good night!");
    }
}

let p2 = new Person2("Tom", "31");
p2.greeting();
p2.salute();

function Student2(name, age, major) {
    Person2.call(this, name, age)
    this.major = major;
    this.greeting = function() {
        console.log("Hey, my name is " + this.name + 
        " and I am studying " + this.major + ".");
    }
}

let s2 = new Student2("Anna", "21", "Computer Science");
s2.greeting();
s2.salute();

function Professor2(name, age, department){
    Person2.call(this, name, age);
    this.department = department;
    this.greeting = function() {
        console.log("Good day, my name is " + this.name + 
        " and I am in the " + this.department + " department.");
    }
}

let pr2 = new Professor2("Chris", "51", "Science");
pr2.greeting();
pr2.salute();

console.error("object prototype");

let p3 = {
    name: "Tom",
    age: "32",
    greeting() {
        console.log("Greetings, my name is " + this.name + " and I am " +
        this.age + " years old.");
    },
    salute() {
        console.log("Good morning!, and in case I dont see you, " +
        "good afternoon, good evening and good night!");
    }
}

p3.greeting();
p3.salute();

let s3 = {
    name: "Anna",
    age: "22",
    major: "Science",
    greeting() {
        console.log("Hey, my name is " + this.name + 
        " and I am studying " + this.major + ".");
    },
    __proto__: p3
}

s3.greeting();
s3.salute();

let pr3 = {
    name: "Chris",
    age: "52",
    department: "Science",
    greeting() {
        console.log("Good day, my name is " + this.name + 
        " and I am in the " + this.department + " department.");
    },
    __proto__: p3
}

pr3.greeting();
pr3.salute();