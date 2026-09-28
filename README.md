# 🔤 Adivinhe

Jogo de adivinhação de palavras do mundo da tecnologia. O jogador recebe uma **dica**, vê os espaços da palavra e tenta descobri-la **letra por letra**, dentro de um número limitado de tentativas.

Feito com **React + TypeScript + Vite**.

## 🎮 Como jogar

1. Ao abrir o jogo, uma palavra é sorteada e a **dica** aparece na tela.
2. Digite **uma letra** no campo "Palpite" e clique em **Confirmar**.
3. Se a letra existir na palavra, ela é revelada nos espaços (e conta ponto por cada ocorrência).
4. Todas as letras já usadas aparecem em **"Letras utilizadas"**, em verde quando acertou e em outra cor quando errou.
5. Você tem **tamanho da palavra + 2** tentativas.
   - Descobriu todas as letras → 🎉 vitória.
   - Acabaram as tentativas → 😢 derrota.
6. Depois do fim da rodada, uma nova palavra é sorteada automaticamente.
7. O botão de reiniciar (canto superior) troca a palavra a qualquer momento, com confirmação.

### Regras de validação

- Campo vazio: o jogo pede para digitar uma letra.
- Letra repetida: o jogo avisa que ela já foi usada e não gasta tentativa.
- Maiúsculas e minúsculas são tratadas da mesma forma.

## 🛠️ Tecnologias

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- CSS Modules
- ESLint

## 🚀 Como rodar o projeto

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# instalar as dependências
npm install

# rodar em modo de desenvolvimento
npm run dev

# gerar a build de produção
npm run build

# visualizar a build localmente
npm run preview

# rodar o linter
npm run lint
```

Depois do `npm run dev`, abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## 📁 Estrutura do projeto

```
src/
├── assets/            # imagens e ícones (logo, ícones de dica e reiniciar)
├── components/
│   ├── Button/        # botão "Confirmar"
│   ├── Header/        # logo, contador de tentativas e botão de reiniciar
│   ├── input/         # campo de texto do palpite
│   ├── letter/        # caixinha de uma letra (tamanhos e cores diferentes)
│   ├── lettersUsed/   # lista de letras já utilizadas
│   └── Tip/           # bloco com a dica da palavra
├── utils/
│   └── words.ts       # lista de palavras e dicas (tipo Challenge)
├── App.tsx            # lógica principal do jogo
├── App.module.css
├── global.css
└── main.tsx           # ponto de entrada
```

## ➕ Como adicionar novas palavras

As palavras ficam em `src/utils/words.ts`. Basta adicionar um novo objeto à lista `WORDS`:

```ts
{ id: 51, word: "Exemplo", tip: "Uma dica para a palavra" },
```

Cada desafio tem:

| Campo  | Tipo     | Descrição                        |
| ------ | -------- | -------------------------------- |
| `id`   | `number` | Identificador único              |
| `word` | `string` | A palavra a ser descoberta       |
| `tip`  | `string` | A dica exibida para o jogador    |

Hoje o jogo tem **50 palavras** de tecnologia, como React, Docker, PostgreSQL, TypeScript e Git.

## 🧠 O que este projeto pratica

- Estado com `useState` e efeitos com `useEffect`
- Componentização e props tipadas com TypeScript
- Estilização com CSS Modules
- Renderização de listas e renderização condicional
- Regras de jogo: pontuação, limite de tentativas e reinício da partida

## 📄 Licença

Projeto de estudo. Sinta-se à vontade para usar como referência.

## 👨‍💻 Autor

**Leonel Sousa**

🔗 [LinkedIn](https://www.linkedin.com/in/leonel-sousa-9704a7243/)
