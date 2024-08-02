const backButton = document.querySelector(".backBtn");
const userName = document.querySelector(".name");
const email = document.querySelector(".id");
const password = document.querySelector(".password");
const registerForm = document.querySelector(".registerForm");
const url = `http://localhost:3000/register`;
// 뒤로가기 버튼을 누르면 메인 화면으로 이동
backButton.addEventListener("click", () => {
  window.location.href = "/";
});

// 회원 가입
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: userName.value,
    email: email.value,
    password: password.value,
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      alert("회원 가입에 성공했습니다. 로그인 페이지로 이동합니다.");
      // 로그인 페이지로 이동
      window.location.href = "/login";
    })
    .catch((err) => {
      alert("회원 가입에 실패했습니다.");
      console.log(err);
    });
});
