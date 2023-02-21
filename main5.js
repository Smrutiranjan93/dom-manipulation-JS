var form=document.getElementById("addForm");
var itemList=document.getElementById('items');
var filter=document.getElementById('filter')
// form submit event
form.addEventListener('submit',addItem);
// delete event
itemList.addEventListener('click' ,removeItem)
// filter event
filter.addEventListener('keyup', filterItems)
// additem
function addItem(e){
    e.preventDefault();
// get input value 
var newItem=document.getElementById('item').value;
// create new li element
var li=document.createElement('li');
li.className="list-group-item";
// add textnode to input value 
li.appendChild(document.createTextNode(newItem));
// creating  a delete button
var deleteBtn=document.createElement('button');
var EditBtn=document.createElement('button');
// add class to button
deleteBtn.className="btn btn-danger btn-sm float-right delete";
EditBtn.className="btn btn-danger btn-sm float-right edit";
// append text node 
deleteBtn.appendChild(document.createTextNode('x'));
EditBtn.appendChild(document.createTextNode('edit'));
// append button to li
li.appendChild(deleteBtn);
li.appendChild(EditBtn);
// append li to list
itemList.appendChild(li);
itemList.appendChild(li);
}
// remove item
function removeItem(e){
if(e.target.classList.contains('delete')){
if(confirm("are you sure ?")){
    var  li=e.target.parentElement;
    itemList.removeChild(li);
}
}
}
// filteritems
function filterItems(e){
// convert to lowercasse
var text=e.target.value.toLowerCase();
// get all lis
var items=itemList.getElementsByTagName('li')
// convert to an array 
Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent
    if(itemName.toLowerCase().indexOf(text)!=-1){
        item.style.display='block';
    }else{
            item.style.display='none';
        }
    
})
}