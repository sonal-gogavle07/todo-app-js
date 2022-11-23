let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let incompleteTasks = document.getElementById("incompleteTasks");
let date = document.getElementById("date");
const btnNew = document.querySelector('.btn--new');
let data = {};
let today = new Date().toISOString().split("T")[0];
date.innerHTML = today;
let allTasks = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    console.log(today);
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
      msg.innerHTML = "Post cannot be blank";
      console.log("failure");
    }else if(allTasks.includes(input.value)){
        msg.innerHTML = "This task is already present.";
    } else {
      console.log("successs");
      msg.innerHTML = "";
      acceptData();
    }
};

let acceptData = () => {
    data["text"] = input.value;
    allTasks.push(input.value);
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
    `;
    input.value = "";
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};

let deletePost = (e) => {
    allTasks.splice (allTasks.indexOf(e.parentElement.previousElementSibling.innerHTML), 2);
    console.log("alltaska",allTasks)
    e.parentElement.parentElement.remove();
    lists(allTasks);
};

btnNew.addEventListener("click", (e) => {   
    lists(allTasks);
});

let lists = (data) => {
    
    let temp = data;
    console.log("@#$%",temp,allTasks);
    for(let i=0; i<temp.length;i++){
        incompleteTasks.innerHTML += `
        <div>
        <p>${temp[i]}</p>
        
        </div>
    `;
    }
    temp = [];
}
