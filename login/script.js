console.log('TEXT');
const API_URL =
  'https://script.google.com/macros/s/AKfycbzv6DuxOE5-UZQQNFOtmoknErnmJBqqHLl3fhH_x9x6sOAphju6OUnmczYPy0iElxIwXw/exec'; // Dán URL Apps Script vào đây

window.login = async function () {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');
  if (!username || !password) {
    message.textContent = 'Vui lòng nhập đầy đủ thông tin.';
    return;
  }

  message.textContent = 'Đang kiểm tra...';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (result.success) {
      // lưu tên đầy đủ lại
      localStorage.setItem('fullname', result.fullname);

      message.textContent = 'Đăng nhập thành công ✔';

      document.getElementById('modal').setAttribute('aria-hidden','false');
    } else {
      message.textContent = 'Sai tài khoản hoặc mật khẩu ❌';
    }
  } catch (error) {
    message.textContent = 'Lỗi kết nối!';
  }
};
