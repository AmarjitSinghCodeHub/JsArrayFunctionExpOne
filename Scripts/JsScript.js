const btn=document.querySelector("#btn");
const msg=document.querySelector("#divMsg");

var arr=[22,34,35,76,78];
var arr2;
var arr3;
btn.addEventListener("click",()=>{
    
    //unshift();
    //arr.unshift(40); // adds item at first of the array
    
    // Shift()
    //arr.shift(); // removes item from first index onwards
    // arr.shift(); // will remove next item 
    // arr.shift();
    // arr.shift();
    // arr.shift();
    // arr.shift();

    // arr.pop(); // removes item from the end of array
    // arr.pop();

    // arr.push(1000); // adds item at the end of array
    // arr.push(22);


        //arr.reverse(); // reverse the array value.

        arr2=arr; // ref copy
        arr3=[...arr];   // value copy
        arr.reverse(); // value of arr3 will not reverse.

      //arr3.reverse();


    msg.innerHTML=`value of arr2 : ${arr} <br/> value of arr2 : ${arr2} <br/> value of arr3 : ${arr3}`;

});

