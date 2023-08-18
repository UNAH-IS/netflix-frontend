const login = async () => {
  const payload = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  }
  console.log("Login", payload);
  const result = await fetch('http://localhost:3001/users/login', {
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(payload),
    method: 'POST'
  });
  const response = await result.json();
  if (!response || !response.status) {
    alert("Usuario/Contraseña incorrecta");
  } else {
    localStorage.setItem("usuario", JSON.stringify(response.usuario));
    //Redireccionanr
    window.location.href = '/profile.html';
  }
  console.log(response);
};