let cart = [];

function addToCart(itemName, price) {
  const item = { name: itemName, price: price };
  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  let total = 0;

  // Clear existing items in the cart
  cartList.innerHTML = "";

  // Populate the cart with items
  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - Rp ${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
    total += item.price;
  });

  // Update the total amount
  totalElement.textContent = total.toFixed(2);
}

function checkout() {
  // Implement the checkout logic here (e.g., send the order to the server)
  alert("Pesanan berhasil! Terima kasih!");
  cart = []; // Clear the cart after checkout
  updateCart();
}
