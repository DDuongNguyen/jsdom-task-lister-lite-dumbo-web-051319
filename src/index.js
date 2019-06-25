
document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector("#create-task-form");
  const tasks = document.querySelector("#tasks");

  function changeColor(event) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color
  }





  // form.addEventListener("submit", () => {debugger})
  form.addEventListener("submit", () => {
    const li = document.createElement("li");
    let button = document.createElement("BUTTON")
    button.addEventListener("submit", changeColor)
    button.innerText = "MEOW"
    button.style.color = "BLUE"
    button.style.backgroundColor = "RED"
    input = event.target.querySelector("input").value;
    li.innerText = input;
    tasks.append(li);
    li.appendChild(button)
    button.addEventListener("click", () =>
    {
      li.remove()
    })


    event.preventDefault();
  })







  // const select = document.createElement("select")
  // select.innerHTML =
  // (`
  // <option value= "high">high priority</option>
  // <option value= "medium">medium priority</option>
  // <option value= "low">low priority</option>
  // `)
  // form.append(select)



});
