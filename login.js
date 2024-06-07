// Função para lidar com o cadastro de novos usuários
function handleCadastro(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const cpf = document.getElementById('cpf').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    const user = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
}

// Função para validar o login do usuário
function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && username === storedUser.email && password === storedUser.senha) {
        window.location.href = encodeURIComponent('index.html');
    } else {
        alert('Login incorreto. Por favor, tente novamente.');
    }
}
