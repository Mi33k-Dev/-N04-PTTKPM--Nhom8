document.addEventListener('DOMContentLoaded', function() {
    // Load cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Display cart items
    displayCartItems(cart);
    
    // Calculate and display totals
    updateTotals(cart);
    
    // Form submission
    document.getElementById('shipping-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Save shipping info and proceed to payment
        saveShippingInfo();
        window.location.href = 'payment.html';
    });
});

function displayCartItems(cart) {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>${item.price.toLocaleString('vi-VN')}₫</p>
                <p>Số lượng: ${item.quantity}</p>
            </div>
        </div>
    `).join('');
}

function updateTotals(cart) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 30000; // Fixed shipping fee
    const total = subtotal + shipping;

    document.querySelector('.subtotal .amount').textContent = 
        subtotal.toLocaleString('vi-VN') + '₫';
    document.querySelector('.shipping .amount').textContent = 
        shipping.toLocaleString('vi-VN') + '₫';
    document.querySelector('.total .amount').textContent = 
        total.toLocaleString('vi-VN') + '₫';
}

function saveShippingInfo() {
    const shippingInfo = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        province: document.getElementById('province').value,
        district: document.getElementById('district').value,
        address: document.getElementById('address').value
    };
    localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo));
}
const provinces = [
    {
        id: "HN",
        name: "Hà Nội",
        districts: ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng", "Đống Đa", "Tây Hồ", "Cầu Giấy", "Thanh Xuân", "Hoàng Mai"]
    },
    {
        id: "HCM",
        name: "Hồ Chí Minh",
        districts: ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 9", "Quận 10"]
    },
    {
        id: "DN",
        name: "Đà Nẵng",
        districts: ["Hải Châu", "Thanh Khê", "Sơn Trà", "Ngũ Hành Sơn", "Liên Chiểu", "Cẩm Lệ"]
    },
    {
        id: "HP",
        name: "Hải Phòng",
        districts: ["Hồng Bàng", "Ngô Quyền", "Lê Chân", "Hải An", "Kiến An", "Đồ Sơn"]
    }
];
document.addEventListener('DOMContentLoaded', function() {
    const provinceSelect = document.getElementById('province');
    const districtSelect = document.getElementById('district');

    // Populate provinces
    provinces.forEach(province => {
        const option = document.createElement('option');
        option.value = province.id;
        option.textContent = province.name;
        provinceSelect.appendChild(option);
    });

    // Handle province change
    provinceSelect.addEventListener('change', function() {
        const selectedProvince = provinces.find(p => p.id === this.value);
        
        // Reset district dropdown
        districtSelect.innerHTML = '<option value="">Chọn quận/huyện</option>';
        
        if (selectedProvince) {
            selectedProvince.districts.forEach(district => {
                const option = document.createElement('option');
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
            districtSelect.disabled = false;
        } else {
            districtSelect.disabled = true;
        }
    });
});