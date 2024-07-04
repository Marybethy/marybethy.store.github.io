document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {id: "product1", qty: "qty1", price: "price1"},
        {id: "product2", qty: "qty2", price: "price2"},
        {id: "product3", qty: "qty3", price: "price3"},
        {id: "product4", qty: "qty4", price: "price4"},
        {id: "product5", qty: "qty5", price: "price5"},
        {id: "product6", qty: "qty6", price: "price6"}
    ];

    const carts = document.getElementById("carts");
    const total = document.getElementById("total");
    const cash = document.getElementById("cash");
    const change = document.getElementById("change");

    function addOrder() {
        carts.textContent = "";
        let totalPrice = 0;

        products.forEach(product => {
            const qtyElem = document.getElementById(product.qty);
            const priceElem = document.getElementById(product.price);
            const productElem = document.querySelector(`label[for="${product.id}"]`);

            const qty = parseFloat(qtyElem.value) || 0;
            const price = parseFloat(priceElem.textContent) || 0;

            if (qty > 0) {
                const order = `${qty} pc/s x ${price} ------ ${productElem.textContent} ------ Php ${(qty * price).toFixed(2)}\n`;
                carts.textContent += order;
                totalPrice += qty * price;
            }
        });

        total.value = '₱ ' + totalPrice.toFixed(2);
    }

    function calculateChange() {
        const totalPrice = parseFloat(total.value.replace('₱ ', '')) || 0;
        const cashTendered = parseFloat(cash.value) || 0;

        if (!isNaN(totalPrice) && !isNaN(cashTendered) && cashTendered >= totalPrice) {
            const changeAmount = cashTendered - totalPrice;
            change.value = '₱ ' + changeAmount.toFixed(2);
        } else {
            change.value = '';
        }
    }

    products.forEach(product => {
        const qtyElem = document.getElementById(product.qty);
        qtyElem.addEventListener("keyup", addOrder);
    });

    cash.addEventListener("keyup", calculateChange);
});
