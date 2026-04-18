# My Portfolio — Vite + Tailwind

Dự án này là bản refactor từ một `index.html` đơn để tách CSS và JS ra, dùng Vite làm build tool và Tailwind CSS để phát triển.

## Cài đặt (local)

1. Cài Node.js (>=18 recommended)
2. Chạy:

```bash
cd /home/lampt/Downloads/my_portfolio
npm install
```

## Chạy dev server

```bash
npm run dev
```

Mở `http://localhost:5173` (Vite sẽ in URL).

## Build để production

```bash
npm run build
```

Thư mục kết quả nằm trong `dist/`.

## Deploy lên GitHub Pages (quick)

1. Tạo repository trên GitHub và push mã nguồn lên (ví dụ repo `my_portfolio`).
2. Nếu bạn deploy vào `https://<user>.github.io/<repo>/`, hãy mở `vite.config.js` và set `base: '/<repo>/'`.
3. Cài `gh-pages` (đã thêm vào `devDependencies`). Sau khi push, chạy:

```bash
npm run build
npm run deploy
```

Lệnh `deploy` dùng `gh-pages` để publish thư mục `dist/` lên nhánh `gh-pages`.
