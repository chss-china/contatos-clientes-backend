
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
17.  Em seguida, gere o arquivo tsconfig.json para personalizar como o TypeScript compila e trata o código do seu projeto. Execute o comando npx tsc --init
18.   O arquivo `tsconfig.json` sera gerado com configurações padrão. Mais configurações adicionais podem ser feitas neste arquivo. Veja abaixo todas as configurações que fiz no arquivo `tsconfig.json`. Lembre-se de que essas configurações são opcionais e foram escolhidas de acordo com minhas preferências:
19.   {
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "typeRoots": ["node_modules/@types"],
    "types": ["node", "jsonwebtoken"],
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "exactOptionalPropertyTypes": true,
    "skipLibCheck": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}

20 . faça um arquivo .gitignore com essas informações,
# Logs
node_modules
.env
*lock*
    
# Endpoint para /clients
- POST
  -  Verifico se os dados da requisição estão validados com um esquema usando Zod para enviar os dados corretos e retornar os dados corretos.
  - Verifico se o e-mail enviado na requisição já existe no meu banco de dados. Caso exista, retorno um erro personalizado, pois não é possível cadastrar dois e-mails iguais.
  - Por fim, crio um cliente com TypeORM e salvo no banco de dados com todos os dados validados no retorno da requisição, utilizando Zod para o schema.
  -  Retorno o status 201 de "created" com os novos dados.

- GET
  - listo todos clientes com dados validados usando zod na resposta da requisição, retorno o status 200 com todos clientes
 
# Endpoint para /clients/id
 - PATCH
    - Verifico se o cliente possui o ID enviado na URL da requisição no meu banco de dados com o TypeORM. Caso não exista, retornarei um erro personalizado informando que o ID enviado não existe, pois não posso atualizar um registro que não existe.
    - Verifico se o e-mail enviado na requisição já existe no meu banco de dados. Caso exista, retorno um erro personalizado, pois não é possível cadastrar dois e-mails iguais.
    -  Verifico se os dados da requisição estão validados com um esquema usando o Zod para enviar os dados corretos e retornar os dados corretos. Como se trata de uma atualização, os dados são permitidos, permitindo atualizar apenas os campos desejados.
    - Acesso ao token: Ao receber uma requisição de atualização de cliente, o servidor acessa o token que está presente nos cabeçalhos (headers) da requisição. O token geralmente é enviado pelo cliente como uma forma de autenticação.

    - Verificação da presença do token: O servidor verifica se o token está presente na requisição. Se não houver um token válido, o servidor retornará um erro personalizado com status 401 (não autorizado), informando que é necessário estar autenticado para acessar uma rota de atualização.

     - Validação do token: O servidor valida o token usando a biblioteca jsonwebtoken. O token é verificado em relação a uma chave secreta (chave secreta) armazenada no arquivo .envdo servidor. Isso garante que o token não foi manipulado e que pertence a um usuário autenticado.

     - Tratamento de erros: Se ocorrer algum problema na validação do token, como um token inválido, expirado ou interrompido, o servidor retornará um erro personalizado com status 401, informando que o token é inválido ou expirado.

      - armazenamento do token: Se a validação do token for bem-sucedida, o servidor armazena o token para usar em outros lugeres da aplicação

      - Faça uma verificação para determinar se o usuário logado é o dono de suas próprias informações ou se ele é um administrador, pois caso seja um administrador, ele pode atualizar  e excluir qualquer cliente. Se não for um administrador, apenas os dados do próprio usuário logado serão excluídos ou atualizados.



- GET
   -  Verifico se o cliente possui o ID enviado na URL da requisição no meu banco de dados com o TypeORM. Caso não exista, retornarei um erro personalizado informando que o ID enviado não existe, pois não posso listar um registro que não existe.
   -  Listo o cliente que possui o ID fornecido na URL, com os dados validados usando Zod na resposta da requisição. Retorno ao status 200 com todos os clientes encontrados.
 
- DELETE
     - Verifico se o cliente possui o ID enviado na URL da requisição no meu banco de dados com o TypeORM. Caso não exista, retornarei um erro personalizado informando que o ID enviado não existe, pois não posso deletar um registro que não existe.
     -  Acesso ao token: Ao receber uma requisição de atualização de cliente, o servidor acessa o token que está presente nos cabeçalhos (headers) da requisição. O token geralmente é enviado pelo cliente como uma forma de autenticação.
     -  Verificação da presença do token: O servidor verifica se o token está presente na requisição. Se não houver um token válido, o servidor retornará um erro personalizado com status 401 (não autorizado), informando que é necessário estar autenticado para acessar uma rota de atualização
    - Validação do token: O servidor valida o token usando a biblioteca jsonwebtoken. O token é verificado em relação a uma chave secreta
 (chave secreta) armazenada no arquivo .envdo servidor. Isso garante que o token não foi manipulado e que pertence a um usuário autenticado.
    - armazenamento do token: Se a validação do token for bem-sucedida, o servidor armazena o token para usar em outros lugeres da aplicação
    - Tratamento de erros: Se ocorrer algum problema na validação do token, como um token inválido, expirado ou interrompido, o servidor retornará um erro personalizado com status 401, informando que o token é inválido ou expirado.
    -  Faço uma verificação para determinar se o usuário logado é o dono de suas próprias informações ou se ele é um administrador, pois caso seja um administrador, ele pode atualizar  e excluir qualquer cliente. Se não for um administrador, apenas os dados do próprio usuário logado serão excluídos ou atualizados
   - Por fim, procuro o ID do cliente que enviei na URL, o qual está presente no meu banco de dados, para buscar o ID do cliente que desejo deletar. Use o TypeORM para realizar a remoção e retornar o status 204, sem fornecer a resposta da requisição com os dados que foram excluídos.
 .



     




 
 
