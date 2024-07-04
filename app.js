document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {id: 1, price: 10000.00},
        {id: 2, price: 12000.00},
        {id: 3, price: 11500.00},
        {id: 4, price: 9000.00},
        {id: 5, price: 4500.00},
        {id: 6, price: 13000.00}
    ];
    
    const qtyInputs = products.map(product => document.getElementById(`qty${product.id}`));
    const cartsTextarea = document.getElementById("carts");
    const totalInput = document.getElementById("total");
    const cashInput = document.getElementById("cash");
    const changeInput = document.getElementById("change");

    function calculateTotal() {
        let total = 0;
        cartsTextarea.value = "";
        
        qtyInputs.forEach((input, index) => {
            const qty = parseInt(input.value) || 0;
            if (qty > 0) {
                const product = products[index];
                const itemTotal = qty * product.price;
                total += itemTotal;
                cartsTextarea.value += `Product ${product.id}: ${qty} x ${product.price} = ${itemTotal}\n`;
            }
        });
        
        totalInput.value = total.toFixed(2);
    }
    
    function calculateChange() {
        const total = parseFloat(totalInput.value) || 0;
        const cash = parseFloat(cashInput.value) || 0;
        const change = cash - total;
        changeInput.value = change.toFixed(2);
    }
    
    qtyInputs.forEach(input => input.addEventListener("input", calculateTotal));
    cashInput.addEventListener("input", calculateChange);
});
