//FUNCTION CONSTRUCTOR
var john = {
    name : 'John',
    YearOfBirth : 1999,
    job : 'STudent'
}
// console.log(john)
// ETAH Object New JEkhane JOhn OBJECT KEH INHERIT KORA HOISEFUNCTIO ER MADDOME
// EKhane Obossoi VAR & Use Camel Case Is Better
var Person = function (name,YearOfBirth,job){
    this.name = name
    this.YearOfBirth = YearOfBirth
    this.job = job
    }

    // NEW Person added function ProtoType
 Person.prototype.calculateAge  = function (){
    console.log(2021-this.YearOfBirth)}
    // Another Prototype to added another String IN OBJECT

 Person.prototype.lastname ='MOON MOON'

 var john = new Person ('AL-MAMUN',1970,'BALFALAI')
 var jane = new Person ('ADI',1980,'BALCHERE')
 var mark = new Person ('AL-VJ DILL',1990,'BALPUJADAY')

john.calculateAge()
jane.calculateAge()
mark.calculateAge()

console.log(john.lastname)
console.log(jane.lastname)
console.log(mark.lastname)

// console.log(john.YearOfBirth)
// jane.YearOfBirth()
// mark.YearOfBirth()
