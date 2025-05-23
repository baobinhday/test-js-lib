// Import thư viện từ source code
import ButtonLib2, { ButtonOptions } from "../src/index";

// Demo code
document.addEventListener("DOMContentLoaded", () => {
  // if (typeof ButtonLib !== "undefined") {
  //   // Tạo button với nội dung cơ bản
  //   const button1Options = {
  //     buttonText: "Click to Show Content",
  //     containerId: "demo1-container",
  //   };

  //   const button1 = ButtonLib.createButton(button1Options);

  //   // Set nội dung cố định
  //   button1.setContent(`
  //         <div>
  //           <h3>Hello from Button Library!</h3>
  //           <p>This is a simple demo of the button library.</p>
  //           <p>Click the button again to hide this content.</p>
  //         </div>
  //       `);
  // } else {
  //   console.error("ButtonLib is not loaded properly");
  //   // document.getElementById("demo1-container").innerHTML =
  //   //   '<div style="color: red;">Error: ButtonLib library not loaded properly</div>';
  // }

  // Demo 2: Custom Content
  const button2Options: ButtonOptions = {
    buttonText: "Toggle Custom Content",
    containerId: "demo2-container",
  };

  const button2 = ButtonLib2.createButton(button2Options);

  // Set nội dung ban đầu
  const textarea = document.getElementById(
    "custom-content"
  ) as HTMLTextAreaElement;
  if (textarea) {
    button2.setContent(textarea.value);

    // Cập nhật nội dung khi người dùng nhấn nút Update
    const updateButton = document.getElementById("update-content");
    if (updateButton) {
      updateButton.addEventListener("click", () => {
        button2.setContent(textarea.value);

        // Hiển thị nội dung nếu đang ẩn
        if (!button2.isContentVisible) {
          button2.toggleContent();
        }
      });
    }
  }
// Demo 3: Button with onClick callback
const button3Options: ButtonOptions = {
  buttonText: "Button With Callback",
  containerId: "demo3-container",
  onClick: () => {
    console.log("Button with callback was clicked!");
    // You can perform any custom logic here
  }
};
const button3 = ButtonLib2.createButton(button3Options);
// Optionally set content for demonstration
button3.setContent("<p>This button calls a custom callback before toggling content.</p>");
});
