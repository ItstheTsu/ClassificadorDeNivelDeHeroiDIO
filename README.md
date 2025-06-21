# Classificador de Nível de Herói ⚔

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Um projeto simples em JavaScript que classifica o nível de um herói com base na quantidade de experiência (XP) acumulada.

## 📋 Funcionalidades

- Classifica o nível do herói de acordo com sua XP
- Exibe uma mensagem informando o nome do herói e seu nível
- Suporta diferentes faixas de XP com classificações específicas
- Fácil de personalizar e integrar em outros projetos

## 🚀 Como usar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/classificador-heroi.git
```

2. Execute o script:
```bash
node index.js
```

## 🛠️ Estrutura do Código

O projeto consiste em um script principal (`index.js`) que:
- Reúne os arquivos de DATA e PLAYER
- Utiliza uma estrutura de decisão para determinar o nível
- Exibe o resultado no console

## 📊 Tabela de Níveis

| Faixa de XP       | Nível       |
|-------------------|-------------|
| < 1.000           | Ferro       |
| 1.001 - 2.000     | Bronze      |
| 2.001 - 5.000     | Prata       |
| 5.001 - 7.000     | Ouro        |
| 7.001 - 8.000     | Platina     |
| 8.001 - 9.000     | Ascendente  |
| 9.001 - 10.000    | Imortal     |
| Maior que 10.000  | Radiante    |

## ✨ Personalização

Edite o arquivo `playeer.js` para alterar:
```javascript
const nomeHeroi = "Seu Herói"; // Altere o nome aqui
const xp = 7500; // Altere a experiência aqui
```

## 📝 Exemplo de Saída

```bash
O Herói de nome "Guerreiro" está no nível "Ouro"
```

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:
1. Faça um fork do projeto
2. Crie sua branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📜 Licença

Este projeto está licenciado sob a Licença Apache 2.0 - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
Copyright [2025] [Allan Correa (Tsu)]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```