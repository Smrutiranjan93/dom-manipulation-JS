// traversing DOM
// var itemList=document.querySelector("#items");

// parent Node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="red";
// console.log(itemList.parentNode.parentNode.parentNode);
// parent element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="red";
// console.log(itemList.parentElement.parentElement.parentElement);

// childnodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// first child
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
// console.log(itemList.lastElementChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor='green'

// sibling
// console.log(itemList.nextSibling);

// nextelementsibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousElementSibling);

// creating dom element and insert them
var newDiv=document.createElement('div')
// add a classname
newDiv.className="hello"
// adding id
newDiv.id='tree'
// add attribute
newDiv.setAttribute('title','hello div')
// create a textNode
var newDivText=document.createTextNode('hello world');
newDiv.appendChild(newDivText)
// insert into DOM
var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')
newDiv.style.fontSize="30px"
container.insertBefore(newDiv,h1)