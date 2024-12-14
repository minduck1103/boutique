Khởi chạy dự án:
Bước 1: Cài đặt môi trường
- Tải và cài đặt MongoDB và Monggo compass
- Sử dụng node v16
Bước 2: kết nối database localhost của mongodb
mongodb://localhost:27017
- Khởi tạo Database với tên là Boutique và Collection là users, tiếp đó khởi tạo thêm collection product và sau đó import data (file json ở thư mục root)
- khởi tạo tiếp collection carts, comment, histories, messenger và để rỗng
Bước 3: Khởi chạy dự án
- Lần lượt vào các thư mục client, sever, admin chạy câu lệnh npm install,
- Với thư mục sever chạy tiếp câu lệnh node index và chạy câu lệnh npm start với thư mục client và admin.

Link deploy dự án lên vercel:
https://docs.google.com/document/d/1eF9JrwO54HgADUd6np56haREpk3w5pSrrvV-CFkT8EU/edit?usp=sharing