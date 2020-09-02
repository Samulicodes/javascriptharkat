// || OR operator, && AND operator

const password = 'joujou11haha';

if (password.length >=12 && password.includes('1')) {
    console.log('That password is mighty strong');
} else if (password.length >=8 || password.includes('1') && password.length > 5) {
    console.log('That password is medium strong');
} else {
    console.log('That password is weak af');
}

//------------------------------------------------------------------------------

//break and continue

const scores = [0, 10, 20, 25, 50, 45, 75, 80, 100, 90];



for(let i = 0; i < scores.length; i++) {

    if(scores[i] === 0) {
        continue;
    }

    console.log('your score: ', scores[i]);

    if(scores[i] === 100) {
        console.log('congrats, you got the top score!');
        break;
    }
}

//----------------------------------------------------------------------------

// switch statements

const grade = 'D';

switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got a B!');
        break;
    case 'C':
        console.log('You got a C!');
        break;
    case 'D':
        console.log('You got a D!');
        break;
    default:
        console.log('not a valid grade');
}

//--------------------------------------------------------------------------

// variables & block scopes

let age = 30 //global scope

if(true){
    let age = 40; //local scope
    console.log('inside 1st code block', age);
}

console.log('outside code block', age);

//-------------------------------------------------------------------------

//function declaration

function greet(){
    console.log('hello, there');
}

// type greet() to call function


//function expression

const sayGoodDay = function(){
    console.log('good day')
};

// type speak()

//-----------------------------------------------------------------------

// arguments & parameters

const welcomeUser = function(name='luigi', time='night'){
    console.log(`good ${time} ${name}`);
};

welcomeUser();
welcomeUser('mario', 'morning');

//----------------------------------------------------------------------

// returning values

const calcArea = function(radius){
    return 3.14 * radius**2
}

console.log(calcArea(10));

//----------------------------------------------------------------------

// turning regular function

/*

 const calcArea = function(radius){
    return 3.14 * radius**2
}
*/

// to arrow function

/*
const calcArea = (radius) => {
    return 3.14 * radius**2
};
*/

// or

//const calcArea = radius => 3.14 * radius**2;

const greetings = () => 'hello, world';

const result = greetings();

console.log(result)

//---------------------------------------------------------------------
/*
const mahName = 'Samuli';

function checkMahName(){
    console.log(mahName);
}

checkMahName();
*/
//--------------------------------------------------------------------

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

/*
people.forEach(function(person, index){
    console.log(index, person);
});
*/

// or

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

//-----------------------------------------------------------------

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// to get the role of a crewmember

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

// to get the name and degree of a crewmember

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};

//---------------------------------------------------------------------------------------

const robot = {
    model: '1E78V2',
    energyLevel: 100,
  
    provideInfo() {
    return (`I am ${this.model} and my current energy level is ${this.energyLevel}`)
  }
  };
  
  console.log(robot.provideInfo())

  //-------------------------------------------------------------------------------------

  // getter method example

  const roboto = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number') {
        return 'My current energy level is ' + this._energyLevel
      } else {
        return "System malfunction: cannot retrieve energy level"
      }
    }
  };
  
  console.log(robot.energyLevel);

  //-------------------------------------------------------------------------------------

  //setter method example

  const robotski = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof this._numOfSensors ==='number' && num >= 0){
        this._numOfSensors = num
      } else {
        console.log("Pass in a number that is greater than or equal to 0")
      }
    }
    
  };
   robot.numOfSensors= 100
   console.log(robot.numOfSensors)

//---------------------------------------------------------------------------------------

// factory functions example

const robotFactory = (model, mobile) =>{
    return{
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  };
  
  const tinCan = robotFactory('P-500', true);

tinCan.beep();
console.log(tinCan.model)

// property value shorthanding example aka destructuring

const monstaFactory = (name, age) => {
    return{
        name,
        age,
    }
}

// destructured assignment

const robotzki = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const { functionality } = robotzki;
  functionality.beep()


// Built-in object methods

const robotKeys = Object.keys(robotzki);

console.log(robotKeys);


const robotEntries = Object.entries(robotzki)
console.log(robotEntries);


const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robotzki);

console.log(newRobot);

//---------------------------------------------------------------------------------

// Classes

class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  const halley = new Dog('Halley');
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console



  class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get department() {
      return this._department;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3)
console.log(surgeonCurry.remainingVacationDays);