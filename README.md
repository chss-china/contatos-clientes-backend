
# TypeOrm + Express + React + Vite + Typescript
- Back End 
# Comandos para instalação e Configuração
1. `npm init -y` para instalar aplicação com Node.js.
2. `npm install typeorm reflect-metadata @nestjs/typeorm pg` para instalar o back end com suporte ao PostgreSQL.
3. Abrir um arquivo Data Source para configurar suas entidades e migrações.
4. Colocar um arquivo `.env` com todas suas credenciais do banco de dados e criar um banco de dados conforme está no `.env`.
5. No arquivo `app.datasource.ts`, verificar se sua `baseURL` (que são as credenciais do banco de dados) existe. Se não existir, estourar um erro personalizado.
6. Retornar o banco de dados que vai usar, nesse caso, PostgreSQL.
7. Retornar a URL do seu database com suas credenciais.
8. Colocar `synchronize` para `false` se quiser gerar migrations e entidades manualmente.
9. Configurar `logging = true` para mostrar todos os logs da aplicação e retornar suas entidades e migrations que foram configuradas.
10. Abrir um arquivo para colocar a inicialização do `AppDataSource`.
11. Para iniciar o Data Source, use o método `initialize` e utilize `.then` para mostrar `console.log` do database conectado.
12. E nesse `.then`, com `app.listen`, iniciar o servidor no localhost que quiser e dar um `console.log` para ver se o servidor foi iniciado.
13. Importar o `reflect-metadata` no arquivo principal `app.ts`.
14. Se você tiver um clone do projeto, por último, execute `npm install` para instalar todas dependências do projeto. Se for um projeto do começo, após fazer as configurações, vá instalando as bibliotecas que você vai precisar.
15.  15. Habilitar o CORS no projeto para vincular com o front-end, permitindo a comunicação segura entre os domínios do back-end e do front-end.
    





 
 
