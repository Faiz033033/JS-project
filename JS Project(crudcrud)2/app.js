const myform = document.getElementById('myform');
const amount = document.getElementById('amount');
const description = document.getElementById('description');
const category = document.getElementById('category');
const list = document.getElementById('list')

let editItem=null

myform.addEventListener('submit', addDetailsToServer);
list.addEventListener('click',removeOrDeleteDetails)

window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/8ac46ad96d8f48c6a4e542176f02e65d/appointment")
    .then((res)=>{
        for(let i=0;i<res.data.length;i++){
            showDetailsOnScreen(res.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})

function addDetailsToServer(e) {
    e.preventDefault()
    let obj = {
        amount: amount.value,
        description: description.value,
        category: category.value
    }
    if(editItem===null){
        axios.post("https://crudcrud.com/api/8ac46ad96d8f48c6a4e542176f02e65d/appointment", obj)
            .then((res) => {
                showDetailsOnScreen(res.data)
                console.log(res.data)
            })
            .catch((err) => {
               
                console.log(err)
            })
    }else{
        axios.put('https://crudcrud.com/api/8ac46ad96d8f48c6a4e542176f02e65d/appointment'+"/"+editItem,obj)
        .then((res)=>{
            showDetailsOnScreen(obj)
        })
        .catch((err)=>{
            console.log(err)
        })
        editItem=null
    }
    }

function showDetailsOnScreen(obj) {
    let li=document.createElement('li')
    li.setAttribute('id',obj._id)
    li.appendChild(document.createTextNode(`AMOUNT- ${obj.amount} DESCRIPTION- ${obj.description} CATEGORY- ${obj.category}`))
    let edit=document.createElement('button')
    edit.appendChild(document.createTextNode('EDIT'))
    edit.className='edit btn btn-success btn-sm'
    li.appendChild(edit)
    let del=document.createElement('button')
    del.className='delete btn btn-danger btn-sm'
    del.appendChild(document.createTextNode('DELETE'))
    li.appendChild(del)
    list.appendChild(li)
}

function removeOrDeleteDetails(e){
    if(e.target.classList.contains('edit')){
        let li=e.target.parentElement
        let id='/'+li.id
        axios.get('https://crudcrud.com/api/8ac46ad96d8f48c6a4e542176f02e65d/appointment'+id)
        .then((res)=>{
            list.removeChild(li)
            editItem=res.data._id
            amount.value=res.data.amount
            description.value=res.data.description
            category.value=res.data.category
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    if(e.target.classList.contains('delete')){
        let li=e.target.parentElement
        let id='/'+li.id
        axios.delete('https://crudcrud.com/api/8ac46ad96d8f48c6a4e542176f02e65d/appointment'+id)
        .then((res)=>{
            list.removeChild(li)
        })
        .catch((err)=>{
            alert(err)
        })
    }
}
