let tasklist = document.getElementById("tasklist");
let addbtn = document.getElementById("addbtn");
let task = document.getElementById("task");
let taskerror = document.getElementById("taskerror");

addbtn.onclick = function () {
  let li = document.createElement("li");
  if (task.value === "") {
    taskerror.innerText = "Please fill the task";
  } else {
    li.innerText = task.value;
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("form-check-input");
    checkbox.setAttribute("id", "flexCheckChecked");

    let deletebtn = document.createElement("button");
    deletebtn.innerHTML = '<i class="fas fa-trash"></i>';
    deletebtn.setAttribute("id", "deletebtn");

    let upbtn = document.createElement("button");
    upbtn.innerHTML = '<i class="fas fa-arrow-alt-circle-up"></i>';
    upbtn.setAttribute("id", "upbtn");

    let dnbtn = document.createElement("button");
    dnbtn.innerHTML = '<i class="fas fa-arrow-alt-circle-down"></i>';
    dnbtn.setAttribute("id", "dnbtn");

    let updatebtn = document.createElement('button');
    updatebtn.innerHTML = '<i class="far fa-edit"></i>';
    updatebtn.setAttribute('id','updatebtn');

    deletebtn.onclick = function (event) {
        // console.log(event.target);
        // console.log(event.target.parentElement);
        // console.log(event.target.parentElement.parentElement);
        
        event.target.parentElement.parentElement.remove();
    };
    upbtn.onclick = function (event) {
      console.log(event.target.parentElement.parentElement);
      event.target.parentElement.parentElement.parentElement.insertBefore(
        event.target.parentElement.parentElement,
        event.target.parentElement.parentElement.previousElementSibling
      );
    };
    dnbtn.onclick = function (event) {
    //   console.log(event.target.parentElement.parentElement.parentElement);
    //   console.log(event.target.parentElement.parentElement);
    //   console.log(event.target.parentElement.parentElement.nextElementSibling);
      event.target.parentElement.parentElement.parentElement.insertBefore(
        event.target.parentElement.parentElement.nextElementSibling,
        event.target.parentElement.parentElement
      );
    };
    updatebtn.onclick = function(e){
      let previousText = li.innerText;
      let updatedText = prompt("Enter Updated Task");
      if(updatedText === "")
      {
        li.innerText = previousText;
      }
      else{
        li.innerText = updatedText;
        li.prepend(checkbox);
        li.append(deletebtn);
        li.append(upbtn);
        li.append(dnbtn);
        li.append(updatebtn);
      }
    }
    li.prepend(checkbox);
    li.append(deletebtn);
    li.append(upbtn);
    li.append(dnbtn);
    li.append(updatebtn);
    tasklist.appendChild(li);
    task.value = "";
    taskerror.innerText = "";
  }
};
task.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    addbtn.onclick();
  }
})