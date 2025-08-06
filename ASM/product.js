// Cùng mảng sản phẩm như index.html
const products = [
    { id: 1, title: 'Máy Ảnh Sony A7 IV', price: 38000000, brand: 'Sony', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Sony+A7+IV', stock: true, category: 'camera' },
    // ... các sản phẩm khác ...
    { id: 40, title: 'Máy in ảnh Polaroid Hi-Print', price: 1800000, brand: 'Polaroid', brandLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Sony_logo.png', img: 'https://via.placeholder.com/180x150?text=Polaroid+Hi-Print', stock: true, category: 'printer' },
];

// Lấy id sản phẩm từ URL
function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

// Render chi tiết sản phẩm
function renderProductDetail() {
    const id = getProductId();
    const product = products.find(p => p.id === id);
    const div = document.getElementById('productDetail');
    if (!product) {
        div.innerHTML = '<p>Không tìm thấy sản phẩm.</p>';
        return;
    }
    
    // Tạo status HTML dựa trên stock
    const statusHtml = product.stock 
        ? `<div class="product-status status-instock">
             <div class="status-icon"></div>
             <span>Còn hàng</span>
           </div>`
        : `<div class="product-status status-outstock">
             <div class="status-icon"></div>
             <span>Hết hàng</span>
           </div>`;
    
    div.innerHTML = `
        <div class="product-detail">
            <div class="product-img">
                <img src="${product.img}" alt="${product.title}">
            </div>
            <div class="product-info">
                <div class="product-title">
                    <!-- Đã loại bỏ logo thương hiệu -->
                    <span>${product.title}</span>
                </div>
                <div><b>Thương hiệu:</b> ${product.brand}</div>
                ${statusHtml}
                <div class="product-price">${product.price.toLocaleString()} đ</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})" ${!product.stock ? 'disabled' : ''}>${product.stock ? 'Thêm vào giỏ hàng' : 'Hết hàng'}</button>
                <div class="product-desc"><b>Mô tả:</b> Sản phẩm chất lượng cao, phù hợp cho mọi nhu cầu nhiếp ảnh. (Mô tả mẫu)</div>
            </div>
        </div>
    `;
}

// Thêm vào giỏ hàng (dùng localStorage để đồng bộ với index.html)
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    
    // Kiểm tra tình trạng hàng
    if (!product.stock) {
        alert('Sản phẩm hiện tại đã hết hàng!');
        return;
    }
    
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty++;
    } else {
        cart.push({ id: product.id, title: product.title, price: product.price, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm vào giỏ hàng!');
}

renderProductDetail();