var orderButton = document.querySelector("#orderButton");
var orderModal = document.querySelector("#orderModal");
var closeButton = document.querySelector("#closeButton");

orderButton.addEventListener("click", function() {
    orderModal.style.display = "block";
});

closeButton.addEventListener("click", function() {
    orderModal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == orderModal) {
        orderModal.style.display = "none";
    }
});




const modal_name = document.querySelector('#name');
const modal_error_name = document.querySelector('.modal-error__name')
const order_list = document.querySelector('#close_button');
const order_list_error = document.querySelector('.order_list');


function touch(){
    if(order_list.value === ''){
        order_list_error.style.display = 'block'
    } else {
        order_list_error.style.display = 'none'
    }
}