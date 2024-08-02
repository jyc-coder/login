const id = document.querySelector(".id");
const password = document.querySelector(".password");
const loginForm = document.querySelector(".loginForm");
const url = `http://localhost:3000/login`;
// 로그인
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    email: id.value,
    password: password.value,
  };

  try {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      // credentials: "include",
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status !== 200) {
        alert("로그인에 실패하였습니다.");
        return;
      }
      alert("로그인에 성공하였습니다. 메인 페이지로 이동합니다.");
      window.location.href = "/";
    });
  } catch (err) {
    console.error(err);
  }
});
