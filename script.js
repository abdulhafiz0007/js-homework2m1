const elTodoForm = document.querySelector(".js-todoList-form");
const elTodoInput = elTodoForm.querySelector(".js-todoList-input");
const elTodoList = document.querySelector(".js-todo-list");
const elTodoTemplate = document.querySelector(".js-todoList-template").content;

// create the program that count the todo list order 

let countOrder = 1;

// create function that add the new todo routine to the array list of todos 

function todoList() {

    let array = [];

    elTodoForm.addEventListener("submit", function(evt) {

        evt.preventDefault();
        const templateCloneNode = elTodoTemplate.cloneNode(true);
        const inputVal = `${countOrder}. ${elTodoInput.value}`
        templateCloneNode.querySelector(".todo-order").textContent = inputVal;
        elTodoList.appendChild(templateCloneNode);

        array.push(templateCloneNode);
        countOrder++;
        elTodoInput.value = ""

    })

}
todoList();

// create a program that deletes the choosen list whent it hits the delete button 

elTodoList.addEventListener("click", function(evt) {

    if(evt.target.matches(".delete-button")) {
        evt.target.parentNode.remove()
    }

})

// Contact List 

const elContactForm = document.querySelector(".contact-form");
const elContactInput = elContactForm.querySelector(".contact-input");
const elContactPhoneNumber = elContactForm.querySelector(".contact-phone-number");
const elContactSelect = elContactForm.querySelector(".contact-status");
const elContactList = document.querySelector(".js-contact-list")
const elContactTemplate = document.querySelector(".js-contact-template").content;


function contactList() {

    let array = [];
    let phoneNumberArray = [];

    elContactForm.addEventListener("submit", function(evt) {

        evt.preventDefault();

        const templateCloneNode = elContactTemplate.cloneNode(true);
        const inputNameVal = elContactInput.value;
        const choosenStatusVal = elContactSelect.value;
        const inputPhoneNumberVal = elContactPhoneNumber.value;
        templateCloneNode.querySelector(".contact-item-name").textContent = inputNameVal;
        templateCloneNode.querySelector(".contact-item-status").textContent = choosenStatusVal;
        templateCloneNode.querySelector(".contact-item-number").textContent = inputPhoneNumberVal;

        const isDuplicate = phoneNumberArray.includes(inputPhoneNumberVal);

        if(isDuplicate) {
            alert("Opps, This number already written!")
            return
        }

        phoneNumberArray.push(inputPhoneNumberVal)
        
        elContactList.appendChild(templateCloneNode);
        
        array.push(templateCloneNode);
        elContactInput.value = "";
        elContactPhoneNumber.value = "";
        
    });

};

contactList();



// code for deleting the entered contact lists when hits the delete button

elContactList.addEventListener("click",  function(evt) {

    if(evt.target.matches(".contact-delete-button")) {

        const listElement = evt.target.closest(".contact-list-item");
        listElement.remove();
    }

})










