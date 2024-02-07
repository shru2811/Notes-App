let notesContainer = document.querySelector(".text-container");
let createBtn = document.querySelector(".btn");

function savedNotes(){
  notesContainer.innerHTML = localStorage.getItem("notes");   //retrieve it when page is refreshed and opened again
}

savedNotes();

function updateStorage(){
  localStorage.setItem("notes", notesContainer.innerHTML);    //save notes in local storage in 'notes'
}

createBtn.addEventListener("click",function(){
  let newP = document.createElement("p");
  let img = document.createElement("img");
  newP.classList.add("text-boxes");
  newP.appendChild(img);
  img.src = "images/delete.png";
  newP.setAttribute("contenteditable","true");
  notesContainer.appendChild(newP);
});

notesContainer.addEventListener("click",function(e){
  if(e.target.tagName=== "IMG"){
    e.target.parentElement.remove();
    updateStorage();
  }
  else if(e.target.tagName=== "P"){
    notes = document.querySelectorAll(".text-boxes");
    notes.forEach(nt=>{
      nt.onkeyup = function(){
        updateStorage();
      }
    })
  }
});

document.addEventListener("keydown",function(event){
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();   //prevents default feature and adds a line break on pressing enter key
  }
})