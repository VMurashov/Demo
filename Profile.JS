const CURRENCY = '$'
const ZERO_NUMBER = 0;

let nameInput = document.querySelector('.name__input');
let numberInput = document.querySelector('.number__input');
let addButton = document.querySelector('.add__button');
let middleProject = document.querySelector('.middle__project');
let projectBalanceElement = document.querySelector('.project__value');
let projectExpenceElement = document.querySelector('.expence');
let projectIncomeElement = document.querySelector('.income');
let transactions = [];


let balance = ZERO_NUMBER;
let income = ZERO_NUMBER;
let expence = ZERO_NUMBER;

addButton.onclick = () => {
    balance = ZERO_NUMBER;
    expence = ZERO_NUMBER;
    income = ZERO_NUMBER;
    let currentFullDate = new Date();
    let now = `${currentFullDate.getDate()} , ${currentFullDate.getHours()}`
    let name = nameInput.value;
    let number = numberInput.value;


    let projectLineDiv = document.createElement("div");
    let projectPriceElement = document.createElement("p");
    let projectSpecificationElement = document.createElement("p");
    let projectNameElement = document.createElement("p");

    projectLineDiv.className = "project__line";
    projectPriceElement.className = "project__price";
    projectSpecificationElement.className = "project__specification";
    projectNameElement.className = "project__name";

    projectPriceElement.textContent = `${number}${CURRENCY}`
    projectSpecificationElement.textContent = name;
    projectNameElement.textContent = now;

    projectLineDiv.append(projectPriceElement, projectSpecificationElement, projectNameElement);
    middleProject.append(projectLineDiv);
    // let obj = {
    //     name: name,
    //     date: now,
    //     price: number,
    // }

    transactions.push(+number);
    transactions.forEach((element) => {
        balance += element;
        if (element<0){
            expence -= element;
        }

        if (element>0){
            income += element;
        }
    })
    console.log(transactions);

    projectBalanceElement.textContent = balance+CURRENCY;
    projectExpenceElement.textContent = expence+CURRENCY;
    projectIncomeElement.textContent = income+CURRENCY;
}

