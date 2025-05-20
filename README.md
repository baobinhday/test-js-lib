# Button Library

Một thư viện JavaScript đơn giản tạo ra một button, khi click vào button sẽ hiển thị nội dung được truyền vào từ bên ngoài.

## Cài đặt

### Sử dụng npm

```bash
npm install button-lib
```

### Sử dụng CDN

```html
<script src="path/to/button-lib.js"></script>
```

## Cách sử dụng

### Tạo một button cơ bản

```javascript
// Tạo button với nội dung cơ bản
const button = ButtonLib.createButton({
  buttonText: 'Click Me', // Tùy chọn, mặc định là 'Click Me'
  containerId: 'my-container' // Tùy chọn, mặc định là 'button-lib-container'
});

// Set nội dung
button.setContent(`
  <div>
    <h3>Hello from Button Library!</h3>
    <p>This is a simple demo of the button library.</p>
  </div>
`);
```

### Cập nhật nội dung động

```javascript
// Tạo button
const button = ButtonLib.createButton({
  buttonText: 'Toggle Content',
  containerId: 'my-container'
});

// Set nội dung ban đầu
button.setContent('<p>Initial content</p>');

// Cập nhật nội dung sau đó
document.getElementById('update-button').addEventListener('click', () => {
  const newContent = document.getElementById('content-input').value;
  button.setContent(newContent);
  
  // Hiển thị nội dung nếu đang ẩn
  if (!button.isContentVisible) {
    button.toggleContent();
  }
});
```

## API

### ButtonLib.createButton(options)

Tạo một button mới và khởi tạo nó.

**Tham số:**

- `options` (Object): Các tùy chọn cấu hình
  - `buttonText` (String): Văn bản hiển thị trên button (mặc định: 'Click Me')
  - `containerId` (String): ID của phần tử container (mặc định: 'button-lib-container')

**Trả về:** Instance của Button

### Button.setContent(content)

Đặt nội dung sẽ được hiển thị khi click vào button.

**Tham số:**

- `content` (String|HTMLElement): Nội dung để hiển thị

**Trả về:** Instance của Button (cho phép method chaining)

### Button.toggleContent()

Chuyển đổi hiển thị/ẩn nội dung.

**Trả về:** Instance của Button (cho phép method chaining)

## Ví dụ

Xem file `example-usage.html` để biết ví dụ đầy đủ về cách sử dụng thư viện.

## Phát triển

### Cài đặt dependencies

```bash
npm install
```

### Build thư viện

```bash
npm run build
```

### Chạy demo

```bash
npm run dev
```

## License

ISC
