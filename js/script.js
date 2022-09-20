// let num = 7;
// let i = num;
// let emptyArr = [];
//  {
// emptyArr.push(i);

// }
// document.write(emptyArr);


var btn = document.getElementById("btn");
var emptyArr = [];

function getVal() {
   const val = document.getElementById('input').value;
   let c = val.toString();
   emptyArr.push(c);
   document.getElementById("output").innerHTML = emptyArr;
}
btn.addEventListener("click", getVal);