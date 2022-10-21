# Sobre

Interface de consumo da api Rick &  Morty (https://rickandmortyapi.com).

## Arquitetura

- Sistema de pesquisa utilizando redux e redux-saga
- Estrutura reactjs com typescript
- Lint para padrões de qualidade de código
- Husky para controle de processos de git
- Sass com sass module para estilização da aplicação
- Sistema de importação de arquivos com path absoluto
- Testes
- Changelog utilizando standard-version

### Como rodar

- Node 16.X
- Yarn (opcional)
- npm install
- npm start

### Testes

- npm test

### Gerar build

- npm run build

### Gerar changelog

- Basta que existam alterações para que algum conteúdo seja gerado no arquivo changelog
- Se não existir contéudo, uma versão crua será gerada. Isso signfica que apenas o código da versão irá mudar
- Para gerar bastar rodar o comando `npm run changelog`

### Preview

![alt text](https://github.com/geeknection/react-js-ui-rick-and-morty/tree/main/screenshots/screen-loading.png?raw=true)
![alt text](https://github.com/geeknection/react-js-ui-rick-and-morty/tree/main/screenshots/screen-listing.png?raw=true)