document.getElementById('exibir').addEventListener('change',
    function exibirSenha(){
        let senha = document.getElementById('password');

        if(this.checked)
            {
                senha.type = 'text'
            }
            else
            {
                senha.type = 'password'
            }
    })