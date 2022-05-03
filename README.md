# Reack Typescript - Clock

Este projeto foi criado baseada nas aulas ministradas por [Luiz Fernando Ribeiro](https://github.com/lfrprazeres) no curso `Fundamentos de React: escrevendo c/ Typescript` disponível na plataforma [Alura](alura.com.br)

Abaixo há toda a anotação que criei através do curso e de pesquisa própria para poder compreender melhor o [React](https://pt-br.reactjs.org) 

## Criação do Projeto

- Instalar o [Node.js](https://nodejs.org/en/)
- Entrar na pasta que você irá criar o projeto pelo `CMD` e digitar:
```javascript
npx create-react-app Nome-Pasta --template typescript --use-npm
```

## Iniciar o Projeto

- Entrar na pasta onde está o projeto pelo `CMD` e digitar:
```javascript
npm start
```

----------------------

## Bibliotecas Utilizadas

### SASS 
- Para criar arquivos de CSS do tipo .scss
```javascript
npm install --save-dev sass
```


### CSS Modules 
- Para criar uma classe única, mesmo que o nome seja genérico, p/ não ter problema de sobreposição
- Ele gera um `NameClass` baseado no **nome** do componente + **caracteres aleatórios**
- É preciso alterar o nome dos arquivos CSS para o plugin funcionar, como por exemplo, de `Arquivo.css` para `Arquivo.module.css`
```javascript
> npm install -D typescript-plugin-css-modules
> tsconfig 
> compilerOptions
> "plugins": [{ "name": "typescript-plugin-css-modules" }]
```
