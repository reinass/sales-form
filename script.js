document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("productList");
    const addProductButton = document.getElementById("addProduct");

    addProductButton.addEventListener("click", function() {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <label for="productName">Product Name:</label>
            <input type="text" class="productName" required>

            <label for="productCode">Product Code:</label>
            <input type="text" class="productCode" required>

            <label for="quantityOrdered">Quantity Ordered:</label>
            <input type="number" class="quantityOrdered" min="1" required>

            <label for="unitPrice">Unit Price:</label>
            <input type="number" class="unitPrice" step="0.01" required>

            <label for="totalPrice">Total Price:</label>
            <input type="text" class="totalPrice" readonly>
        `;
        productList.appendChild(productDiv);
    });

    productList.addEventListener("input", function(event) {
        if (event.target.classList.contains("quantityOrdered") || event.target.classList.contains("unitPrice")) {
            const productDiv = event.target.closest(".product");
            const quantity = productDiv.querySelector(".quantityOrdered").value;
            const unitPrice = productDiv.querySelector(".unitPrice").value;
            const totalPriceField = productDiv.querySelector(".totalPrice");

            if (quantity && unitPrice) {
                const totalPrice = (quantity * unitPrice).toFixed(2);
                totalPriceField.value = totalPrice;
            } else {
                totalPriceField.value = '';
            }
        }
    });

    const salesOrderForm = document.getElementById("salesOrderForm");
    salesOrderForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission for demonstration

        // Gather form data (this is where you would typically send the data to a server)
        const formData = new FormData(salesOrderForm);
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        alert("Sales order submitted successfully!");
        salesOrderForm.reset(); // Reset the form after submission
    });
});
