// Sample Data
const bikeData = [
    {
        id: 1,
        name: "Bullet 350",
        year: "1990–Present",
        image: "https://res.cloudinary.com/df4awljmy/image/upload/c_thumb,w_200,g_face/v1739858431/Classic_350_noif3c.jpg",
        components: [
            { id: 1, name: "Engine" },
            { id: 2, name: "Transmission" },
            { id: 3, name: "Suspension" },
            { id: 4, name: "Brakes" },
            { id: 5, name: "Electrical System" },
            { id: 6, name: "Frame and Body" },
            { id: 7, name: "Wheels and Tires" },
            { id: 8, name: "Exhaust System" },
        ],
    },
    {
        id: 2,
        name: "Bullet 500",
        year: "1990–2008",
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739687919/I2RPDVIQEBABBHTZPZBROYQ6RY_kqh3m0.jpg",
        components: [
            { id: 1, name: "Engine" },
            { id: 2, name: "Transmission" },
            { id: 3, name: "Suspension" },
            { id: 4, name: "Brakes" },
            { id: 5, name: "Electrical System" },
            { id: 6, name: "Frame and Body" },
            { id: 7, name: "Wheels and Tires" },
            { id: 8, name: "Exhaust System" },
        ],
    },
    {
        id: 3,
        name: "Classic 350",
        year: "2009–Present",
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739688733/royal-enfield-select-model-airborne-blue-1579618691640_qejfy2.webp",
        components: [
            { id: 1, name: "Engine" },
            { id: 2, name: "Transmission" },
            { id: 3, name: "Suspension" },
            { id: 4, name: "Brakes" },
            { id: 5, name: "Electrical System" },
            { id: 6, name: "Frame and Body" },
            { id: 7, name: "Wheels and Tires" },
            { id: 8, name: "Exhaust System" },
        ],
    },
    {
        id: 4,
        name: "Classic 500",
        year: "2009–2020",
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739858432/Royal-Enfield-Classic-500_fbijp0.jpg",
        components: [
             { id: 1, name: "Engine" },
            { id: 2, name: "Transmission" },
            { id: 3, name: "Suspension" },
            { id: 4, name: "Brakes" },
            { id: 5, name: "Electrical System" },
            { id: 6, name: "Frame and Body" },
            { id: 7, name: "Wheels and Tires" },
            { id: 8, name: "Exhaust System" },
        ],
    },
    {
        id: 5,
        name: "Himalayan",
        year: "2016–Present",
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739858430/Himalaya_kclqaq.jpg",
        components: [
             { id: 1, name: "Engine" },
            { id: 2, name: "Transmission" },
            { id: 3, name: "Suspension" },
            { id: 4, name: "Brakes" },
            { id: 5, name: "Electrical System" },
            { id: 6, name: "Frame and Body" },
            { id: 7, name: "Wheels and Tires" },
            { id: 8, name: "Exhaust System" },
        ],
    },
    {
        id: 6,
        name: "Interceptor 650",
        year: "2018–Present",
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739858431/Interceptor_qu5exc.jpg",
        components: [
            { id: 1, name: "Engine" },
            { id: 2, name: "Transmission" },
            { id: 3, name: "Suspension" },
            { id: 4, name: "Brakes" },
            { id: 5, name: "Electrical System" },
            { id: 6, name: "Frame and Body" },
            { id: 7, name: "Wheels and Tires" },
            { id: 8, name: "Exhaust System" },
        ],
    },
    {
        id: 7,
        name: "Meteor 350",
        year: "2020–Present",
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739688702/meteor-350-right-front-three-quarter_rt781n.webp",
        components: [
            { id: 1, name: "Engine" },
            { id: 2, name: "Transmission" },
            { id: 3, name: "Suspension" },
            { id: 4, name: "Brakes" },
            { id: 5, name: "Electrical System" },
            { id: 6, name: "Frame and Body" },
            { id: 7, name: "Wheels and Tires" },
            { id: 8, name: "Exhaust System" },
        ],
    },
    {
        id: 8,
        name: "Hunter 350",
        year: "2022–Present",
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739858431/Hunter_350_d1m07u.jpg",
        components: [
             { id: 1, name: "Engine" },
            { id: 2, name: "Transmission" },
            { id: 3, name: "Suspension" },
            { id: 4, name: "Brakes" },
            { id: 5, name: "Electrical System" },
            { id: 6, name: "Frame and Body" },
            { id: 7, name: "Wheels and Tires" },
            { id: 8, name: "Exhaust System" },
        ],
    },
    {
        id: 9,
        name: "Super Meteor 650",
        year: "2023–Present",
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739858432/Super-Meteor-650_avwroz.jpg",
        components: [
             { id: 1, name: "Engine" },
            { id: 2, name: "Transmission" },
            { id: 3, name: "Suspension" },
            { id: 4, name: "Brakes" },
            { id: 5, name: "Electrical System" },
            { id: 6, name: "Frame and Body" },
            { id: 7, name: "Wheels and Tires" },
            { id: 8, name: "Exhaust System" },
        ],
    },
    {
        id: 10,
        name: "Classic 650",
        year: "2025 (Projected)",
        image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739858432/royal-enfield-classic-650_cydyds.jpg",
        components: [
             { id: 1, name: "Engine" },
            { id: 2, name: "Transmission" },
            { id: 3, name: "Suspension" },
            { id: 4, name: "Brakes" },
            { id: 5, name: "Electrical System" },
            { id: 6, name: "Frame and Body" },
            { id: 7, name: "Wheels and Tires" },
            { id: 8, name: "Exhaust System" },
        ],
    },
];

const sparePartsData = [
    // Engine Components
    { id: 1, componentId: 1, name: "Piston", price: 50, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870891/Piston_ks34ug.jpg" },
    { id: 2, componentId: 1, name: "Crankshaft", price: 100, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870890/camshaft_wxbacw.jpg" },
    { id: 3, componentId: 1, name: "Cylinder Head", price: 200, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870891/Cylinder_head_pkkcgs.jpg" },
    { id: 4, componentId: 1, name: "Camshaft", price: 150, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870890/Crankshaft_bgcjv9.jpg" },
    { id: 5, componentId: 1, name: "Air Filter", price: 30, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870891/Air_filter_gkqxqj.jpg" },
    { id: 6, componentId: 1, name: "Exhaust System", price: 250, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739870890/exhaust_pipe_ogouc1.jpg" },

    // Transmission Components
    { id: 7, componentId: 2, name: "Clutch", price: 80, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871113/clutch_noq99f.jpg" },
    { id: 8, componentId: 2, name: "Gearbox", price: 300, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871113/gear_box_zfmivw.jpg" },
    { id: 9, componentId: 2, name: "Chain Drive", price: 120, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871113/chain_drive_l3ogl3.jpg" },
    { id: 10, componentId: 2, name: "Sprockets", price: 50, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871114/sprocket_rfpwle.jpg" },
    { id: 11, componentId: 2, name: "Clutch Cable", price: 20, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871113/clutch_cable_pgf6rs.jpg" },
    { id: 12, componentId: 2, name: "Gear Shifter", price: 40, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871114/gear_shifter_cgpxid.jpg" },

    // Suspension Components
    { id: 13, componentId: 3, name: "Front Fork", price: 180, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871749/front_fork_ohaba4.jpg" },
    { id: 14, componentId: 3, name: "Rear Shock Absorbers", price: 200, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871749/rear_shock_absorbers_bgasnr.jpg" },
    { id: 15, componentId: 3, name: "Swingarm", price: 150, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739871749/spingarm_zjxs4c.jpg" },

    // Braking Components
    { id: 16, componentId: 4, name: "Brake Disc", price: 70, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872555/brake_disc_es0dy6.jpg" },
    { id: 17, componentId: 4, name: "Brake Calipers", price: 90, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872555/front-rear-brake-caliper_cegk8i.jpg" },
    { id: 18, componentId: 4, name: "Brake Pads", price: 30, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872555/brakepads_hywk3y.jpg" },
    { id: 19, componentId: 4, name: "Brake Lines", price: 40, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872555/brakeline_qalsfb.jpg" },

    // Electrical Components
    { id: 20, componentId: 5, name: "Battery", price: 100, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872767/Amaron_Battery_lqekog.jpg" },
    { id: 21, componentId: 5, name: "Alternator", price: 150, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872766/Alternator_slq9aq.jpg" },
    { id: 22, componentId: 5, name: "Spark Plug", price: 10, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872767/Spark_plug_hnjnab.jpg" },
    { id: 23, componentId: 5, name: "Headlight", price: 60, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872767/headlight_jdzzzs.jpg" },
    { id: 24, componentId: 5, name: "Tail Light", price: 50, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872768/tail_light_fckh2d.jpg" },
    { id: 25, componentId: 5, name: "Indicator Lights", price: 20, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739872767/indicator_lights_mgidrt.jpg" },

    // Frame and Body Components
    { id: 26, componentId: 6, name: "Main Frame", price: 500, image: "https://res.cloudinary.com/df4awljmy/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1739873639/images_2_u5oh7g.jpg" },
    { id: 27, componentId: 6, name: "Fuel Tank", price: 200, image: "https://res.cloudinary.com/df4awljmy/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739873003/tank_ej5fnk.jpg" },
    { id: 28, componentId: 6, name: "Seat", price: 80, image: "https://res.cloudinary.com/df4awljmy/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739873002/seat_d2li5p.jpg" },
    { id: 29, componentId: 6, name: "Footpegs", price: 30, image: "https://res.cloudinary.com/df4awljmy/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1739873002/images_icfhmv.jpg" },
    { id: 30, componentId: 6, name: "Handlebars", price: 50, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873639/images_1_w06c1r.jpg" },

    // Wheels and Tires
    { id: 31, componentId: 7, name: "Rim", price: 120, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873737/KXA00016-Style2-_clvmtd.avif" },
    { id: 32, componentId: 7, name: "Tire", price: 100, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873738/tyers_h8g6lf.jpg" },
    { id: 33, componentId: 7, name: "Spokes", price: 40, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873738/spokes_iwnd8f.jpg" },
    { id: 34, componentId: 7, name: "Hub", price: 80, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873737/hub_n8i5cd.jpg" },

    // Exhaust Components
    { id: 35, componentId: 8, name: "Muffler", price: 150, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873862/muffler_sxedcd.jpg" },
    { id: 36, componentId: 8, name: "Header Pipe", price: 120, image: "https://res.cloudinary.com/df4awljmy/image/upload/v1739873862/header_pipe_bo0lid.jpg" },
];

let cart = [];

// Show Homepage
function showHome() {
    document.getElementById("home").classList.add("active");
    document.getElementById("components").classList.remove("active");
    document.getElementById("spare-parts").classList.remove("active");
    document.getElementById("cart").classList.remove("active");
    renderBikeModels();
}

// Show Components Page
function showComponents(modelId) {
    document.getElementById("home").classList.remove("active");
    document.getElementById("components").classList.add("active");
    document.getElementById("spare-parts").classList.remove("active");
    document.getElementById("cart").classList.remove("active");
    renderComponents(modelId);
}

// Show Spare Parts Page
function showSpareParts(componentId) {
    document.getElementById("components").classList.remove("active");
    document.getElementById("spare-parts").classList.add("active");
    document.getElementById("cart").classList.remove("active");
    renderSpareParts(componentId);
}

// Show Cart
function showCart() {
    document.getElementById("home").classList.remove("active");
    document.getElementById("components").classList.remove("active");
    document.getElementById("spare-parts").classList.remove("active");
    document.getElementById("cart").classList.add("active");
    renderCart();
}

// Render Bike Models
function renderBikeModels() {
    const modelList = document.getElementById("model-list");
    modelList.innerHTML = bikeData
        .map(
            (model) => `
            <div class="card" onclick="showComponents(${model.id})">
                <img src="${model.image}" alt="${model.name}">
                <h3>${model.name} (${model.year})</h3>
            </div>
        `
        )
        .join("");
}

// Render Components
function renderComponents(modelId) {
    const model = bikeData.find((m) => m.id === modelId);
    const componentList = document.getElementById("component-list");
    componentList.innerHTML = model.components
        .map(
            (component) => `
            <div class="card" onclick="showSpareParts(${component.id})">
                <h3>${component.name}</h3>
            </div>
        `
        )
        .join("");
}

// Render Spare Parts
function renderSpareParts(componentId) {
    const spareParts = sparePartsData.filter((part) => part.componentId === componentId);
    const sparePartList = document.getElementById("spare-part-list");
    sparePartList.innerHTML = spareParts
        .map(
            (part) => `
            <div class="card">
                <img src="${part.image}" alt="${part.name}">
                <h3>${part.name}</h3>
                <p>$${part.price}</p>
                <button onclick="addToCart(${part.id})">Add to Cart</button>
            </div>
        `
        )
        .join("");
}

// Add to Cart
function addToCart(partId) {
    const part = sparePartsData.find((p) => p.id === partId);
    const cartItem = cart.find((item) => item.id === partId);

    if (cartItem) {
        cartItem.quantity += 1; // Increase quantity if item already exists in cart
    } else {
        part.quantity = 1; // Initialize quantity to 1
        cart.push(part); // Add item to cart
    }

    updateCartCount();
    renderSpareParts(part.componentId); // Re-render the spare parts list
}

// Update Cart Count
function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

// Render Cart
function renderCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = cart
        .map(
            (item) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>
            </div>
        `
        )
        .join("");
}
function increaseQuantity(partId) {
    const cartItem = cart.find((item) => item.id === partId);
    if (cartItem) {
        cartItem.quantity += 1; // Increase quantity
        updateCartCount();
        renderCart(); // Re-render the cart
    }
}

function decreaseQuantity(partId) {
    const cartItem = cart.find((item) => item.id === partId);
    if (cartItem) {
        cartItem.quantity -= 1; // Decrease quantity
        if (cartItem.quantity === 0) {
            cart = cart.filter((item) => item.id !== partId); // Remove item if quantity is 0
        }
        updateCartCount();
        renderCart(); // Re-render the cart
    }
}

// Place Order
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add some items first!");
        return;
    }

    // Show the user verification form
    document.getElementById("user-verification").style.display = "block";
}

// Submit Order
function submitOrder(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const phone = document.getElementById("phone").value;

    if (!username || !phone) {
        alert("Please fill in all fields.");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Simulate order placement
    setTimeout(() => {
        document.getElementById("user-verification").style.display = "none";
        document.getElementById("order-confirmation").style.display = "block";
        cart = [];
        updateCartCount();
        renderCart();
    }, 1000);
}

// Initialize
showHome();