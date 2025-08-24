document.addEventListener('DOMContentLoaded', () => {
    // Product data
    const products = [
        // Men's Products (10 total)
        {
            id: 1, name: "Premium Linen Button-Down Shirt", image: "Screenshot 2025-08-23 161754.png", price: 49.99, category: "men",
            description: "Experience the ultimate comfort and style with our Premium Linen Button-Down Shirt. Crafted from a high-quality linen-cotton blend, this shirt is breathable and perfect for warm weather. Its classic fit and modern twist make it suitable for both casual outings and semi-formal occasions."
        },
        {
            id: 2, name: "Urban Graphic Tee - Savage Collection", image: "product1.png.jpeg", price: 35.00, category: "men",
            description: "Make a bold statement with our Urban Graphic Tee from the exclusive Savage Collection. Featuring striking graphics and crafted from premium soft cotton, this tee is perfect for streetwear enthusiasts looking to express their unique style."
        },
        {
            id: 3, name: "Urban Explorer Premium Hoodie", image: "product2.png.jpeg", price: 65.00, category: "men",
            description: "Stay warm and stylish with our Urban Explorer Premium Hoodie. Designed for comfort, it features a soft fleece lining and a modern minimalist design, making it perfect for casual outings or outdoor adventures."
        },
        {
            id: 4, name: "Classic Denim Jacket - Timeless Style", image: "product3.png.jpeg", price: 75.00, category: "men",
            description: "A must-have for every wardrobe, our Classic Denim Jacket is crafted from durable denim that only gets better with age. Its timeless design and functional details make it the perfect layer for any season."
        },
        {
            id: 5, name: "Classic Striped Polo Shirt", image: "product4.png.jpeg", price: 40.00, category: "men",
            description: "Elevate your style with our Classic Striped Polo Shirt. Made from premium pique cotton, it offers exceptional comfort and breathability, making it perfect for business casual settings or weekend outings."
        },
        {
            id: 6, name: "Slim Fit Stretch Chinos", image: "product5.png.jpeg", price: 55.00, category: "men",
            description: "Our Slim Fit Stretch Chinos offer the perfect blend of style and comfort. Crafted from premium stretch fabric, they provide maximum mobility while maintaining a sleek silhouette, making them ideal for both office wear and casual outings."
        },
        {
            id: 7, name: "Handcrafted Leather Brogues", image: "product6.png.jpeg", price: 120.00, category: "men",
            description: "Step up your footwear game with our Handcrafted Leather Brogues. Made from premium full-grain leather, these brogues feature intricate detailing and a cushioned insole for all-day comfort, making them perfect for both formal and smart-casual occasions."
        },
        {
            id: 8, name: "Performance Tapered Joggers", image: "product7.png.jpeg", price: 50.00, category: "men",
            description: "Our Performance Tapered Joggers are designed for both athletic activities and casual wear. Made from advanced moisture-wicking fabric, they keep you dry and comfortable while providing a modern tapered fit that's perfect for workouts or everyday use."
        },
        {
            id: 9, name: "Premium Cotton Blend Crewneck Sweater", image: "product8.png.jpeg", price: 60.00, category: "men",
            description: "Our Premium Cotton Blend Crewneck Sweater offers exceptional softness and warmth. Perfect for layering over shirts or wearing alone, this versatile sweater transitions seamlessly from casual outings to more dressed-up occasions, making it an essential piece for cooler seasons."
        },
        {
            id: 10, name: "All-Weather Waterproof Parka", image: "product9.png.jpeg", price: 150.00, category: "men",
            description: "Our All-Weather Waterproof Parka is designed to keep you dry and comfortable in any conditions. Featuring advanced waterproof technology and an insulated lining, this parka provides maximum protection and warmth without bulk, making it perfect for outdoor adventures or urban commuting."
        },

        // Women's Products (10 total)
        {
            id: 11, name: "Elegant Printed Kurta Set", image: "product14.png.jpeg", price: 89.50, category: "women",
            description: "Our Elegant Printed Kurta Set beautifully blends traditional elegance with contemporary style. Featuring intricate floral patterns and delicate embroidery on soft, flowing fabric, this complete ensemble is perfect for festive occasions, weddings, or cultural celebrations."
        },
        {
            id: 12, name: "Colorblock Ribbed Top", image: "product11.png.jpeg", price: 29.99, category: "women",
            description: "Our Colorblock Ribbed Top features a modern design made from soft, stretchy ribbed fabric for a comfortable fit. Perfect for stylish casual outfits, it can be paired with jeans, skirts, or layered under jackets for versatile looks."
        },
        {
            id: 13, name: "Floral Print Summer Maxi Dress", image: "product12.png.jpeg", price: 55.00, category: "women",
            description: "Our Floral Print Summer Maxi Dress captures the essence of warm-weather elegance with its lightweight, breathable fabric and vibrant floral pattern. Perfect for garden parties, beach vacations, or any summer celebration, it features adjustable straps and a design that transitions seamlessly from day to evening wear."
        },
        {
            id: 14, name: "Minimalist Leather Sneakers", image: "product13.png.jpeg", price: 99.99, category: "women",
            description: "Our Minimalist Leather Sneakers are crafted from premium leather with a sleek, streamlined design that complements any outfit. Featuring a comfortable memory foam insole and durable rubber sole, they're perfect for casual outings, work, or adding sophistication to your everyday wardrobe."
        },
        {
            id: 15, name: "High-Waisted Stretch Denim Jeans", image: "product17.png.jpeg", price: 60.00, category: "women",
            description: "Our High-Waisted Stretch Denim Jeans are crafted from premium stretch denim that combines comfort with style. The high-rise design provides excellent support and creates a sleek silhouette, while advanced stretch technology maintains shape throughout the day. A versatile staple that can be dressed up with heels or kept casual with sneakers."
        },
        {
            id: 16, name: "Off-the-Shoulder Blouse", image: "product18.png.jpeg", price: 45.00, category: "women",
            description: "Our Off-the-Shoulder Blouse exudes romance and sophistication with its elegant design. Crafted from lightweight, flowy fabric that drapes beautifully, it's perfect for date nights, special occasions, or when you want to feel effortlessly chic. Pair with tailored trousers for a modern look or with a skirt for a more romantic ensemble."
        },
        {
            id: 17, name: "Genuine Leather Tote Bag", image:"product16.png.jpeg", price: 110.00, category: "women",
            description: "Our Genuine Leather Tote Bag combines functionality with timeless style. Crafted from high-quality leather that develops a beautiful patina over time, it features a spacious interior with multiple compartments to organize your essentials. Perfect for work, travel, or everyday use, this durable and elegant accessory complements any outfit from professional attire to casual ensembles."
        },
        {
            id: 18, name: "Wool Blend Winter Coat", image: "product15.png.jpeg", price: 130.00, category: "women",
            description: "Our Wool Blend Winter Coat is designed for both warmth and sophistication. Featuring a classic tailored cut that flatters the silhouette with a soft, warm lining for maximum comfort in cold weather. The high-quality wool blend provides excellent insulation while maintaining a sleek appearance, making it perfect for professional settings, evening events, or everyday winter wear."
        },
        {
            id: 19, name: "Elegant Pleated Midi Skirt", image: "product19.png.jpeg", price: 50.00, category: "women",
            description: "Our Elegant Pleated Midi Skirt combines timeless style with modern sophistication. Crafted from lightweight, flowy fabric that creates beautiful movement with every step, it features an A-line silhouette that is universally flattering with delicate pleats adding texture and dimension. Versatile enough to be dressed up with heels for formal occasions or paired with casual tops for everyday elegance."
        },
        {
            id: 20, name: "Elegant Strappy Heels", image: "product20.png.jpeg", price: 85.00, category: "women",
            description: "Our Elegant Strappy Heels are designed to make a statement at any evening event. Featuring delicate straps that provide both style and support with a secure ankle strap for stability, they're crafted with attention to comfort including cushioned insoles and a manageable heel height. The sophisticated design adds instant glamour to cocktail dresses, evening gowns, or dressed-up casual outfits."
        }
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productGrid = document.getElementById('product-grid');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartIcon = document.getElementById('cart-icon');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const overlay = document.getElementById('overlay');
    const sortSelect = document.getElementById('sort-select');
    
    // Function to handle video to image conversion
    const videoToImage = (videoPath) => {
        const urlMap = {
            '20250823_1559_video.mp4': 'https://placehold.co/400x400/2F4F4F/FFFFFF?text=Savage+Tee',
            'WhatsApp Video 2025-08-18 at 1.35.27 PM.mp4': 'https://placehold.co/400x400/BA55D3/FFFFFF?text=Ribbed+Top'
        };
        return urlMap[videoPath] || videoPath;
    };

    const renderProducts = (productsToRender) => {
        if (!productGrid) return;

        productGrid.innerHTML = '';
        if (productsToRender.length === 0) {
            productGrid.innerHTML = '<p>No products found.</p>';
            return;
        }

        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = `product-card ${product.category}-product`;
            productCard.innerHTML = `
                <a href="product.html?id=${product.id}">
                    <img src="${product.image.endsWith('.mp4') ? videoToImage(product.image) : product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="price">$${product.price.toFixed(2)}</p>
                    </div>
                </a>
            `;
            productGrid.appendChild(productCard);
        });
    };

    const renderProductDetails = () => {
        const productDetailsContainer = document.getElementById('product-details');
        if (!productDetailsContainer) return;

        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        const product = products.find(p => p.id === productId);

        if (!product) {
            productDetailsContainer.innerHTML = '<p>Product not found.</p>';
            return;
        }
        
        productDetailsContainer.innerHTML = `
            <div class="product-image-container ${product.category}-bg">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="details-content">
                <h1>${product.name}</h1>
                <p class="price">$${product.price.toFixed(2)}</p>
                <p>${product.description}</p>
                <div class="add-to-cart-section">
                    <button class="add-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;

        document.querySelector('.add-btn').addEventListener('click', () => {
            addToCart(product.id, 1);
        });
    };

    const updateCart = () => {
        if (!cartItemsContainer) return;
        
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let itemCount = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image.endsWith('.mp4') ? videoToImage(item.image) : item.image}" alt="${item.name}">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p class="price">$${item.price.toFixed(2)}</p>
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div class="cart-item-controls">
                    <button class="remove-btn" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.quantity;
            itemCount += item.quantity;
        });

        cartTotalElement.textContent = `$${total.toFixed(2)}`;
        cartCountElement.textContent = itemCount;
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const addToCart = (productId, quantity) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }
        updateCart();
        cartDrawer.classList.add('open');
        overlay.classList.add('active');
    };

    const handleCartActions = (e) => {
        const target = e.target;
        const productId = parseInt(target.dataset.id);

        if (target.classList.contains('remove-btn')) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
        } else if (target.classList.contains('quantity-btn')) {
            const cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                if (target.classList.contains('plus')) {
                    cartItem.quantity += 1;
                } else if (target.classList.contains('minus')) {
                    if (cartItem.quantity > 1) {
                        cartItem.quantity -= 1;
                    } else {
                        cart = cart.filter(item => item.id !== productId);
                    }
                }
                updateCart();
            }
        }
    };
    
    const sortProducts = () => {
        const sortValue = sortSelect.value;
        const currentPage = window.location.pathname.split('/').pop();
        let productsToRender = [];
        
        if (currentPage === 'men.html') {
            productsToRender = products.filter(p => p.category === 'men');
        } else if (currentPage === 'women.html') {
            productsToRender = products.filter(p => p.category === 'women');
        }
        
        if (sortValue === 'price-asc') {
            productsToRender.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-desc') {
            productsToRender.sort((a, b) => b.price - a.price);
        }
        
        renderProducts(productsToRender);
    };

    // Event Listeners
    if (productGrid) {
        productGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (card) {
                // Navigation handled by link
            }
        });
    }

    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', handleCartActions);
    }

    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            cartDrawer.classList.add('open');
            overlay.classList.add('active');
        });
    }

    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            cartDrawer.classList.remove('open');
            overlay.classList.remove('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            cartDrawer.classList.remove('open');
            overlay.classList.remove('active');
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', sortProducts);
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            window.location.href = 'checkout.html';
        });
    }

    // Checkout page functionality
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }

    const orderSummaryContainer = document.getElementById('order-summary');
    if (orderSummaryContainer) {
        renderOrderSummary();
    }

    function renderOrderSummary() {
        if (!orderSummaryContainer) return;
        
        let total = 0;
        orderSummaryContainer.innerHTML = '';
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <div class="order-item-info">
                    <h4>${item.name}</h4>
                    <p>Quantity: ${item.quantity}</p>
                </div>
                <div class="order-item-price">
                    $${itemTotal.toFixed(2)}
                </div>
            `;
            orderSummaryContainer.appendChild(orderItem);
        });

        const totalElement = document.createElement('div');
        totalElement.className = 'order-total';
        totalElement.innerHTML = `
            <hr>
            <div class="total-row">
                <strong>Total:</strong>
                <strong>$${total.toFixed(2)}</strong>
            </div>
        `;
        orderSummaryContainer.appendChild(totalElement);
    }

    function handleCheckout(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        
        // Basic validation
        if (!email || !phone || !address) {
            alert('Please fill in all required fields.');
            return;
        }

        // Create order object
        const order = {
            orderId: generateOrderId(),
            customer: { email, phone, address },
            items: [...cart],
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            paymentMethod,
            orderDate: new Date().toISOString(),
            status: 'pending'
        };

        // Save order to localStorage
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));

        // Send email (simulated)
        sendOrderEmail(order);

        // Clear cart and redirect
        localStorage.removeItem('cart');
        cart = [];
        
        alert('Order placed successfully! You will receive a confirmation email shortly.');
        window.location.href = 'index.html';
    }

    function generateOrderId() {
        return 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    function sendOrderEmail(order) {
        // This is a simulated email sending function
        // In a real application, you would integrate with an email service like EmailJS, SendGrid, etc.
        
        const emailContent = `
            Order Confirmation - Order #${order.orderId}
            
            Thank you for your purchase!
            
            Order Details:
            ${order.items.map(item => `
                - ${item.name} x${item.quantity}: $${(item.price * item.quantity).toFixed(2)}
            `).join('')}
            
            Total: $${order.total.toFixed(2)}
            Payment Method: ${order.paymentMethod.toUpperCase()}
            
            Shipping Address:
            ${order.customer.address}
            
            Contact:
            Email: ${order.customer.email}
            Phone: ${order.customer.phone}
            
            Order Date: ${new Date(order.orderDate).toLocaleString()}
            
            We'll notify you when your order ships!
        `;

        console.log('Email sent to:', order.customer.email);
        console.log('Email content:', emailContent);
        
        // For demo purposes, we'll just log the email
        // In production, integrate with a real email service
    }

    // Initialize the page based on the URL
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'men.html') {
        renderProducts(products.filter(p => p.category === 'men'));
    } else if (currentPage === 'women.html') {
        renderProducts(products.filter(p => p.category === 'women'));
    } else if (currentPage === 'product.html') {
        renderProductDetails();
    }
    
    updateCart();
});