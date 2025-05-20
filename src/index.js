import { Button } from './Button';

// Export các components và utilities
export { Button };

// Export default object
export default {
  Button,
  
  /**
   * Tạo một button mới và khởi tạo nó
   * @param {Object} options - Các tùy chọn cấu hình
   * @returns {Button} - Instance của Button
   */
  createButton(options) {
    return new Button(options).init();
  }
};
