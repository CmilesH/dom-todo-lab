const toDoInput = document.getElementById('to-do')
const submitBtn = document.getElementById('submit-button')
const toDoList = document.getElementById('todo-list')

submitBtn.addEventListener('click', evt => {
  const li = document.createElement('li')
  const inp = document.querySelector('input')
  li.textContent = inp.value
  document.querySelector('ul').appendChild(li)
}
)

// const toDoItem = document.querySelectorAll('li')

// toDoItem.addEventListener('click', evt=> {

// })