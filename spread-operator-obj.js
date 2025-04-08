//in the case of objects with some things change 

const person = {
    name: "Juan",
    age: 19,
    address: {
        city: "Monteria",
        country: "Colmbia"
    }

};

const copyPerson = {...person}

/*
here i do a superficial copy(const copyPerson = {...person}), it means that it copy only 
the primitive elements of the object (person) but in the case
of elements like objects, arrays or functions 
only copy the reference, not the actual content

for example:
*/

copyPerson.name = "Rafa"
copyPerson.address.city = "Bogota"

//output: Juan
console.log(person.name)

//output: Bogota
console.log(person.address.city)



