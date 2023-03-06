// const array_1 = ["string","valueToReplace","valueToReplaceWith"];
// console.log(array_1);
// array_1.splice(1,1)
// console.log(array_1)

// let new_array = array_1.join(' ');
// console.log(new_array);


// const user = [{name:'lasha',age:30},{name:'saba',age:20},{name:'Jora',age:40},{name:'Zebara',age:50}]

// const by_age = user.sort((a,b) => {
//     return a.age - b.age
// });

// console.log(by_age);


const capitalized_sumbol = function(sentence){

    let str = sentence.split(" ");
    for (let i = 0;i<str.length;i++){
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");
}

console.log(capitalized_sumbol("sweeft digital skill will"));