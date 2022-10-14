const del = document.querySelectorAll(".delete");

del.forEach((button) => {
  button.addEventListener("click", deleteItem);
});

async function deleteItem(e) {
  //ajax requests require the page to be reloaded on client side, not applicable to forms or anchor links
  window.location.reload();
  let title =
    e.target.parentNode.parentNode.previousElementSibling.previousElementSibling
      .previousElementSibling;
  console.log(title.textContent);
  let res = await fetch("/delete", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title.textContent }),
  });
  let data = await res.json();
  console.log(data);
}


let edit = document.querySelectorAll('.edit')
let updateTitle
edit.forEach(button => {
  button.addEventListener('click', (e) => {
    document.querySelector('.modal-container').classList.add('show')
   updateTitle =
    e.target.parentNode.parentNode.previousElementSibling.previousElementSibling
      .previousElementSibling;
      console.log(updateTitle.textContent)
  })
})


const newTitle = document.getElementById('newTitle')
const newDesc = document.getElementById('newDesc')




document.getElementById('update').addEventListener('click', async () => {
  window.location.reload();
 const res = await fetch('/update', {method: 'post',  headers: {
  Accept: "application/json",
  "Content-Type": "application/json",
},
body: JSON.stringify({ idTitle: updateTitle.textContent, newTitle: newTitle.value, newDesc: newDesc.value }),

})

let data = await res.json()



})


document.getElementById('exit').onclick = () => {
  document.querySelector('.modal-container').classList.remove('show')
}