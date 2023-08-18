const usuario = JSON.parse(localStorage.getItem('usuario'));
const renderizarPerfiles = (usuario) => {
  document.getElementById('profiles').innerHTML = '';
  usuario.profiles.forEach(p => {
    document.getElementById('profiles').innerHTML += 
      `<div>
        <div style="padding: 20px" onclick="seleccionarPerfil('${p._id}')">
          <img src="images/icons/${p.image}" alt="user profile icon" class="user-icon">
        </div>
        <div>${p.name}</div>
      </div>`;
  });
}

const seleccionarPerfil = (idPerfil) => {
  localStorage.setItem('profileId', idPerfil);
  window.location.href = '/home.html';
}

if (usuario) {
  renderizarPerfiles(usuario)
} else {
  window.location.href = '/index.html';
}

