
    let usuario = document.getElementById("inputUsuarioLogin");
    let senha = document.getElementById("inputUsuariSenha");
  function logar(){
    if (usuario.value == "admin" && senha.value == "admin") {
      window.location.href = "inicio.html";
    }else{
      alert("Usuario ou senha incorretos!");
    }
  }
  

  //menu iniciar

  var minhaDiv = document.getElementById("menuIniciar");

  function toggleDiv() {
    if (minhaDiv.style.display === "none") {
      minhaDiv.style.display = "flex";
    } else {
      minhaDiv.style.display = "none";
    }
  }

  //relogio
  setInterval(() =>{
  const horaAtual = new Date();

  var hora = horaAtual.getHours();
  var minuto = horaAtual.getMinutes();

  var horaformatada = hora + ":" + minuto;

  document.getElementById('relogio').innerHTML = horaformatada;
},1000)