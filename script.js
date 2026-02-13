const lists = document.getElementById("lists");  //แท็ก <ul> สำหรับแสดง to-do list
const list_name = document.getElementById("list-name"); //แท็ก <input> สำหรับใส่ชื่อ list
const editForm = document.querySelector(".editForm");
const editInput = document.getElementById("editInput");

let to_do_lists = ["Exercise", "Laundry", "Workout"];
let editTemp;

function displayList(){
  lists.innerHTML = "";

  for(let i = 0; i < to_do_lists.length; i++){
      const li = document.createElement("li");
      const delete_button = document.createElement("button");
      const edit_button = document.createElement("button");
      li.textContent = to_do_lists[i];
      delete_button.textContent = "Delete";
      delete_button.addEventListener('click', () => {
        to_do_lists.splice(i, 1);
        displayList();
      });
      edit_button.textContent = "Edit"
      edit_button.addEventListener('click', () => {
        editInput.value = to_do_lists[i];
        editForm.classList.add('active');
        editTemp = to_do_lists.indexOf(to_do_lists[i]);
      })
      lists.appendChild(li);
      lists.appendChild(delete_button);
      lists.appendChild(edit_button);
  }
}

function addList(){ //เพิ่ม list
  if (list_name.value){
    to_do_lists.push(list_name.value);
    list_name.value = "";
    displayList();
  }
}

function clearList(){
  to_do_lists = [];
  lists.innerHTML = "";
  displayList();
}

function editList(){
  to_do_lists.splice(editTemp, 1, editInput.value);
  editForm.classList.remove('active');
  displayList();
}

displayList();