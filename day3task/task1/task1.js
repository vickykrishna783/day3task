
//how to compare two json have the same properties without order


/*
How to compare two JSON have the same properties without order?
a. let objl — { name: "Person 1", age:5 };
b. let obj2 = { age:5, name: "Person 1" };
*/

const obj1 = { name: "person1", age: 5 };
const obj2 = { age: 5, name: "person1" };

            result = function compareObjects(obj1, obj2) {

    const sorted1  = JSON.stringify(obj1,Object.keys(obj1).sort());
    
    const sorted2  = JSON.stringify(obj2, Object.keys(obj2).sort());

    return sorted1 === sorted2;
                                                         }

if (result) {
    console.log("The objects are equal.");
            } 
            
else {
    console.log("The objects are not equal.");
     }
