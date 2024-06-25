const form = document.getElementById('agendamento');
const formulario = document.forms['agendamento'];
const forms = document.forms.agendamento;

console.log(form, formulario, forms)
// Adiciona um evento ao campo de CEP para buscar o endereço ao perder o foco (blur)
formulario.addEventListener('blur', function() {
    const cep = this.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico

    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('logradouro').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('cidade').value = data.localidade;
                    document.getElementById('estado').value = data.uf;
                } else {
                    alert('CEP não encontrado.');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar o CEP:', error);
                alert('Erro ao buscar o CEP.');
            });
    } else {
        alert('CEP inválido.');
    }
});