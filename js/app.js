const toDoInput = document.getElementById('to-do')
const submitBtn = document.getElementById('submit-button')
const toDoList = document.getElementById('todo-list')

submitBtn.addEventListener('click', evt => {
  const li = document.createElement('li')
  const inp = document.querySelector('input')
  
  if (inp.value.trim() != ''){ 

  li.textContent = inp.value
  toDoList.appendChild(li)
  }
}
)


toDoList.addEventListener('click', function(e)  {
  e.target.remove();
})
