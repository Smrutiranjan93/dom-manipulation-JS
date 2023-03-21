// const ul=document.querySelector(".items");
// ul.firstElementChild.textContent='hello';
// const firstchild=ul.firstElementChild;
// firstchild.style.color='green';
// ul.children[1].style.color='yellow';

const myForm=document.querySelector('#my-form');
const userName=document.querySelector('#name');
const userMsg=document.querySelector('.msg');
const userEmail=document.querySelector('#email');
const userList=document.querySelector('#users');
myForm.addEventListener('submit',((e)=>{
    e.preventDefault();
    if(userName.value ==='' || userEmail.value ===''){
        userMsg.classList.add('error');
        userMsg.innerHTML='please enter all fields';
        setTimeout(()=>
            userMsg.remove(),3000)
    } else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${userName.value}:${userEmail.value}`))
        localStorage.setItem(`${userName.value}`,`${userEmail.value}`);
        userList.appendChild(li);
        userEmail.value='';
        userName.value='';
    }
}))
// get element by id
// console.log(document.getElementById('header-title'));
// var header=document.getElementById('header-title');
// var header1=document.getElementById('main-header');
// header.textContent="hello";
// header.innerText="goodbye";
// header.innerHTML='<h3>Good Bye </h3>';
// header.style.borderBottom='solid 3px red';
// header1.style.borderBottom='solid 3px red';

// get element by classname
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent="hello 3";
items[1].style.fontweight='bolder';
items[2].style.backgroundColor="green"
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
header.style.borderBottom="solid 4px red";
var input=document.querySelector('input');
input.value='hello smruti';
var submit=document.querySelector('input[type="submit"]');
submit.value="send";
var item=document.querySelector('.list-group-item');
item.style.color='yellow'
var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue'
var secondItem=document.querySelector('.list-group-item:nth-child(3)');
secondItem.style.color='red';
// get element by queryselectorall
var titles=document.querySelectorAll('.title')
console.log(titles)
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='red'
}
