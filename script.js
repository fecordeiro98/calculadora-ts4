fetch('dados.json')
    .then(response => response.json())
    .then(dados => {
        const carreiras = dados.carreiras;
        const ramos = dados.ramos;
        const cargos = dados.cargos;

        function selecao(id, opcoes) {
            const select = document.getElementById(id);
            select.innerHTML = '';
            opcoes.forEach(opcao => {
                select.add(new Option(opcao));
            });
        }

        document.getElementById('carreira').addEventListener('change', function() {
            const valorSelecionado1 = this.value;
            selecao('ramo', carreiras[valorSelecionado1]);
            document.getElementById('cargo').innerHTML = '';
        });

        document.getElementById('ramo').addEventListener('change', function() {
            const valorSelecionado2 = this.value;
            selecao('cargo', ramos[valorSelecionado2]);
        });

        document.getElementById('cargo').addEventListener('change', function() {
            const selecaoCargo = this.value;
            const cargoSelecionado = cargos[selecaoCargo];

            if (cargoSelecionado) {
                document.getElementById('ch').value = cargoSelecionado.ch;
                document.getElementById('valor-hor').value = cargoSelecionado.valor;
                document.getElementById('dias').value = cargoSelecionado.dias;
            }
        });

        function calcular() {
            const cargaHoraria = parseFloat(document.getElementById('ch').value);
            const valorHora = parseFloat(document.getElementById('valor-hor').value);
            const diasSemana = parseFloat(document.getElementById('dias').value);

            const valorDia = cargaHoraria * valorHora;
            const valorSemana = diasSemana * valorDia;
            const gastosFixos = parseFloat(document.getElementById('gastos').value);
            const lucro = valorSemana - gastosFixos;

            document.getElementById('valor-dia').value = valorDia;
            document.getElementById('valor-sem').value = valorSemana;
            document.getElementById('lucro').value = lucro;
        }

        document.getElementById('calcular').addEventListener('click', calcular);

        selecao('carreira', Object.keys(carreiras));
    });