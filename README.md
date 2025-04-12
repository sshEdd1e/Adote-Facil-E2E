# 🐾 Adote Fácil - Testes End-to-End com Cypress

Este repositório contém testes automatizados de aceitação (E2E) desenvolvidos com [Cypress](https://www.cypress.io/), aplicados ao projeto **Adote Fácil**, uma plataforma para facilitar a adoção de animais.

---

## 🎯 Objetivo

Garantir, por meio de testes automatizados, que as funcionalidades principais da aplicação estão funcionando corretamente sob o ponto de vista do usuário final.

---

## 🧪 Funcionalidades Testadas

| Cenário                           | Rota testada                             | Descrição                                                                 |
|----------------------------------|------------------------------------------|---------------------------------------------------------------------------|
| ✅ Cadastro de um animal         | `/area_logada/disponibilizar_animal`     | Preenche o formulário e verifica se o animal foi cadastrado com sucesso. |
| ✅ Pesquisa de animais           | `/area_logada/animais_disponiveis`       | Busca por um animal específico e verifica o resultado.                   |
| ✅ Visualização de detalhes      | `/area_logada/animais_disponiveis`       | Clica em um animal e verifica se os detalhes são exibidos.               |
| ✅ Adoção de animal              | `/area_logada/animais_disponiveis`       | Inicia o processo de adoção e valida a mensagem de confirmação.          |

---

## ⚙️ Como Executar os Testes

### 1. Clone este repositório

git clone https://github.com/sshEdd1e/Adote-Facil-E2E
cd adote-facil-e2e

### 2. Instale as dependências

npm install

### 3. Suba o frontend da aplicação

Acesse a pasta frontende rode:
npm install
npm run dev

### 4. Execute os testes

Com interface gráfica:
  npx cypress open
Em modo headless (terminal):
  npx cypress run
