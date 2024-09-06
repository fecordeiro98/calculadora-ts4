document.getElementById('carreira').addEventListener('change', function() {
    var valorSelecionado1 = this.value;
    var selecao2 = document.getElementById('ramo');
    // Limpa conteúdo anterior:
    selecao2.innerHTML = '';
    document.getElementById('cargo').innerHTML = '';
    // Mapeamento das carreiras:
    var carreiras = {
        'selecione': ['Selecione'],
        'agente': ['Selecione', 'Agente iniciante', 'Agente diamante', 'Vilão'],
        'astronauta': ['Selecione', 'Técnico espacial', 'Patrulheiro espacial', 'Contrabandista espacial'],
        'atleta': ['Selecione', 'Atleta amador', 'Atleta profissional', 'Fisiculturista'],
        'criminoso': ['Selecione', 'Bandindinho', 'Chefe', 'Oráculo'],
        'culinaria': ['Selecione', 'Ratatouille', 'Chef', 'Mixólogo'],
        'entretenimento': ['Selecione', 'Tiozão do pavê', 'Comediante', 'Musicista'],
        'escritor': ['Selecione', 'Tolkien Jr.', 'Autor', 'Jornalista'],
        'guru': ['Selecione', 'Sobrinho entendido', 'Esportista eletrônico', 'Empresário de startup'],
        'influenciador': ['Selecione', 'Blogueirinho', 'Criador de tendências', 'Estilista'],
        'negocios': ['Selecione', 'Feirante', 'Gerência', 'Investidor'],
        'pintor': ['Selecione', 'Desenhista de geladeira', 'Mestre do realismo', 'Patrono das artes']
    };
    // Adiciona os ramos baseado na carreira selecionada:
    carreiras[valorSelecionado1].forEach(function(ramo) {
        selecao2.add(new Option(ramo));
    });
});

document.getElementById('ramo').addEventListener('change', function() {
    var valorSelecionado2 = this.value;
    var selecao3 = document.getElementById('cargo');
    // Limpa conteúdo anterior:
    selecao3.innerHTML = '';
    // Mapeamento dos cargos:
    var ramos = {
        'Selecione': ['Selecione'],
        'Agente iniciante': ['Selecione', 'Assistente de agência', 'Pesquisador de inteligência', 'Controlador de agentes', 'Agente de campo', 'Detetive-chefe', 'Agente do governo', 'Agente secreto'],
        'Agente diamante': ['Selecione', 'Capitão de espiões', 'Agente das sombras', 'Agente diamante duplo'],
        'Vilão': ['Selecione', 'Agente duplo', '[Censurado]', 'Vilão supremo', 'Agente triplo'],
        'Técnico espacial': ['Selecione', 'Estagiário', 'Limpador de módulo', 'Técnico', 'Chefe do centro de comando', 'Especialista em órbitas baixas', 'Cadete espacial', 'Astronauta'],
        'Patrulheiro espacial': ['Selecione', 'Patrulha planetária', 'Xerife das estrelas', 'Patrulheiro espacial'],
        'Contrabandista espacial': ['Selecione', 'Mercenário lunar', 'Comerciante de bens alienígenas', 'Contrabandista espacial'],
        'Atleta amador': ['Selecione', 'Encarregado da água', 'Atendente de vestiário', 'Mascote do time', 'Capitão dos líderes de torcida'],
        'Atleta profissional': ['Selecione', 'Jogador de segunda divisão', 'Novato', 'Titular', 'Astro esportivo', 'Jogador mais valioso', 'Integrante do hall da fama'],
        'Fisiculturista': ['Selecione', 'Personal trainer', 'Fisiculturista profissional', 'Fisiculturista campeão', 'Treinador das estrelas', 'Fisiculturista célebre', 'Sr. Sistema Solar'],
        'Bandindinho': ['Selecione', 'Durão', 'Ladrãozinho barato', 'Chefe de gangue', 'Chefe de delitos graves', 'Pequeno lorde do crime'],
        'Chefe': ['Selecione', 'Brutamontes', 'Motorista de fuga', 'Arrombador de cofres', 'Cérebro', 'Chefe'],
        'Oráculo': ['Selecione', 'Ladrão digital', 'Hacker de elite', 'Fantasma an0nimo', 'Demônio da rede', 'O oráculo'],
        'Ratatouille': ['Selecione', 'Assistente de lavagem de louça', 'Chefe de lavagem de louça', 'Provedor', 'Mixólogo', 'Cozinheiro'],
        'Chef': ['Selecione', 'Chef de buffet', 'Chef doceiro', 'Sous chef', 'Chef executivo', 'Celebridade gastronômica'],
        'Mixólogo': ['Selecione', 'Mixólogo chefe', 'Chefe dos sucos', 'Diretor de operações líquidas', 'Mestre de bebidas', 'Mixólogo célebre'],
        'Tiozão do pavê': ['Selecione', 'Comediante amador', 'Caçador de shows', 'Famoso quem', 'Artista de abertura'],
        'Comediante': ['Selecione', 'Piadista', 'Contador de histórias', 'Comediante em ascensão', 'Mestre da "fritada"', 'Estrela do standup', 'Ovacionado'],
        'Musicista': ['Selecione', 'Criador de jingles', 'Musicista sábio', 'Pianista profissional', 'Instrumentista de sinfonia', 'Instrumentista maravilhoso', 'Virtuoso dos concertos'],
        'Tolkien Jr.': ['Selecione', 'Assistente de autor', 'Blogueiro', 'Autor freelancer', 'Colunista de conselhos', 'Colaborador frequente'],
        'Autor': ['Selecione', 'Autor de contos', 'Romancista', 'Favorito dos fãs', 'Autor de best-seller', 'Criador de mundos'],
        'Jornalista': ['Selecione', 'Jornalista de segunda página', 'Redator de primeira página', 'Jornalista investigativo', 'Editor-chefe', 'Escriba da história'],
        'Sobrinho entendido': ['Selecione', 'Atendente de suporte por bate-papo', 'Técnico de controle de qualidade', 'Programador', 'Engenheiro de programação', 'Gerente de projeto', 'Chefe de desenvolvimento'],
        'Esportista eletrônico': ['Selecione', 'Esportista eletrônico', 'Jogador profissional', 'Rei do APM', 'Jogador campeão'],
        'Empresário de startup': ['Selecione', 'A grande novidade?', 'Consultor independente', 'Pioneiro-ponto-com', 'Gênio da startup'],
        'Blogueirinho': ['Selecione', 'Crítico de tabloide', 'Comentador de consignação', 'Comentarista de vestimentas', 'Analista de trajes', 'Colunista cultural'],
        'Criador de tendências': ['Selecione', 'Guru da sofisticação', 'Figura da moda', 'Rei da moda', 'AQUELE sim', 'Ícone da classe'],
        'Estilista': ['Selecione', 'Modista mundial', 'Filósofo dos tecidos', 'Guardião do guarda-roupa', 'Milagreiro da transformação', 'Recriador de personalidades'],
        'Feirante': ['Selecione', 'Gerente de expedição', 'Assistente de escritório', 'Assistente de gerência', 'Gerente-assistente', 'Gerente regional', 'Gerente sênior'],
        'Gerência': ['Selecione', 'Vice-presidente', 'Presidente', 'CEO', 'Magnata dos negócios'],
        'Investidor': ['Selecione', 'Investidor de futuros', 'Gerente de fundo de investimentos', 'Especulador corporativo', 'Investidor anjo'],
        'Desenhista de geladeira': ['Selecione', 'Esticador de paletas', 'Classificador de livros de arte', 'Artista faminto', 'Amador da aquarela', 'Criador de telas', 'Imagista imaginativo'],
        'Mestre do realismo': ['Selecione', 'Artista residente', 'Pintor profissional', 'Ilustrador chefe', 'Mestre do realismo'],
        'Patrono das artes': ['Selecione', 'Crítico da teoria das cores', 'Aficionado por Belas Artes', 'Curador de coleção', 'Patrono das artes']
    };
    // Adiciona os cargos baseado no ramo selecionado:
    ramos[valorSelecionado2].forEach(function(cargo) {
        selecao3.add(new Option(cargo));
    });
});


// Mapeamento dos cargos com suas cargas horárias, valores e dias:
var cargos = {
    'Selecione': {ch: '0', valor: '0', dias: '0'},
    '[Censurado]': {ch: '7', valor: '278', dias: '4'},
    'A grande novidade?': {ch: '7', valor: '98', dias: '4'},
    'Aficionado por Belas Artes': {ch: '5', valor: '70', dias: '5'},
    'Agente das sombras': {ch: '9', valor: '208', dias: '4'},
    'Agente de campo': {ch: '8', valor: '37', dias: '4'},
    'Agente diamante duplo': {ch: '14', valor: '284', dias: '3'},
    'Agente do governo': {ch: '9', valor: '52', dias: '4'},
    'Agente duplo': {ch: '8', valor: '191', dias: '3'},
    'Agente secreto': {ch: '8', valor: '87', dias: '3'},
    'Agente triplo': {ch: '5', valor: '515', dias: '5'},
    'Amador da aquarela': {ch: '8', valor: '29', dias: '5'},
    'Analista de trajes': {ch: '8', valor: '44', dias: '5'},
    'AQUELE sim': {ch: '7', valor: '365', dias: '5'},
    'Arrombador de cofres': {ch: '7', valor: '319', dias: '3'},
    'Artista de abertura': {ch: '5', valor: '54', dias: '5'},
    'Artista faminto': {ch: '8', valor: '26', dias: '5'},
    'Artista residente': {ch: '9', valor: '65', dias: '4'},
    'Assistente da gerência': {ch: '8', valor: '23', dias: '5'},
    'Assistente de agência': {ch: '8', valor: '17', dias: '5'},
    'Assistente de autor': {ch: '8', valor: '25', dias: '4'},
    'Assistente de escritório': {ch: '8', valor: '20', dias: '5'},
    'Assistente de lavagem de louça': {ch: '9', valor: '15', dias: '5'},
    'Astro esportivo': {ch: '7', valor: '130', dias: '5'},
    'Astronauta': {ch: '10', valor: '119', dias: '3'},
    'Atendente de suporte por bate-papo': {ch: '8', valor: '31', dias: '5'},
    'Atendente de vestiário': {ch: '7', valor: '19', dias: '5'},
    'Autor de best-seller': {ch: '5', valor: '296', dias: '3'},
    'Autor de contos': {ch: '8', valor: '60', dias: '5'},
    'Autor freelancer': {ch: '8', valor: '38', dias: '4'},
    'Blogueiro': {ch: '8', valor: '32', dias: '4'},
    'Brutamontes': {ch: '6', valor: '106', dias: '3'},
    'Caçador de shows': {ch: '6', valor: '36', dias: '5'},
    'Cadete espacial': {ch: '10', valor: '104', dias: '3'},
    'Capitão de espiões': {ch: '8', valor: '173', dias: '3'},
    'Capitão dos líderes de torcida': {ch: '7', valor: '39', dias: '5'},
    'Celebridade gastronômica': {ch: '6', valor: '410', dias: '4'},
    'CEO': {ch: '8', valor: '201', dias: '5'},
    'Cérebro': {ch: '7', valor: '383', dias: '3'},
    'Chef de buffet': {ch: '9', valor: '52', dias: '4'},
    'Chef doceiro': {ch: '5', valor: '104', dias: '5'},
    'Chef executivo': {ch: '6', valor: '253', dias: '4'},
    'Chefe': {ch: '7', valor: '445', dias: '4'},
    'Chefe de delitos graves': {ch: '7', valor: '23', dias: '5'},
    'Chefe de desenvolvimento': {ch: '8', valor: '78', dias: '5'},
    'Chefe de gangue': {ch: '8', valor: '17', dias: '5'},
    'Chefe de lavagem de louça': {ch: '9', valor: '16', dias: '5'},
    'Chefe do centro de comando': {ch: '8', valor: '71', dias: '4'},
    'Chefe dos sucos': {ch: '7', valor: '64', dias: '5'},
    'Classificador de livros de arte': {ch: '8', valor: '23', dias: '5'},
    'Colaborador frequente': {ch: '8', valor: '50', dias: '4'},
    'Colunista cultural': {ch: '8', valor: '70', dias: '5'},
    'Colunista de conselhos': {ch: '8', valor: '44', dias: '4'},
    'Comediante amador': {ch: '8', valor: '23', dias: '5'},
    'Comediante em ascensão': {ch: '7', valor: '172', dias: '3'},
    'Comentador de consignação': {ch: '8', valor: '28', dias: '5'},
    'Comentarista de vestimentas': {ch: '8', valor: '35', dias: '5'},
    'Comerciante de bens alienígenas': {ch: '7', valor: '299', dias: '4'},
    'Consultor independente': {ch: '6', valor: '185', dias: '4'},
    'Contador de histórias': {ch: '7', valor: '115', dias: '3'},
    'Contrabandista espacial': {ch: '9', valor: '413', dias: '4'},
    'Controlador de agentes': {ch: '8', valor: '21', dias: '5'},
    'Cozinheiro': {ch: '8', valor: '43', dias: '4'},
    'Criador de jingles': {ch: '6', valor: '67', dias: '4'},
    'Criador de mundos': {ch: '6', valor: '465', dias: '2'},
    'Criador de telas': {ch: '8', valor: '35', dias: '5'},
    'Crítico da teoria das cores': {ch: '6', valor: '70', dias: '5'},
    'Crítico de tabloide': {ch: '8', valor: '18', dias: '5'},
    'Curador de coleção': {ch: '6', valor: '227', dias: '3'},
    'Demônio da rede': {ch: '7', valor: '234', dias: '4'},
    'Detetive-chefe': {ch: '9', valor: '47', dias: '4'},
    'Diretor de operações líquidas': {ch: '8', valor: '111', dias: '4'},
    'Durão': {ch: '7', valor: '9', dias: '7'},
    'Editor-chefe': {ch: '7', valor: '189', dias: '4'},
    'Encarregado da água': {ch: '7', valor: '16', dias: '5'},
    'Engenheiro de programação': {ch: '8', valor: '63', dias: '5'},
    'Escriba da história': {ch: '6', valor: '287', dias: '4'},
    'Especialista em órbitas baixas': {ch: '9', valor: '96', dias: '3'},
    'Especulador corporativo': {ch: '8', valor: '218', dias: '5'},
    'Esportista eletrônico': {ch: '9', valor: '121', dias: '4'},
    'Estagiário': {ch: '9', valor: '26', dias: '5'},
    'Esticador de paletas': {ch: '8', valor: '21', dias: '5'},
    'Estrela do standup': {ch: '7', valor: '310', dias: '3'},
    'Famoso quem': {ch: '6', valor: '40', dias: '5'},
    'Fantasma an0nimo': {ch: '9', valor: '130', dias: '4'},
    'Favorito dos fãs': {ch: '5', valor: '202', dias: '4'},
    'Figura da moda': {ch: '7', valor: '205', dias: '5'},
    'Filósofo dos tecidos': {ch: '7', valor: '220', dias: '5'},
    'Fisiculturista campeão': {ch: '7', valor: '85', dias: '5'},
    'Fisiculturista célebre': {ch: '6', valor: '279', dias: '4'},
    'Fisiculturista profissional': {ch: '7', valor: '57', dias: '5'},
    'Gênio da startup': {ch: '5', valor: '516', dias: '3'},
    'Gerente-assistente': {ch: '8', valor: '35', dias: '5'},
    'Gerente de expedição': {ch: '8', valor: '16', dias: '5'},
    'Gerente de fundo de investimentos': {ch: '8', valor: '145', dias: '5'},
    'Gerente de projeto': {ch: '8', valor: '73', dias: '5'},
    'Gerente regional': {ch: '8', valor: '53', dias: '5'},
    'Gerente sênior': {ch: '8', valor: '75', dias: '5'},
    'Guardião do guarda-roupa': {ch: '7', valor: '310', dias: '5'},
    'Guru da sofisticação': {ch: '7', valor: '85', dias: '5'},
    'Hacker de elite': {ch: '8', valor: '73', dias: '5'},
    'Ícone da classe': {ch: '6', valor: '410', dias: '5'},
    'Ilustrador chefe': {ch: '5', valor: '280', dias: '3'},
    'Imagista imaginativo': {ch: '7', valor: '44', dias: '5'},
    'Instrumentista de sinfonia': {ch: '7', valor: '130', dias: '5'},
    'Instrumentista maravilhoso': {ch: '7', valor: '208', dias: '5'},
    'Integrante do hall da fama': {ch: '6', valor: '333', dias: '5'},
    'Investidor anjo': {ch: '8', valor: '406', dias: '5'},
    'Investidor de futuros': {ch: '8', valor: '112', dias: '5'},
    'Jogador campeão': {ch: '6', valor: '328', dias: '4'},
    'Jogador de segunda divisão': {ch: '7', valor: '51', dias: '5'},
    'Jogador mais valioso': {ch: '6', valor: '242', dias: '5'},
    'Jogador profissional': {ch: '7', valor: '194', dias: '4'},
    'Jornalista de segunda página': {ch: '8', valor: '56', dias: '5'},
    'Jornalista investigativo': {ch: '7', valor: '145', dias: '4'},
    'Ladrão digital': {ch: '8', valor: '43', dias: '5'},
    'Ladrãozinho barato': {ch: '7', valor: '13', dias: '6'},
    'Limpador de módulo': {ch: '9', valor: '34', dias: '5'},
    'Magnata dos negócios': {ch: '8', valor: '375', dias: '4'},
    'Mascote do time': {ch: '7', valor: '28', dias: '5'},
    'Mercenário lunar': {ch: '8', valor: '201', dias: '4'},
    'Mestre da "fritada"': {ch: '7', valor: '258', dias: '3'},
    'Mestre de bebidas': {ch: '10', valor: '166', dias: '3'},
    'Mestre do realismo': {ch: '5', valor: '492', dias: '2'},
    'Milagreiro da transformação': {ch: '6', valor: '380', dias: '5'},
    'Mixólogo': {ch: '8', valor: '35', dias: '4'},
    'Mixólogo célebre': {ch: '10', valor: '197', dias: '3'},
    'Mixólogo chefe': {ch: '7', valor: '45', dias: '5'},
    'Modista mundial': {ch: '7', valor: '100', dias: '5'},
    'Motorista de fuga': {ch: '7', valor: '273', dias: '2'},
    'Musicista sábio': {ch: '6', valor: '78', dias: '5'},
    'Novato': {ch: '7', valor: '66', dias: '5'},
    'O oráculo': {ch: '7', valor: '316', dias: '4'},
    'Ovacionado': {ch: '6', valor: '474', dias: '3'},
    'Patrono das artes': {ch: '5', valor: '328', dias: '4'},
    'Patrulha planetária': {ch: '8', valor: '179', dias: '4'},
    'Patrulheiro espacial': {ch: '7', valor: '422', dias: '4'},
    'Pequeno lorde do crime': {ch: '6', valor: '32', dias: '5'},
    'Personal trainer': {ch: '7', valor: '47', dias: '5'},
    'Pesquisador de inteligência': {ch: '8', valor: '19', dias: '5'},
    'Piadista': {ch: '6', valor: '67', dias: '4'},
    'Pianista profissional': {ch: '7', valor: '87', dias: '5'},
    'Pintor profissional': {ch: '5', valor: '140', dias: '4'},
    'Pioneiro-ponto-com': {ch: '6', valor: '371', dias: '3'},
    'Presidente': {ch: '8', valor: '134', dias: '5'},
    'Programador': {ch: '9', valor: '47', dias: '5'},
    'Provedor': {ch: '8', valor: '26', dias: '5'},
    'Recriador de personalidades': {ch: '6', valor: '455', dias: '5'},
    'Redator de primeira página': {ch: '7', valor: '83', dias: '5'},
    'Rei da moda': {ch: '7', valor: '290', dias: '5'},
    'Rei do APM': {ch: '6', valor: '261', dias: '4'},
    'Romancista': {ch: '7', valor: '115', dias: '4'},
    'Sous chef': {ch: '6', valor: '131', dias: '5'},
    'Sr. Sistema Solar': {ch: '6', valor: '500', dias: '3'},
    'Técnico': {ch: '8', valor: '54', dias: '5'},
    'Técnico de controle de qualidade': {ch: '9', valor: '38', dias: '5'},
    'Titular': {ch: '7', valor: '86', dias: '5'},
    'Treinador das estrelas': {ch: '6', valor: '149', dias: '5'},
    'Vice-presidente': {ch: '8', valor: '90', dias: '5'},
    'Vilão supremo': {ch: '8', valor: '479', dias: '4'},
    'Virtuoso dos concertos': {ch: '7', valor: '340', dias: '4'},
    'Xerife das estrelas': {ch: '7', valor: '297', dias: '4'}
};
document.getElementById('cargo').addEventListener('change', function() {
    var selecaoCargo = this.value;
    var cargo = cargos[selecaoCargo];
    if (cargo) {
        document.getElementById('ch').value = cargo.ch;
        document.getElementById('valor-hor').value = cargo.valor;
        document.getElementById('dias').value = cargo.dias;
    }
});

function calcular() {
    var cargaHoraria = parseFloat(document.getElementById('ch').value);
    var valorHora = parseFloat(document.getElementById('valor-hor').value);
    var diasSemana = parseFloat(document.getElementById('dias').value);
    var valorDia = cargaHoraria * valorHora;
    var valorSemana = diasSemana * valorDia;
    var gastosFixos = parseFloat(document.getElementById('gastos').value);
    var lucro = valorSemana - gastosFixos;
    document.getElementById('valor-dia').value = valorDia;
    document.getElementById('valor-sem').value = valorSemana;
    document.getElementById('lucro').value = lucro;
}