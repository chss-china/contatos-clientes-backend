
# TypeOrm + Express + React + Vite + Typescript
- Back End do meu projeto Full Stack
# Comandos para instalação e Configuração
1. `npm init -y` para instalar aplicação com Node.js.
2. `npm install typeorm reflect-metadata @nestjs/typeorm pg` para instalar o back end com suporte ao PostgreSQL.
3. Abrir um arquivo Data Source para configurar suas entidades e migrações.
4. Colocar um arquivo `.env` com todas suas credenciais do banco de dados e criar um banco de dados conforme está no `.env`.
5. No arquivo `app.datasource.ts`, verificar se sua `baseURL` (que são as credenciais do banco de dados) existe. Se não existir, estourar um erro personalizado.
7. Retornar o banco de dados que vai usar, nesse caso, PostgreSQL.
8. Retornar a URL do seu database com suas credenciais.
9. Colocar `synchronize` para `false` se quiser gerar migrations e entidades manualmente.
10. Configurar `logging = true` para mostrar todos os logs da aplicação e retornar suas entidades e migrations que foram configuradas.
11. Abrir um arquivo para colocar a inicialização do `AppDataSource`.
12. Para iniciar o Data Source, use o método `initialize` e utilize `.then` para mostrar `console.log` do database conectado.
13. E nesse `.then`, com `app.listen`, iniciar o servidor no localhost que quiser e dar um `console.log` para ver se o servidor foi iniciado.
14. Importar o `reflect-metadata` no arquivo principal `app.ts`.
15. Se você tiver um clone do projeto, por último, execute `npm install` para instalar todas dependências do projeto. Se for um projeto do começo, após fazer as configurações, vá instalando as bibliotecas que você vai precisar.
16. Habilitar o CORS no projeto para vincular com o front-end, permitindo a comunicação segura entre os domínios do back-end e do front-end.


    
# Endpoint para /clients
- POST
  - verifico se os dados da requisição estão validados com um schema usando zod para enviar os dados corretos e retornar os dados coretos
  - verifico se o email que enviei na requisição já existe no meu banco de dados, caso exista retorne um erro personalizado, pois não pode cadastrar dois emails iguais
  - e por fim crio cliente com TypeORM, salvo no banco de dados com todos os dados validados no retorno da requisição usando zod para schema
  -  retorno o status 201 de create com os novos dados.

- GET
  - listo todos clientes com dados validados usando zod na resposta da requisição, retorno o status 200 com todos clientes
 
# Endpoint para /clients/id
 - PATCH
    - verifico se o cliente tem o id que enviei na url na requisição no meu banco de dados com typeORM, caso não tenha vai estourar um erro personalizado dizendo que o id que enviei não existe, pois não posso atualizar um id que não exista
    - verifico se o email que enviei na requisição já existe no meu banco de dados, caso exista retorne um erro personalizado, pois não pode cadastrar dois emails iguais
    -  verifico se os dados da requisição estão validados com um schema usando zod para enviar os dados corretos e retornar os dados coretos, e como e uma atualização os dados são opcionais podendo atualizar apenas dados que quero
    -  acesso o token do cliente logado, verifico se o cliente está enviando algum token se não vai estourar um erro personalizado pois na
   rota de atualização precisa estar logado, verifico se o token do cliente logado está no formato do proprio cliente logado, faço uma verificação com jsonwebtoken passando o token e meu secret key que está .env, e também faço uma verificação que se ocorrer um erro de  por exemplo token invalido ou token expirado,ou algum outro, estoura o status 401 com erro personalizado, já se aplicação for bem sucedida
eu armazeno esse token para usar em varios lugares da aplicação que precisa do usuario logado
    -
     




 
 
