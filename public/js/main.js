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

edit.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.modal-container').classList.add('show')
  })
})


