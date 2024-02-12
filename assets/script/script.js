
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
    const data =   document.getElementById('relogio')
    const date = new Date();
  
    var formatter = Intl.DateTimeFormat("pt-BR", {
      hour: "numeric",
      minute: "numeric",
    });
  
  data.innerHTML = formatter.format(date);
},1000)

// Abrir navegador

function abrirNavegador(){
  window.open("https://br.bing.com", "Nova Janela", "width=800,height=600");
}
//Abrir Documentos
function abrirDocumentos(){
  window.open("./documentos.html", "Nova Janela", "width=800,height=600");
}

// Volume

function controleSom(){
  const volume = document.querySelector('.areaDeTrabalho__volume');
  if(volume.style.display === "none"){
    volume.style.display = 'flex';
  }else{
    volume.style.display = 'none';
  }
}

function rangeVolume(){
  let resultado = document.querySelector('.rangeValor');
  let volume = document.querySelector('.areaDeTrabalho__volume--controle');value;
  
  resultado.innerHTML = volume;
}

rangeVolume()
document.addEventListener("change", rangeVolume);