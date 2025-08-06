// Danh sách sản phẩm mẫu
const products = [
    { id: 1, title: 'Máy Ảnh Sony A7 IV', price: 38000000, brand: 'Sony', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Sony+A7+IV', stock: true, category: 'camera' },
    { id: 2, title: 'Máy Ảnh Canon EOS R6', price: 42000000, brand: 'Canon', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Canon_wordmark.svg', img: 'https://via.placeholder.com/180x150?text=Canon+EOS+R6', stock: true, category: 'camera' },
    { id: 3, title: 'Ống Kính Sony FE 24-70mm', price: 25000000, brand: 'Sony', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Sony+24-70mm', stock: true, category: 'lens' },
    { id: 4, title: 'Ống Kính Canon RF 50mm', price: 9000000, brand: 'Canon', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Canon_wordmark.svg', img: 'https://via.placeholder.com/180x150?text=Canon+RF+50mm', stock: true, category: 'lens' },
    { id: 5, title: 'Máy ảnh Sony ZV-E10', price: 13500000, brand: 'Sony', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Sony+ZV-E10', stock: true, category: 'camera' },
    { id: 6, title: 'Máy ảnh Sony A7III', price: 30000000, brand: 'Sony', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Sony+A7III', stock: true, category: 'camera' },
    { id: 7, title: 'Máy ảnh Canon EOS 5D', price: 4500000, brand: 'Canon', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Canon_wordmark.svg', img: 'https://via.placeholder.com/180x150?text=Canon+EOS+5D', stock: true, category: 'camera' },
    { id: 8, title: 'Máy ảnh Canon EOS 6D', price: 7000000, brand: 'Canon', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Canon_wordmark.svg', img: 'https://via.placeholder.com/180x150?text=Canon+EOS+6D', stock: true, category: 'camera' },
    { id: 9, title: 'Ống kính Canon EF 24-105mm F4L', price: 5500000, brand: 'Canon', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Canon_wordmark.svg', img: 'https://via.placeholder.com/180x150?text=Canon+24-105mm+F4L', stock: true, category: 'lens' },
    { id: 10, title: 'Ống kính Sony FE 70-200mm GM F2.8 OSS', price: 35000000, brand: 'Sony', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Sony+70-200mm+GM', stock: true, category: 'lens' },
    { id: 11, title: 'Ống kính Sigma 24-70mm F2.8 OS', price: 25000000, brand: 'Sigma', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Sigma_Corporation_logo.svg', img: 'https://via.placeholder.com/180x150?text=Sigma+24-70mm+OS', stock: true, category: 'lens' },
    { id: 12, title: 'Ống kính Sony FE 50mm F1.4 GM', price: 27000000, brand: 'Sony', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Sony+50mm+F1.4+GM', stock: true, category: 'lens' },
    { id: 13, title: 'Máy ảnh Nikon Z6 II', price: 34000000, brand: 'Nikon', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Nikon_Logo.svg', img: 'https://via.placeholder.com/180x150?text=Nikon+Z6+II', stock: true, category: 'camera' },
    { id: 14, title: 'Ống kính Nikon Z 24-70mm f/4 S', price: 18000000, brand: 'Nikon', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Nikon_Logo.svg', img: 'https://via.placeholder.com/180x150?text=Nikon+24-70mm+f4+S', stock: true, category: 'lens' },
    { id: 15, title: 'Máy ảnh Fujifilm X-T4', price: 28000000, brand: 'Fujifilm', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Fujifilm_logo.svg', img: 'https://via.placeholder.com/180x150?text=Fujifilm+X-T4', stock: true, category: 'camera' },
    { id: 16, title: 'Ống kính Fujinon XF 16-55mm f/2.8', price: 21000000, brand: 'Fujifilm', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Fujifilm_logo.svg', img: 'https://via.placeholder.com/180x150?text=Fujinon+16-55mm+f2.8', stock: true, category: 'lens' },
    { id: 17, title: 'Ống kính Tamron 28-75mm F2.8 Di III RXD', price: 15000000, brand: 'Tamron', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Tamron_logo.svg', img: 'https://via.placeholder.com/180x150?text=Tamron+28-75mm+F2.8', stock: true, category: 'lens' },
    { id: 18, title: 'Ống kính Tamron 70-180mm F2.8 Di III VXD', price: 25000000, brand: 'Tamron', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Tamron_logo.svg', img: 'https://via.placeholder.com/180x150?text=Tamron+70-180mm+F2.8', stock: true, category: 'lens' },
    { id: 19, title: 'Máy ảnh Leica Q2', price: 120000000, brand: 'Leica', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Leica_logo.svg', img: 'https://via.placeholder.com/180x150?text=Leica+Q2', stock: true },
    { id: 20, title: 'Ống kính Leica Summilux-M 50mm f/1.4 ASPH', price: 95000000, brand: 'Leica', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Leica_logo.svg', img: 'https://via.placeholder.com/180x150?text=Leica+50mm+f1.4', stock: true },
    { id: 21, title: 'Đèn Flash Canon Speedlite 600EX II-RT', price: 8500000, brand: 'Canon', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Canon_wordmark.svg', img: 'https://via.placeholder.com/180x150?text=Canon+Speedlite+600EX', stock: true, category: 'accessory' },
    { id: 22, title: 'Đèn Flash Sony HVL-F60RM2', price: 9500000, brand: 'Sony', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Sony+HVL-F60RM2', stock: true, category: 'accessory' },
    { id: 23, title: 'Đèn Flash Nikon SB-5000', price: 7800000, brand: 'Nikon', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Nikon_Logo.svg', img: 'https://via.placeholder.com/180x150?text=Nikon+SB-5000', stock: true, category: 'accessory' },
    { id: 24, title: 'Đèn LED Aputure MC RGBWW', price: 3200000, brand: 'Aputure', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Aputure+MC+RGBWW', stock: true, category: 'accessory' },
    { id: 25, title: 'Đèn LED Godox SL-60W', price: 2800000, brand: 'Godox', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Godox+SL-60W', stock: true, category: 'accessory' },
    { id: 26, title: 'Đèn LED Yongnuo YN360', price: 1800000, brand: 'Yongnuo', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Yongnuo+YN360', stock: true, category: 'accessory' },
    { id: 27, title: 'Chân máy Manfrotto MT055XPRO3', price: 4500000, brand: 'Manfrotto', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Manfrotto+MT055XPRO3', stock: true, category: 'accessory' },
    { id: 28, title: 'Chân máy Gitzo GT3543LS', price: 8500000, brand: 'Gitzo', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Gitzo+GT3543LS', stock: true, category: 'accessory' },
    { id: 29, title: 'Chân máy Benro TMA38CL', price: 3200000, brand: 'Benro', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Benro+TMA38CL', stock: true, category: 'accessory' },
    { id: 30, title: 'Gimbal DJI RS 3 Pro', price: 12000000, brand: 'DJI', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=DJI+RS+3+Pro', stock: true, category: 'accessory' },
    { id: 31, title: 'Gimbal Zhiyun Crane 3S', price: 9500000, brand: 'Zhiyun', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Zhiyun+Crane+3S', stock: true, category: 'accessory' },
    { id: 32, title: 'Gimbal Moza Air 2', price: 7800000, brand: 'Moza', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Moza+Air+2', stock: true, category: 'accessory' },
    { id: 33, title: 'Microphone Rode VideoMic Pro+', price: 4200000, brand: 'Rode', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Rode+VideoMic+Pro+', stock: true, category: 'accessory' },
    { id: 34, title: 'Microphone Sennheiser MKE 600', price: 3800000, brand: 'Sennheiser', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Sennheiser+MKE+600', stock: true, category: 'accessory' },
    { id: 35, title: 'Filter ND Variable 2-8 Stop', price: 1200000, brand: 'Tiffen', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Tiffen+ND+Variable', stock: true, category: 'accessory' },
    { id: 36, title: 'Filter CPL Circular Polarizer', price: 850000, brand: 'Hoya', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Hoya+CPL+Filter', stock: true, category: 'accessory' },
    { id: 37, title: 'Máy in ảnh Canon SELPHY CP1500', price: 2800000, brand: 'Canon', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Canon_wordmark.svg', img: 'https://via.placeholder.com/180x150?text=Canon+SELPHY+CP1500', stock: true, category: 'printer' },
    { id: 38, title: 'Máy in ảnh Fujifilm Instax Share SP-3', price: 3500000, brand: 'Fujifilm', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Fujifilm_logo.svg', img: 'https://via.placeholder.com/180x150?text=Fujifilm+Instax+Share+SP-3', stock: true, category: 'printer' },
    { id: 39, title: 'Máy in ảnh HP Sprocket Studio', price: 4200000, brand: 'HP', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=HP+Sprocket+Studio', stock: true, category: 'printer' },
    { id: 40, title: 'Máy in ảnh Polaroid Hi-Print', price: 1800000, brand: 'Polaroid', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Polaroid+Hi-Print', stock: true, category: 'printer' },
];

// Giỏ hàng
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

// Render sản phẩm
function renderProducts(list = products) {
    const productsDiv = document.getElementById('products');
    if (list.length === 0) {
        productsDiv.innerHTML = '<i>Không tìm thấy sản phẩm phù hợp.</i>';
        return;
    }
    productsDiv.innerHTML = list.map(p => `
        <div class="product">
            <a href="product.html?id=${p.id}" style="text-decoration:none;color:inherit;">
                <img src="${p.img}" alt="${p.title}">
                <div class="product-title" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;">
                    <img src="${p.brandLogo}" alt="${p.brand}" style="height:20px;max-width:50px;object-fit:contain;vertical-align:middle;" />
                    <span>${p.title}</span>
                </div>
            </a>
            <div class="product-price">${p.price.toLocaleString()} đ</div>
            <button class="add-to-cart" onclick="addToCart(${p.id})">Thêm vào giỏ</button>
        </div>
    `).join('');
}

// Lọc sản phẩm theo từ khóa, thương hiệu và danh mục
function filterProducts() {
    const keyword = document.getElementById('searchInput').value.trim().toLowerCase();
    const brand = document.getElementById('brandSelect').value;
    const category = document.getElementById('categorySelect').value;
    let filtered = products;
    
    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }
    if (brand) {
        filtered = filtered.filter(p => p.brand === brand);
    }
    if (keyword) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(keyword));
    }
    renderProducts(filtered);
}

// Thêm vào giỏ hàng
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Cập nhật số lượng trên icon giỏ hàng
function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.reduce((sum, i) => sum + i.qty, 0);
}

// Hiển thị giỏ hàng
function showCart() {
    document.getElementById('cartModal').style.display = 'flex';
    renderCartItems();
}

// Ẩn giỏ hàng
function hideCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Render các sản phẩm trong giỏ hàng
function renderCartItems() {
    const cartItemsDiv = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<i>Giỏ hàng trống.</i>';
        document.getElementById('cartTotal').textContent = '';
        return;
    }
    cartItemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span class="cart-item-title">${item.title} x${item.qty}</span>
            <span>${(item.price * item.qty).toLocaleString()} đ</span>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Xóa</button>
        </div>
    `).join('');
    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    document.getElementById('cartTotal').textContent = `Tổng cộng: ${total.toLocaleString()} đ`;
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}

// Hiển thị modal xác nhận đơn hàng
function showOrderModal() {
    if (cart.length === 0) {
        alert('Giỏ hàng trống.');
        return;
    }
    document.getElementById('orderModal').style.display = 'flex';
    renderOrderItems();
}

// Ẩn modal xác nhận đơn hàng
function hideOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
}

// Render chi tiết đơn hàng trong modal xác nhận
function renderOrderItems() {
    const orderItemsDiv = document.getElementById('orderItems');
    if (cart.length === 0) {
        orderItemsDiv.innerHTML = '<i>Không có sản phẩm.</i>';
        document.getElementById('orderTotal').textContent = '';
        return;
    }
    orderItemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span class="cart-item-title">${item.title} x${item.qty}</span>
            <span>${(item.price * item.qty).toLocaleString()} đ</span>
        </div>
    `).join('');
    updateOrderTotal();
}

// Tính và hiển thị tổng tiền sau giảm giá
function updateOrderTotal() {
    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const voucher = parseFloat(document.getElementById('voucherSelect')?.value || 0);
    const discount = Math.round(total * voucher);
    const finalTotal = total - discount;
    let text = `Tổng cộng: <s>${total.toLocaleString()} đ</s><br>`;
    if (voucher > 0) {
        text += `Giảm giá: -${discount.toLocaleString()} đ (${voucher*100}%)<br>`;
    }
    text += `<b>Thanh toán: ${finalTotal.toLocaleString()} đ</b>`;
    document.getElementById('orderTotal').innerHTML = text;
}

// Xác nhận đặt hàng
function confirmOrder() {
    const name = document.getElementById('customerName').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const payment = document.querySelector('input[name="payment"]:checked')?.value;
    const voucher = parseFloat(document.getElementById('voucherSelect').value);
    if (!name || !address || !phone) {
        alert('Vui lòng nhập đầy đủ thông tin người nhận!');
        return;
    }
    if (!/^\d{9,12}$/.test(phone)) {
        alert('Số điện thoại không hợp lệ!');
        return;
    }
    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const discount = Math.round(total * voucher);
    const finalTotal = total - discount;
    const order = {
        name, address, phone, payment,
        voucher,
        items: cart.map(i => ({ title: i.title, qty: i.qty, price: i.price })),
        total, discount, finalTotal,
        orderTime: new Date().toISOString(),
    };
    let orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    orderHistory.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    localStorage.setItem('lastOrder', JSON.stringify(order));
    alert('Đặt hàng thành công!\nCảm ơn bạn đã mua hàng tại HQStudio.');
    cart = [];
    localStorage.removeItem('cart');
    updateCartCount();
    renderCartItems();
    hideOrderModal();
    hideCart();
}

// Hiển thị modal đơn hàng đã đặt
function showOrderHistory() {
    const orders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    const contentDiv = document.getElementById('historyContent');
    if (orders.length === 0) {
        contentDiv.innerHTML = '<i>Chưa có đơn hàng nào.</i>';
        document.getElementById('cancelOrderBtn').style.display = 'none';
        document.getElementById('confirmReceivedBtn').style.display = 'none';
        return;
    }
    orders.sort((a, b) => new Date(b.orderTime) - new Date(a.orderTime));
    let html = '<div class="order-history-scroll" style="max-height: 400px; overflow-y: auto; padding-right: 10px;">';
    orders.forEach((order, index) => {
        const orderDate = new Date(order.orderTime);
        const minDate = new Date(orderDate.getTime() + 2*24*60*60*1000);
        const maxDate = new Date(orderDate.getTime() + 4*24*60*60*1000);
        const formatDate = d => d.toLocaleDateString('vi-VN');
        const formatDateTime = d => d.toLocaleString('vi-VN');
        html += `
            <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; background: #f9f9f9;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <h3 style="margin: 0; color: #2d3e50;">Đơn hàng #${orders.length - index}</h3>
                    <span style="color: #666; font-size: 0.9rem;">${formatDateTime(orderDate)}</span>
                </div>
                <div style="margin-bottom: 0.5rem;">
                    <b>Người nhận:</b> ${order.name}<br>
                    <b>Địa chỉ:</b> ${order.address}<br>
                    <b>Số điện thoại:</b> ${order.phone}<br>
                    <b>Phương thức thanh toán:</b> ${order.payment === 'COD' ? 'Thanh toán khi nhận hàng' : 'Thẻ tín dụng'}<br>
                    <b>Voucher:</b> ${order.voucher > 0 ? (order.voucher*100 + '%') : 'Không áp dụng'}
                </div>
                <div style="margin-bottom: 0.5rem;">
                    <b>Sản phẩm:</b>
                    <ul style="margin: 0 0 0 1.2em; padding: 0;">
        `;
        order.items.forEach(i => {
            html += `<li>${i.title} x${i.qty} - ${(i.price*i.qty).toLocaleString()} đ</li>`;
        });
        html += `
                    </ul>
                </div>
                <div style="border-top: 1px solid #ddd; padding-top: 0.5rem;">
                    <b>Tổng tiền:</b> <s>${order.total.toLocaleString()} đ</s><br>
        `;
        if (order.discount > 0) {
            html += `<b>Giảm giá:</b> -${order.discount.toLocaleString()} đ<br>`;
        }
        html += `
                    <b>Thanh toán:</b> <span style="color: #27ae60; font-weight: bold;">${order.finalTotal.toLocaleString()} đ</span><br>
                    <b>Thời gian dự kiến nhận hàng:</b> ${formatDate(minDate)} - ${formatDate(maxDate)}
                </div>
            </div>
        `;
    });
    html += '</div>';
    contentDiv.innerHTML = html;
    document.getElementById('cancelOrderBtn').style.display = '';
    document.getElementById('confirmReceivedBtn').style.display = '';
}

// Hủy đơn hàng
function cancelOrder() {
    if (confirm('Bạn chắc chắn muốn hủy đơn hàng này?')) {
        let orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
        if (orderHistory.length > 0) {
            orderHistory.pop();
            localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
        }
        localStorage.removeItem('lastOrder');
        showOrderHistory();
        alert('Đơn hàng đã được hủy.');
    }
}

// Xác nhận đã nhận hàng
function confirmReceived() {
    let orderHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    if (orderHistory.length > 0) {
        orderHistory.pop();
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    }
    localStorage.removeItem('lastOrder');
    showOrderHistory();
    alert('Cảm ơn bạn đã xác nhận đã nhận hàng!');
}

// ==== Đăng nhập/Đăng ký tài khoản ====
function showAuthModal() {
    document.getElementById('authModal').style.display = 'flex';
    showLoginTab();
}
function hideAuthModal() {
    document.getElementById('authModal').style.display = 'none';
}
function showLoginTab() {
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('tabLogin').style.background = '#2d3e50';
    document.getElementById('tabLogin').style.color = '#fff';
    document.getElementById('tabRegister').style.background = '#eee';
    document.getElementById('tabRegister').style.color = '#2d3e50';
}
function showRegisterTab() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'flex';
    document.getElementById('tabLogin').style.background = '#eee';
    document.getElementById('tabLogin').style.color = '#2d3e50';
    document.getElementById('tabRegister').style.background = '#2d3e50';
    document.getElementById('tabRegister').style.color = '#fff';
}

// Sự kiện
document.getElementById('cartBtn').onclick = showCart;
document.getElementById('closeCart').onclick = hideCart;
document.getElementById('checkoutBtn').onclick = showOrderModal;
document.getElementById('closeOrder').onclick = hideOrderModal;
document.getElementById('voucherSelect').addEventListener('change', updateOrderTotal);
document.getElementById('confirmOrderBtn').onclick = confirmOrder;
document.getElementById('searchInput').addEventListener('input', filterProducts);
document.getElementById('categorySelect').addEventListener('change', filterProducts);
document.getElementById('brandSelect').addEventListener('change', filterProducts);
document.getElementById('orderHistoryBtn').onclick = function() {
    document.getElementById('historyModal').style.display = 'flex';
    showOrderHistory();
};
document.getElementById('closeHistory').onclick = function() {
    document.getElementById('historyModal').style.display = 'none';
};
document.getElementById('cancelOrderBtn').onclick = cancelOrder;
document.getElementById('confirmReceivedBtn').onclick = confirmReceived;
document.getElementById('loginBtn').onclick = showAuthModal;
document.getElementById('closeAuth').onclick = hideAuthModal;
document.getElementById('tabLogin').onclick = showLoginTab;
document.getElementById('tabRegister').onclick = showRegisterTab;

// Đăng ký
document.getElementById('registerForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim().toLowerCase();
    const pw = document.getElementById('registerPassword').value;
    const pw2 = document.getElementById('registerPassword2').value;
    if (!name || !email || !pw || !pw2) return alert('Vui lòng nhập đầy đủ thông tin!');
    if (pw !== pw2) return alert('Mật khẩu xác nhận không khớp!');
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) return alert('Email đã được đăng ký!');
    users.push({ name, email, password: pw });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Đăng ký thành công! Bạn có thể đăng nhập.');
    showLoginTab();
};

// Đăng nhập
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const pw = document.getElementById('loginPassword').value;
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === pw);
    if (!user) return alert('Email hoặc mật khẩu không đúng!');
    localStorage.setItem('currentUser', JSON.stringify(user));
    alert('Đăng nhập thành công!');
    updateUserUI();
    hideAuthModal();
};

// Profile event listeners
document.getElementById('closeProfile').onclick = hideProfileModal;
document.getElementById('profileForm').onsubmit = function(e) {
    e.preventDefault();
    updateProfile();
};
document.getElementById('changePasswordBtn').onclick = showPasswordModal;
document.getElementById('logoutBtn').onclick = logout;

// Password change event listeners
document.getElementById('closePassword').onclick = hidePasswordModal;
document.getElementById('passwordForm').onsubmit = function(e) {
    e.preventDefault();
    changePassword();
};

// ==== PROFILE FUNCTIONS ====
function showProfileModal() {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!user) {
        showAuthModal();
        return;
    }
    document.getElementById('profileName').value = user.name || '';
    document.getElementById('profileEmail').value = user.email || '';
    document.getElementById('profilePhone').value = user.phone || '';
    document.getElementById('profileAddress').value = user.address || '';
    document.getElementById('profileBirthday').value = user.birthday || '';
    document.getElementById('profileGender').value = user.gender || '';
    document.getElementById('profileModal').style.display = 'flex';
}

function hideProfileModal() {
    document.getElementById('profileModal').style.display = 'none';
}

function showPasswordModal() {
    document.getElementById('passwordModal').style.display = 'flex';
}

function hidePasswordModal() {
    document.getElementById('passwordModal').style.display = 'none';
    document.getElementById('passwordForm').reset();
}

// Cập nhật thông tin profile
function updateProfile() {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!user) return;
    const name = document.getElementById('profileName').value.trim();
    const phone = document.getElementById('profilePhone').value.trim();
    const address = document.getElementById('profileAddress').value.trim();
    const birthday = document.getElementById('profileBirthday').value;
    const gender = document.getElementById('profileGender').value;
    if (!name) {
        alert('Vui lòng nhập họ tên!');
        return;
    }
    user.name = name;
    user.phone = phone;
    user.address = address;
    user.birthday = birthday;
    user.gender = gender;
    localStorage.setItem('currentUser', JSON.stringify(user));
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.email === user.email);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...user };
        localStorage.setItem('users', JSON.stringify(users));
    }
    alert('Cập nhật thông tin thành công!');
    updateUserUI();
}

// Đổi mật khẩu
function changePassword() {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!user) return;
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;
    if (!currentPassword || !newPassword || !confirmNewPassword) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }
    if (currentPassword !== user.password) {
        alert('Mật khẩu hiện tại không đúng!');
        return;
    }
    if (newPassword !== confirmNewPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }
    if (newPassword.length < 6) {
        alert('Mật khẩu mới phải có ít nhất 6 ký tự!');
        return;
    }
    user.password = newPassword;
    localStorage.setItem('currentUser', JSON.stringify(user));
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.email === user.email);
    if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
    }
    alert('Đổi mật khẩu thành công!');
    hidePasswordModal();
}

// Đăng xuất
function logout() {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        localStorage.removeItem('currentUser');
        updateUserUI();
        hideProfileModal();
    }
}

// Cập nhật UI khi đăng nhập
function updateUserUI() {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    const btn = document.getElementById('loginBtn');
    if (user) {
        btn.textContent = '👤 ' + user.name;
        btn.onclick = showProfileModal;
    } else {
        btn.textContent = 'Đăng nhập/Đăng ký';
        btn.onclick = showAuthModal;
    }
}
updateUserUI();
renderProducts();
updateCartCount();

// Đồng bộ giỏ hàng từ localStorage khi trang được load
function syncCartFromStorage() {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = storedCart;
    updateCartCount();
}
syncCartFromStorage();

// Khởi tạo dropdown thương hiệu
function initBrandSelect() {
    const brandSelect = document.getElementById('brandSelect');
    const brands = Array.from(new Set(products.map(p => p.brand)));
    const priorityBrands = ['Sony', 'Canon', 'Nikon', 'Fujifilm', 'Leica', 'Sigma', 'Tamron'];
    const otherBrands = brands.filter(brand => !priorityBrands.includes(brand));
    const sortedBrands = [...priorityBrands.filter(brand => brands.includes(brand)), ...otherBrands.sort()];
    sortedBrands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });
}
initBrandSelect();

// Xử lý gửi liên hệ
document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('contactSuccess').style.display = 'block';
    document.getElementById('contactForm').reset();
    setTimeout(()=>{
        document.getElementById('contactSuccess').style.display = 'none';
    }, 4000);
};