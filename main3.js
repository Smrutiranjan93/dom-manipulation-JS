// get element by tag name

var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent="hello 3";
li[1].style.fontweight='bolder';
for(var i=0;i<li.length;i++){

    li[i].style.backgroundColor="gray"
}
// get element by query selector
var header=document.querySelector("#main-header")
header.style.borderBottom="solid 4px red"