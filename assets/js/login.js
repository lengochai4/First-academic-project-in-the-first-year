document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const postSection = document.getElementById("postSection");
  const loginContainer = document.querySelector(".login-container");
  const postForm = document.getElementById("postForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username && password) {
        alert("Đăng nhập thành công! Chào mừng " + username + ".");
        if (loginContainer) {
          loginContainer.style.display = "none";
        }
        if (postSection) {
          postSection.style.display = "flex";
        }
      } else {
        alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.");
      }
    });
  }

  if (postForm) {
    postForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const title = document.getElementById("title").value.trim();
      const content = document.getElementById("content").value.trim();

      if (title && content) {
        alert("Đăng bài viết '" + title + "' thành công!");
        postForm.reset();
      } else {
        alert("Vui lòng nhập đầy đủ tiêu đề và nội dung bài viết.");
      }
    });
  }
});
