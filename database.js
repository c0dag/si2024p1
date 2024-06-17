const firebaseConfig = {
  apiKey: "AIzaSyBe966rj1P9avncDdCsJxHahoRg7R6BP1E",
  authDomain: "formulariopi-f65aa.firebaseapp.com",
  databaseURL: "https://formulariopi-f65aa-default-rtdb.firebaseio.com",
  projectId: "formulariopi-f65aa",
  storageBucket: "formulariopi-f65aa.appspot.com",
  messagingSenderId: "507286683563",
  appId: "1:507286683563:web:335ed5b586075349395cee"
};

firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref('formularioContato');

document.getElementById('formularioContato').addEventListener('submit', enviarForm);

function enviarForm(e){
  e.preventDefault();

  var nome = getElementVal('nome');
  var email = getElementVal('email');
  var telefone = getElementVal('telefone');
  var mensagem = getElementVal('mensagem')

  enviarDB(nome, email, telefone, mensagem);
  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById('formularioContato').reset();
  console.log(nome, email, telefone, mensagem);
}

function enviarDB(nome, email, telefone, mensagem){
  var novoFormularioContato = contactFormDB.push();
  novoFormularioContato.set({
    nome: nome,
    email: email,
    telefone: telefone,
    mensagem: mensagem
  });
}

function getElementVal(id){
  return document.getElementById(id).value;
}
