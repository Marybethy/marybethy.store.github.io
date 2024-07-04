document.addEventListener("DOMContentLoaded", function() {
  const products = [
    { id: "product1", name: "Nike SB Dunk", price: 10000 },
    { id: "product2", name: "Air Jordan", price: 12000 },
    { id: "product3", name: "Air Jordan Tatum", price: 11500 },
    { id: "product4", name: "Adidas Samba OG", price: 10000 },
    { id: "product5", name: "Vans Old Skool", price: 3500 },
    { id: "product6", name: "Air Jordan 1 Elevate Low", price: 13000 },
    { id: "product7", name: "Jordan", price: 10000 }
  ];

  function updateCart() {
    let cartContent = "";
    let total = 0;
    
    products.forEach((product, index) => {
      const qty = document.getElementById(`qty${index + 1}`).value;
      if (qty && qty > 0) {
        const cost = product.price * qty;
        total += cost;
        cartContent += `${product.name} x ${qty} = ${cost.toFixed(2)}\n`;
      }
    });

    document.getElementById("carts").value = cartContent;
    document.getElementById("total").value = total.toFixed(2);
    updateChange();
  }

  function updateChange() {
    const total = parseFloat(document.getElementById("total").value) || 0;
    const cash = parseFloat(document.getElementById("cash").value) || 0;
    const change = cash - total;
    document.getElementById("change").value = change >= 0 ? change.toFixed(2) : "0.00";
  }

  products.forEach((product, index) => {
    document.getElementById(`qty${index + 1}`).addEventListener("input", updateCart);
  });

  document.getElementById("cash").addEventListener("input", updateChange);
});
