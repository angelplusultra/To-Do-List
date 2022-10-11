
let del = document.querySelectorAll('.delete')

del.forEach(button => {
    button.addEventListener('click', deleteItem )
})

async function deleteItem(e){
    let title = e.target.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling
    console.log(title.textContent)
//    let res =  await fetch('/list', {method: 'delete'})
//    let data = await res.json()

}