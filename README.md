# Button Library

Một thư viện TypeScript đơn giản tạo ra một button, khi click vào button sẽ hiển thị nội dung được truyền vào từ bên ngoài.

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

```typescript
import ButtonLib, { ButtonOptions } from 'button-lib';

// Tạo button với nội dung cơ bản
const buttonOptions: ButtonOptions = {
  buttonText: 'Click Me', // Tùy chọn, mặc định là 'Click Me'
  containerId: 'my-container' // Tùy chọn, mặc định là 'button-lib-container'
};

const button = ButtonLib.createButton(buttonOptions);

// Set nội dung
button.setContent(`
  <div>
    <h3>Hello from Button Library!</h3>
    <p>This is a simple demo of the button library.</p>
  </div>
`);
```

### Cập nhật nội dung động

```typescript
import ButtonLib, { ButtonOptions } from 'button-lib';

// Tạo button
const buttonOptions: ButtonOptions = {
  buttonText: 'Toggle Content',
  containerId: 'my-container'
};

const button = ButtonLib.createButton(buttonOptions);

// Set nội dung ban đầu
button.setContent('<p>Initial content</p>');

// Cập nhật nội dung sau đó
const updateButton = document.getElementById('update-button');
const contentInput = document.getElementById('content-input') as HTMLInputElement;

if (updateButton && contentInput) {
  updateButton.addEventListener('click', () => {
    const newContent = contentInput.value;
    button.setContent(newContent);

    // Hiển thị nội dung nếu đang ẩn
    if (!button.isContentVisible) {
      button.toggleContent();
    }
  });
}
```

## API

### Types

```typescript
interface ButtonOptions {
  buttonText?: string;
  containerId?: string;
}

type ButtonContent = string | HTMLElement;
```

### ButtonLib.createButton(options)

Tạo một button mới và khởi tạo nó.

**Tham số:**

- `options` (ButtonOptions): Các tùy chọn cấu hình
  - `buttonText` (string): Văn bản hiển thị trên button (mặc định: 'Click Me')
  - `containerId` (string): ID của phần tử container (mặc định: 'button-lib-container')

**Trả về:** Instance của Button

### Button.setContent(content)

Đặt nội dung sẽ được hiển thị khi click vào button.

**Tham số:**

- `content` (ButtonContent): Nội dung để hiển thị (string hoặc HTMLElement)

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

### Type checking

```bash
npm run type-check
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
