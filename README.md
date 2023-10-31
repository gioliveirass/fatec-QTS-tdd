# 🧪 Teste de Unidade 🧪

Atividade desenvolvida durante a aula de Qualidade e Testes de Software da FATEC. Consiste na resolução de um desafio disponibilizado no site [DojoPuzzles](https://dojopuzzles.com/) com aplicação da técnica de Test Driven Development (TDD).

[O deafio escolhido foi o "Palavras Primas", e você pode acessar seu enunciado no site DojoPuzzle clicando aqui.](https://dojopuzzles.com/problems/palavras-primas/)

## Sumário

No presente README, você pode encontrar:

- Tecnologias utilizadas no projeto;
- Organização do repositório;
- Tutorial de execução do projeto localmente;
- Tutorial de execução dos testes unitários;
- Resultados obtidos durante a execução do projeto e dos testes unitários.

## Tecnologias utilizadas

- Node;
- JavaScript;
- Jest.

## Organização do repositório

Os arquivos disponíveis na raiz do projeto são apenas configurações do NODE e do JEST que permitem a execução adequada dos scripts. O desenvolvimento da aplicação em sí se encontra inteiro dentro da pasta `./src`.

Na pasta `./src` existem três arquivos, sendo eles:

#### main.js

Execução sequêncial das funções localizadas no arquivo `primeWords.js`. Este é o arquivo executado quando o comando `npm start` é inserido no terminal.

#### primeWords.js

Funções localizadas criadas para solucionar o desafio "Palavaras Primas". As funções presentes nesse arquivo são utilizadas tanto no `main.js` quanto no `primeWords.test.js`.

#### primeWords.test.js

Testes de cada função presente no arquivo `primeWords.js`. Este é o arquivo executado quando o comando `npm test` é inserido no terminal.

## Tutorial: Execução do projeto localmente

Primeiro, clone o projeto na sua máquina:

```bash
  git clone https://github.com/gioliveirass/fatec-QTS-tdd
```

Após clonar o projeto, acesse o diretório local:

```bash
  cd fatec-QTS-tdd
```

Instale as dependências do projeto:

```bash
  npm install
```

Por fim, inicialize o projeto:

```bash
  npm start
```

## Tutorial: Execução dos testes unitários

Após clonar o projeto em sua máquina, acessar o diretório local e instalar as dependências, execute o comando a seguir:

```bash
  npm test
```

## Resultados de execução

A seguir, é possível vizualizar os resultados obtidos durante a execução do projeto e dos testes unitários:
