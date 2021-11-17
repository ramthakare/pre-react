
// console.log("Hello  word");

// console.log(a);
// var a=10;
// //let b
// let b=20;
// console.log(b);
// {
//     var c=10;
//     console.log(c);
//     let d=20;
//     console.log(d);
// }
// console.log(c);

// const w=10;
// console.log(w);

// const myArr={

//     name:"ram",
// };

// myArr.name="krushna";
// console.log(myArr);

// //Strings

// let myString1="abcde";
// let myString2="ABCDE";

// console.log(myString1.toUpperCase()===myString2.toUpperCase());//true


// for(let i=0;i<myString1.length;i++)
// {
//     console.log(myString1[i]);//each charcter within string
// }

// //
// console.log("-------")
// let myString3="abcdafgdbajcj";
// let myString4="";



// //console.log(myString3.toLowerCase()===myString4.toLowerCase());

// for(let i=0;i<myString3.length;i++)
// {
//     let count=0;
//    for(let j=0;j<myString3.length;j++)
//    {
//        if(myString3[i]===myString3[j])
//        {
//        count++;
//        if(j < i) {
//             break;
//        }
//        if(count > 1)
//        {
//            myString4=myString4+myString3[i];
//             break;
//        }
       
//     }
       
       
       
//    }
   
  
// }
// console.log(myString4);

// //Array

// let myArr1=[1,2,3,4,5];
// let myArr2=[1,2,3,4,5];

// let isSame=true;
// for(let i=0;i<myArr1.length;i++)
// {
//     if(myArr1[i]!=myArr2[i])
//     {
//         isSame=false;
//         break;

//     }
// }
// console.log(isSame);//true


// let input="India is my Country";
// let output="";

// function reverseString(value)
// {
//     let returnvalue="";
//     for(let i=value.length-1;i>-1;i--)
//     {
//         returnvalue=returnvalue+value[i];
//     }
//     console.log(value);
//   return  returnvalue;
// }
// let wordString="";
// for(let i=0;i<input.length;i++)
// {
//     if(input.charAt(i)===" ")
//     {
//         output=output+reverseString(wordString)+" ";
//         console.log(wordString);
//         wordString="";
//         continue;
//     }
//     else{
//         wordString=wordString+input[i];
//         if(i+1===input.length)
//         {
//             output=output+reverseString(wordString);
//             console.log(wordString);  
//             wordString="";
//         }
//     }
//     }


// //fuction expression

// const addNumber2=function(number1,number2)
// {
//     return number1+number2
// };

// console.log(addNumber2(10,20));//we will get the result:30
// console.log(addNumber2);//we will get fun defination

// //Arrow Fuction

// const addNumberArrow=(number1,number2)=>
// {
//    return number1+number2;
// };

// console.log(addNumberArrow(10,20));
// console.log(addNumberArrow);


// //this

//  const myObject={
//      name:"Ram",
//      getName:function()
//      {
//          return this.name;
//      },
//  };

//  const myNewObject={
//      name:"Krushna",
//  };
//  const newGetName=myObject.getName.bind(myNewObject);
//  console.log(myObject.getName());//ram
// console.log(newGetName());//krushna


// Costructor fuction

// function Person(name,age)
// {
//     //check if called with new keyword
//     if(!new.target)
//     {
//         return new Person(name,age);
//     }
//     //this={}//added internally
//     this.name=name;
//     //this.number=1234;
//     this.age=age;
//     //return{name}; return{name:name}
//     //return  1234;//not allowed
//     //return[1,2,3,4];//allowed
//     //return this;//add internally
// }
// const personObject=new Person("Ram",24);
// const personObject1= Person("Ram",24)
// console.log(personObject);
// console.log(personObject1);
// //Destructuring
// const myArr = [1, 2, 3, 4];
// // const a = myArr[0];
// // const b = myArr[1];
// // const c = myArr[2];
// // const d = myArr[3];
// const [a, c, b, d] = myArr; //sequence is very important
// console.log(a, b, c, d);
// const myObject = {
//   name: "Ankur",
//   age: 29,
// };
// // const name = myObject.name;
// // const age = myObject.age;
// const { age, name } = myObject; //sequence is not important
// console.log(name, age);

//spread operator

// const myArr=[1,2,3,4,5];
// const myArrNew=[];
// for(let i=0;i<myArr.length;i++)
// {
//   myArrNew.push(myArr[i]);
// }
// console.log(myArr);
// console.log(...myArr)

// console.log(myArrNew);
// myArr.push(6);
// console.log(myArr);
// console.log(myArrNew);

const myObject={
  name:"Ram",
  age:24,

};
console.log(myObject)
const myNewObject={...myObject}
;
console.log(myNewObject);

//Rest
function addNumber(...args)
{
let result=0;
for(let i=0;i<args.length;i++)
{
  result+=args[i];
}
return result;
}
console.log(addNumber(10,20,30,40));


