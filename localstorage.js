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