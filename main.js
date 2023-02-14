// const ul=document.querySelector(".items");
// ul.firstElementChild.textContent='hello';
// const firstchild=ul.firstElementChild;
// firstchild.style.color='green';
// ul.children[1].style.color='yellow';

// const myForm=document.querySelector('#my-form');
// const userName=document.querySelector('#name');
// const userMsg=document.querySelector('.msg');
// const userEmail=document.querySelector('#email');
// const userList=document.querySelector('#users');
// myForm.addEventListener('submit',((e)=>{
//     e.preventDefault();
//     if(userName.value ==='' || userEmail.value ===''){
//         userMsg.classList.add('error');
//         userMsg.innerHTML='please enter all fields';
//         setTimeout(()=>
//             userMsg.remove(),3000)
//     } else{
//         const li=document.createElement('li');
//         li.appendChild(document.createTextNode(`${userName.value}:${userEmail.value}`))
//         userList.appendChild(li);
//         userEmail.value='';
//         userName.value='';
//     }
// }))
// get element by id
console.log(document.getElementById('header-title'));
var header=document.getElementById('header-title');
var header1=document.getElementById('main-header');
header.textContent="hello";
header.innerText="goodbye";
header.innerHTML='<h3>Good Bye </h3>';
header.style.borderBottom='solid 3px red';
header1.style.borderBottom='solid 3px red';