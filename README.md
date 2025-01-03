Proposal Dự án: Hệ Thống Bán Hàng Trực Tuyến EGA GEAR
1. Tên Dự án
Hệ Thống Bán Hàng Trực Tuyến EGA GEAR
2. Mô tả Dự án
EGA GEAR là một hệ thống bán hàng trực tuyến chuyên cung cấp các sản phẩm công nghệ như laptop, gaming gear, phụ kiện và thiết bị thông minh.

Hệ thống cung cấp các tính năng tìm kiếm, duyệt danh mục, quản lý giỏ hàng và thanh toán an toàn. Ngoài ra, nó còn tích hợp các khuyến mãi để tăng độ cạnh tranh.
3. Hướng Sử Dụng
Dự án nhạm tối đa trải nghiệm mua sắm của khách hàng bằng việc cung cấp một nền tảng thân thiện, nhanh chóng và an toàn. Hệ thống được thiết kế để phục vụ:
- Khách hàng cá nhân: Mua sắm sản phẩm công nghệ.
- Doanh nghiệp nhỏ: Tìm kiếm thiết bị cho văn phòng.
- Người đam mê công nghệ: Sở hữu các thiết bị chuyên dùng.
4. Chức Năng Cốt Lõi
4.1. Quản lý danh mục sản phẩm
- Hiển thị danh mục: Laptop, gaming gear, phụ kiện, điện thoại, thiết bị thông minh.
- Cho phép duyệt theo danh mục, thương hiệu, và tầm giá.

4.2. Tìm kiếm và lọc sản phẩm
- Tìm kiếm bằng từ khóa.
- Lọc theo giá, đánh giá, lượt xem, tên.

4.3. Quản lý giỏ hàng
- Thêm, xóa, và chỉnh sửa số lượng sản phẩm.
- Hiển thị tổng giá trị và áp dụng mã giảm giá. (có thể phát triển hoặc không).

4.4. Đăng ký và đăng nhập
- Tài khoản đăng nhập qua email hoặc tích hợp mạng xã hội (Google, Facebook).
- Đăng ký tài khoản ( cố gắng phát triển kết nối với MySQL để quản lý ).
4.5. Thanh toán
- Hỗ trợ thanh toán qua thẻ tín dụng, ví điện tử hoặc chuyển khoản.( Phát triển Frontend, có phát triển backend sẽ cập nhật lại code ở File Changelog).
- Thông báo trạng thái đơn hàng.

4.6. Khuyến mãi
- Hiển thị khuyến mãi, flash sale.
- Cho phép nhập và áp dụng mã giảm giá.( Frontend)

4.7. Hỗ trợ khách hang (Frontend)
- Cung cấp thông tin về chính sách bảo hành, đổi trả.
- Hỗ trợ trực tuyến qua hotline hoặc email.
5. Đối Tượng Người Dùng
- Khách hàng cá nhân: Muốn mua sắm thiết bị công nghệ.
- Doanh nghiệp nhỏ: Tìm mua các thiết bị văn phòng.
- Người đam mê công nghệ: Tìm sản phẩm chuyên biệt như laptop gaming hoặc gaming gear.
6. Yêu Cầu Kỹ Thuật
- Frontend: HTML, CSS, JavaScript.
- Backend: JavaScript.
- Cơ sở dữ liệu: MySQL.
7. Use Cases Cơ Bản(Cụ thể hơn sẽ mô tả trong SRS)
7.1. Use Case: Đăng nhập
- Actor: Khách hàng
- Mô tả: Cho phép người dùng đăng nhập tài khoản qua email hoặc Google/Facebook.
- Luồng chính:
   + Khách hàng nhập email và mật khẩu.
- Luồng phụ: Thông báo lỗi khi nhập sai tài khoản hoặc mật khẩu.
7.2. Use Case: Thêm sản phẩm vào giỏ hàng
- Actor: Khách hàng
- Mô tả: Cho phép khách hàng thêm sản phẩm mà họ muốn mua vào giỏ hàng.
- Luồng chính:
  1. Khách hàng chọn sản phẩm.
  2. Nhấn 'Thêm vào giỏ hàng'.
  3. Hệ thống cập nhật giỏ hàng
7.3. Use Case: Thanh toán(Frontend)
- Actor: Khách hàng
- Mô tả: Cho phép khách hàng thanh toán các sản phẩm trong giỏ hàng.
- Luồng chính:
  1. Khách hàng xem lại danh sách sản phẩm trong giỏ.
  2. Chọn phương thức thanh toán.
  3. Xác nhận giao dịch.
8. Tiến Trình Thực Hiện
1. Phát triển giao diện và tính năng frontend.
2. X.ây dựng backend xử lý dữ liệu và giao dịch.
3. Kiểm tra chức năng và tích hợp bảo mật.
4. Triển khai hệ thống trên môi trường thực.
