const plus = document.querySelectorAll(".product__quantity-control_inc");
const minus = document.querySelectorAll(".product__quantity-control_dec");
const value = document.querySelectorAll(".product__quantity-value");
const add = document.querySelectorAll(".product__add");
const cart = document.querySelector(".cart__products");


plus.forEach(item => {
    item.onclick = () => {
        for (i in value) {
            if (i == item.closest(".product").getAttribute("data-id") -1) {
                value[i].textContent++;
            }          
        }
    }
});

minus.forEach(item => {
    item.onclick = () => {
        for (i in value) {
            if (i == item.closest(".product").getAttribute("data-id") -1) {
                value[i].textContent--;
                if (value[i].textContent < 2) {
                    value[i].textContent = 1;
                }
            }          
        }
    }
});

add.forEach(item => {
    item.onclick = () => {
        const arrayproduct = document.querySelectorAll(".cart_product");
        for (i = 0; i < arrayproduct.length; i++){
            if (arrayproduct[i].getAttribute("data-id") == item.closest(".product").getAttribute("data-id")) {
                const currvalue = Number(arrayproduct[i].lastElementChild.textContent);
                const addvalue = Number(item.previousElementSibling.children[1].textContent);
                arrayproduct[i].lastElementChild.textContent = currvalue + addvalue;
                item.previousElementSibling.children[1].textContent = 1;
                return;
            }
        }
        const cart_product = document.createElement('div');
        cart_product.classList.add("cart_product");
        cart_product.dataset.id = item.closest(".product").getAttribute("data-id");
        const img = document.createElement('img');
        img.classList.add("cart__product-image");
        img.setAttribute('src', item.closest(".product__controls").previousElementSibling.getAttribute("src"));
        const count = document.createElement('div');
        count.classList.add("cart__product-count");
        count.textContent = item.previousElementSibling.children[1].textContent;
        item.previousElementSibling.children[1].textContent = 1;
        cart_product.appendChild(img);
        cart_product.appendChild(count);
        cart.appendChild(cart_product);
    }
})