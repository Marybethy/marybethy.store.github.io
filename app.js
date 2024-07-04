document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 'qty1', name: 'Nike SB Dunk', price: 10000 },
        { id: 'qty2', name: 'Air Jordan', price: 12000 },
        { id: 'qty3', name: 'Air Jordan Tatum', price: 11500 },
        { id: 'qty4', name: 'Adidas Samba OG', price: 9000 },
        { id: 'qty5', name: 'Vans Old Skool', price: 4500 },
        { id: 'qty6', name: 'Air Jordan 1 Elevate Low', price: 13000 }
    ];

    const cartsTextArea = document.getElementById('carts');
    const totalInput = document.getElementById('total');
    const cashInput = document.getElementById('cash');
    const changeInput = document.getElementById('change');

    products.forEach(product => {
        const qtyInput = document.getElementById(product.id);
        qtyInput.addEventListener('input', () => {
            updateOrders();
            calculateTotal();
        });
    });

    cashInput.addEventListener('input', calculateChange);

    function updateOrders() {
        let orders = '';
        products.forEach(product => {
            const qty = document.getElementById(product.id).value;
            if (qty > 0) {
                orders += `${product.name}, Price: ${(qty * product.price).toFixed(2)}\n`;
            }
        });
        cartsTextArea.value = orders;
    }

    function calculateTotal() {
        let total = 0;
        products.forEach(product => {
            const qty = document.getElementById(product.id).value;
            if (qty > 0) {
                total += qty * product.price;
            }
        });
        totalInput.value = total.toFixed(2);
    }

    function calculateChange() {
        const total = parseFloat(totalInput.value);
        const cash = parseFloat(cashInput.value);
        if (!isNaN(total) && !isNaN(cash)) {
            const change = cash - total;
            changeInput.value = change.toFixed(2);
        } else {
            changeInput.value = '';
        }
    }
