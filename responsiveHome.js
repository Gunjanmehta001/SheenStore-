const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }

  /*searchbar*/
function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("navbar");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
/*sortproducts*/
    function sortProducts() {
        var selectBox = document.getElementById("sortOrder");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        var productsContainer = document.querySelector(".pro-container");
        var products = Array.from(productsContainer.getElementsByClassName("pro"));

        if (selectedValue === "lowToHigh") {
            products.sort((a, b) => {
                var priceA = parseFloat(a.querySelector(".des h4").textContent.split("/")[0]);
                var priceB = parseFloat(b.querySelector(".des h4").textContent.split("/")[0]);
                return priceA - priceB;
            });
        } else if (selectedValue === "highToLow") {
            products.sort((a, b) => {
                var priceA = parseFloat(a.querySelector(".des h4").textContent.split("/")[0]);
                var priceB = parseFloat(b.querySelector(".des h4").textContent.split("/")[0]);
                return priceB - priceA;
            });
        }

        products.forEach(product => {
            productsContainer.appendChild(product);
        });
    }

 /*filter product*/
    function filterProducts() {
        var searchInput = document.getElementById("searchInput").value.toLowerCase();
        var products = document.querySelectorAll(".pro");
    
        products.forEach(function(product) {
            var productName = product.querySelector("h5").innerText.toLowerCase();
            if (productName.includes(searchInput)) {
                product.style.display = "block"; 
            } else {
                product.style.display = "none";
            }
        });
    }
/*payment redirect*/
   
function redirectToPayment() {
    window.location.href = "PAYMENT.HTML";
  }
  
/*removeelementsfromcsrt*/
    function removeFromCart(element) {
        var row = element.closest("tr");
        row.remove();
        updateSubtotal();
    }
/*subtotal*/
    function updateSubtotal(input) {
        var row = input.closest("tr");
        var price = parseFloat(row.querySelector("td:nth-child(4)").innerText.replace('$', ''));
        var quantity = parseInt(input.value);
        var subtotal = price * quantity;
        row.querySelector(".subtotal").innerText = '$' + subtotal.toFixed(2);

        var rows = document.querySelectorAll("#cart tbody tr");
        var total = 0;
        rows.forEach(function(row) {
            total += parseFloat(row.querySelector(".subtotal").innerText.replace('$', ''));
        });
        document.getElementById("cart-subtotal").innerText = '$' + total.toFixed(2);
        document.getElementById("cart-total").innerText = '$' + total.toFixed(2);
    }
/*add to cart from the collection*/

    function addToCart(productName, price, imageSrc) {
      var product = {
          name: productName,
          price: price,
          image: imageSrc
      };
      var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      cartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      window.location.href = "cart.html";
  }
  

/*cart adddtion*/
  window.onload = function() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var cartBody = document.querySelector("#cart tbody");
    cartItems.forEach(function(product) { 
        var newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><a href="#" onclick="removeFromCart(this)"><i class="fa-regular fa-circle-xmark"></i></a></td>
            <td><img src="${product.image}" alt="${product.name}" /></td>
            <td>${product.name}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td><input type="number" value="1" onchange="updateSubtotal(this)"/></td>
            <td class="subtotal">$${product.price.toFixed(2)}</td>
        `;
        cartBody.appendChild(newRow);
    });
    updateSubtotal();
}

function addToCart(productName, price) {
    var product = {
        name: productName,
        price: price
    };
    var cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.href = "cart.html";
}
