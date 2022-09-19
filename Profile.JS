
let nameInput = document.querySelector ('.name__input');
let numberInput = document.querySelector ('.number__input');
let addButton = document.querySelector ('.add__button');
let middleProject = document.querySelector ('.middle__project');


addButton.onclick = () =>{

    let name = nameInput.value;
    let date = numberInput.value;
    middleProject.innerHTML+=`<div class="project__line"> 
    <p class="project__price">13$</p>
    <p class="project__specification">${name}</p>
    <p class="project__name">${date}</p>


</div>`



}