// Import thư viện từ source code
import ButtonLib from '../src/index';

// Demo 1: Basic Usage
document.addEventListener('DOMContentLoaded', () => {
  // Tạo button với nội dung cơ bản
  const button1 = ButtonLib.createButton({
    buttonText: 'Click to Show Content',
    containerId: 'demo1-container'
  });
  
  // Set nội dung cố định
  button1.setContent(`
    <div>
      <h3>Hello from Button Library!</h3>
      <p>This is a simple demo of the button library.</p>
      <p>Click the button again to hide this content.</p>
    </div>
  `);
  
  // Demo 2: Custom Content
  const button2 = ButtonLib.createButton({
    buttonText: 'Toggle Custom Content',
    containerId: 'demo2-container'
  });
  
  // Set nội dung ban đầu
  const textarea = document.getElementById('custom-content');
  button2.setContent(textarea.value);
  
  // Cập nhật nội dung khi người dùng nhấn nút Update
  document.getElementById('update-content').addEventListener('click', () => {
    button2.setContent(textarea.value);
    
    // Hiển thị nội dung nếu đang ẩn
    if (!button2.isContentVisible) {
      button2.toggleContent();
    }
  });
});
