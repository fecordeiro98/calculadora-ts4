# Descrição do Código HTML

Este documento HTML define uma página web para uma "Calculadora de Simoleons". Abaixo está uma explicação dos principais elementos e estruturas presentes no código:

## Estrutura do Documento

- **`<!DOCTYPE html>`**: Declaração do tipo de documento HTML5.
- **`<html lang="pt-BR">`**: Elemento raiz do HTML com o idioma definido como português do Brasil.

## Cabeça do Documento (`<head>`)

- **`<meta charset="UTF-8">`**: Define a codificação de caracteres como UTF-8.
- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Configura a visualização em dispositivos móveis para garantir que a página seja exibida corretamente em diferentes tamanhos de tela.
- **`<title>Calculadora de simoleons</title>`**: Define o título da página que aparece na aba do navegador.
- **`<link rel="stylesheet" href="style.css">`**: Link para o arquivo de estilos CSS externo.

## Corpo do Documento (`<body>`)

### Seção Principal (`<main>`)

Contém uma tabela (`<table>`) com vários campos para inserir dados e realizar cálculos.

- **Carreira**: Um menu suspenso (`<select>`) para escolher a carreira. As opções incluem diversas profissões como "Agente secreto", "Astronauta", "Atleta", etc.
- **Ramo e Cargo**: Menus suspensos (`<select>`) para selecionar o ramo e o cargo, que são preenchidos dinamicamente com JavaScript.
- **Horas/Dia e Valor por Hora**: Campos de entrada (`<input type="number">`) para inserir a quantidade de horas por dia e o valor por hora. Estes campos estão desativados inicialmente.
- **Dias/Semana**: Campo de entrada para definir o número de dias trabalhados por semana.
- **Valor/Dia e Valor/Semana**: Campos de entrada que mostram o valor ganho por dia e por semana, desativados inicialmente.
- **Gastos Fixos**: Campo de entrada para inserir os gastos fixos.
- **Lucro**: Campo de entrada para mostrar o lucro, desativado inicialmente.
- **Botão Calcular**: Um botão que, ao ser clicado, aciona a função `calcular()` definida em um script externo para realizar os cálculos.

### Rodapé (`<footer>`)

- **Informações de Copyright**: Exibe o nome do autor, a data e a versão do projeto.
- **Informações de Autor**: `Felipe Cordeiro`
- **Data**: Junho de 2024
- **Versão**: v 1.0

## Scripts

- **`<script src="script.js"></script>`**: Link para o arquivo JavaScript externo que contém a lógica para preencher os campos de seleção e realizar os cálculos.

## Observações

- A maioria dos campos de entrada estão desativados até que o usuário selecione uma carreira e outros detalhes.
- A interatividade e a funcionalidade adicional são fornecidas pelo arquivo JavaScript externo.

Este código HTML é estruturado para criar uma interface de usuário para calcular o valor ganho em função de diferentes carreiras e variáveis relacionadas.

# Importante

- Contém apenas as carreiras do jogo base! Não contém os empregos de meio-período nem os freelancers.
- Os primeiros nomes de cada ramo foram inventados por mim para evitar problemas no código (e para ficar mais divertido, claro).
