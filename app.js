// ===== เมนูอาหาร =====
const menu = [
    { id: 1, name: "Pizza", category: "อาหารจานหลัก", price: 199 },
    { id: 2, name: "Burger", category: "อาหารจานหลัก", price: 149 },
    { id: 3, name: "Salad", category: "สุขภาพ", price: 99 },
    { id: 4, name: "Steak", category: "อาหารจานหลัก", price: 299 },
    { id: 5, name: "Coffee", category: "เครื่องดื่ม", price: 79 },
    { id: 6, name: "ชาเขียว", category: "เครื่องดื่ม", price: 69 }
];

const menuContainer = document.getElementById("menu");
const filterButtons = document.querySelectorAll(".filter-btn");
const cartCount = document.getElementById("cart-count");

let cart = 0;

// ===== แสดงเมนู =====
function displayMenu(items) {
    menuContainer.innerHTML = "";

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>หมวดหมู่: ${item.category}</p>
            <p>ราคา: ${item.price} บาท</p>
            <button onclick="addToCart()">เพิ่มลงตะกร้า</button>
        `;

        menuContainer.appendChild(div);
    });
}

// ===== เพิ่มตะกร้า =====
function addToCart() {
    cart++;
    cartCount.textContent = cart;
    alert("เพิ่มลงตะกร้าแล้ว 🍽️");
}

// ===== กรองหมวดหมู่ =====
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        if (category === "ทั้งหมด") {
            displayMenu(menu);
        } else {
            const filtered = menu.filter(item => item.category === category);
            displayMenu(filtered);
        }
    });
});

// โหลดหน้าเว็บครั้งแรก
displayMenu(menu);