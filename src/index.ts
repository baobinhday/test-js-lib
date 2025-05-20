import { Button } from './Button';
import { ButtonOptions, ButtonLibrary } from './types';

// Export các components và utilities
export { Button };
export type { ButtonOptions, ButtonLibrary };

// Export default object
const ButtonLib: ButtonLibrary = {
  Button,
  
  /**
   * Tạo một button mới và khởi tạo nó
   * @param options - Các tùy chọn cấu hình
   * @returns Instance của Button
   */
  createButton(options?: ButtonOptions): Button {
    return new Button(options).init();
  }
};

export default ButtonLib;

// Ensure global exposure for UMD/browser users
// if (typeof window !== "undefined") {
//   (window as any).ButtonLib = ButtonLib;
// }
