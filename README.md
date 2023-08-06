
# TypeOrm + Express + React + Vite + Typescript
- Back End do meu projeto Full Stack, o Objetivo do projeto foi desenvolver um back para um serviço responsavel por simular agenda podendo adicionar e remover contatos e clientes. Prazo do projeto full stack foi de 5 dias
# Tecnologias e Bibliotecas
- Node
- Express
- Typescript
- bcryptjs
- dotenv
- jsonwebtoken
- pg
- typeorm
- zode
- ts node
# Instalação e dependencias
faça o clone do repositorio execute npm install,  entre na pasta com comando cd contatos-clientes-backend
 e execute o servidor com npm run dev

# Conectar ao banco de dados
 - DATABASE_URL="postgres://Username:Password@host:port/database"
 - SECRET_KEY:a que voce quiser

# Rodar migrations
- npm run typeorm migration:generate -- -d src/data-source src/migrations/createTables2
- npm run typeorm migration:run -- -d src/data-source
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
  
    - Verifico se o e-mail enviado na requisição já existe no meu banco de dados. Caso exista, retorno um erro personalizado, pois não é possível atualizar dois e-mails iguais.
      
    -  Verifico se os dados da requisição estão validados com um esquema usando o Zod para enviar os dados corretos e retornar os dados corretos. Como se trata de uma atualização, os dados são permitidos, permitindo atualizar apenas os campos desejados.
   
    - Acesso ao token: Ao receber uma requisição de atualização de cliente, o servidor acessa o token que está presente nos cabeçalhos (headers) da requisição. O token geralmente é enviado pelo cliente como uma forma de autenticação.

    - Verificação da presença do token: O servidor verifica se o token está presente na requisição. Se não houver um token válido, o servidor retornará um erro personalizado com status 401 (não autorizado), informando que é necessário estar autenticado para acessar uma rota de atualização.

     - Validação do token: O servidor valida o token usando a biblioteca jsonwebtoken. O token é verificado em relação a uma chave secreta (chave secreta) armazenada no arquivo .envdo servidor. Isso garante que o token não foi manipulado e que pertence a um usuário autenticado.

     - Tratamento de erros: Se ocorrer algum problema na validação do token, como um token inválido, expirado ou interrompido, o servidor retornará um erro personalizado com status 401, informando que o token é inválido ou expirado.

      - armazenamento do token: Se a validação do token for bem-sucedida, o servidor armazena o token para usar em outros lugeres da aplicação

      - Faça uma verificação para determinar se o usuário logado é o dono de suas próprias informações ou se ele é um administrador, pois caso seja um administrador, ele pode atualizar  e excluir qualquer cliente. Se não for um administrador, apenas os dados do próprio usuário logado serão excluídos ou atualizados.
  
      -  o servidor procurará pelo contato com o ID especificado. Caso seja encontrado, os dados do contato serão atualizados com as informações fornecidas na requisição. Em seguida, o servidor retornará os dados atualizados do contato. 

- GET
   -  Verifico se o cliente possui o ID enviado na URL da requisição no meu banco de dados com o TypeORM. Caso não exista, retornarei um erro personalizado informando que o ID enviado não existe, pois não posso listar um registro que não existe.
     
   -  Listo o cliente que possui o ID fornecido na URL, com os dados validados usando Zod na resposta da requisição. Retorno ao status 200 com todos os clientes encontrados.
 
- DELETE
     - Verifico se o cliente possui o ID enviado na URL da requisição no meu banco de dados com o TypeORM. Caso não exista, retornarei um erro personalizado informando que o ID enviado não existe, pois não posso deletar um registro que não existe.
       
     -  Acesso ao token: Ao receber uma requisição de atualização de cliente, o servidor acessa o token que está presente nos cabeçalhos (headers) da requisição. O token geralmente é enviado pelo cliente como uma forma de autenticação.
  
     -  Verificação da presença do token: O servidor verifica se o token está presente na requisição. Se não houver um token válido, o servidor retornará um erro personalizado com status 401 (não autorizado), informando que é necessário estar autenticado para acessar uma rota de atualização
  
    - Validação do token: O servidor valida o token usando a biblioteca jsonwebtoken. O token é verificado em relação a uma chave secreta
 (chave secreta) armazenada no arquivo .env do servidor. Isso garante que o token não foi manipulado e que pertence a um usuário autenticado.

    - armazenamento do token: Se a validação do token for bem-sucedida, o servidor armazena o token para usar em outros lugeres da aplicação
  
    - Tratamento de erros: Se ocorrer algum problema na validação do token, como um token inválido, expirado ou interrompido, o servidor retornará um erro personalizado com status 401, informando que o token é inválido ou expirado.
  
    -  Faço uma verificação para determinar se o usuário logado é o dono de suas próprias informações ou se ele é um administrador, pois caso seja um administrador, ele pode atualizar  e excluir qualquer cliente. Se não for um administrador, apenas os dados do próprio usuário logado serão excluídos ou atualizados
      
   - Por fim, procuro o ID do cliente que enviei na URL, o qual está presente no meu banco de dados, para buscar o ID do cliente que desejo deletar. Use o TypeORM para realizar a remoção e retornar o status 204, sem fornecer a resposta da requisição com os dados que foram excluídos.
 .
# Endpoint para /login
 - POST
   
    - fiz uma função que faz o login que é realizada uma consulta no banco de dados para encontrar um cliente com o email fornecido na  no corpo ao enviar requisição.
      
    - Se nenhum cliente for encontrado com o e-mail fornecido, a função lança um erro usando a classe de erro personalizado com  a mensagem "Invalid credenciais" e o código de status HTTP 401 (Unauthorized). isso é feito para verificar se o email que passei no login é valido ou existe
      
   - Se um cliente for encontrado com o e-mail fornecido, a função compara a senha posicionada no com os dados da requisição a senha armazenada no registro do cliente no banco de dados
     
    - utilizando a função compareda biblioteca bcryptjs. Se as senhas não coincidem, a função lança um erro usando a classe AppError que que é um erro personalizado com a mensagem "Invalid credenciais" e o código de status HTTP 401 (Unauthorized)
      
    -  Se as credenciais estiverem corretas, o código utiliza uma biblioteca jsonwebtokenpara gerar um token de autenticação. O token é assinado com informações sobre o cliente, como o ID do cliente e se ele é um administrador ou não. A chave secreta utilizada para assinar o token é submetida à variável de ambiente
      
    - Antes de retornar os dados,eu crio o codigo que  cria um objeto loggedInClientcom algumas informações relevantes do cliente, como admin, id, fullnamee email. Essas informações serão retornadas juntamente com o token, para quando for fazer requisição no front end retorna o token e o usuario logado e assim manipular o front end
      
  - por fim é retornado o token com as informações do cliente usando status 201 de created
     
# Endpoint para /contacts
- POST
    -  Verifico se os dados da requisição estão validados com um esquema usando Zod para enviar os dados corretos e retornar os dados corretos.
      
    - Verifico se o e-mail enviado na requisição já existe no meu banco de dados. Caso exista, retorno um erro personalizado, pois não é possível cadastrar dois e-mails iguais.
      
   - Verifico se o cep enviado na requisição já existe no meu banco de dados. Caso exista, retorno um erro personalizado, pois não é possível cadastrar dois ceps iguais.
     
   -  Acesso ao token: Ao receber uma requisição de atualização de cliente, o servidor acessa o token que está presente nos cabeçalhos (headers) da requisição. O token geralmente é enviado pelo cliente como uma forma de autenticação.
 
   -  Verificação da presença do token: O servidor verifica se o token está presente na requisição. Se não houver um token válido, o servidor retornará um erro personalizado com status 401 (não autorizado), informando que é necessário estar autenticado para acessar uma rota de atualização
    
  - Validação do token: O servidor valida o token usando a biblioteca jsonwebtoken. O token é verificado em relação a uma chave secreta
 (chave secreta) armazenada no arquivo .env do servidor. Isso garante que o token não foi manipulado e que pertence a um usuário autenticado.

  - armazenamento do token: Se a validação do token for bem-sucedida, o servidor armazena o token para usar em outros lugeres da aplicação
  - Tratamento de erros: Se ocorrer algum problema na validação do token, como um token inválido, expirado ou interrompido, o servidor retornará um erro personalizado com status 401, informando que o token é inválido ou expirado.
 
   -  Faço uma verificação para determinar se o usuário logado é o dono de suas próprias informações ou se ele é um administrador, pois caso seja um administrador, ele pode atualizar  e excluir qualquer contato. Se não for um administrador, apenas os dados do próprio usuário logado serão excluídos ou atualizados

   - Por fim, crio um cliente com TypeORM e salvo no banco de dados com todos os dados validados no retorno da requisição, utilizando Zod para o schema.
    
  -  Retorno o status 201 de "created" com os novos dados

# Endpoint para contacts/id
 - PATCH
    - Verifico se o contato possui o ID enviado na URL da requisição no meu banco de dados com o TypeORM. Caso não exista, retornarei um erro personalizado informando que o ID enviado não existe, pois não posso atualizar um registro que não existe.
      
    -  Verifico se os dados da requisição estão validados com um esquema usando o Zod para enviar os dados corretos e retornar os dados corretos. Como se trata de uma atualização, os dados são permitidos, permitindo atualizar apenas os campos desejados.
  
    - Verifico se o e-mail enviado na requisição já existe no meu banco de dados. Caso exista, retorno um erro personalizado, pois não é possível atualizar dois e-mails iguais.
  
    - Verifico se o cep enviado na requisição já existe no meu banco de dados. Caso exista, retorno um erro personalizado, pois não é possível atualizar dois endereços iguais.
  
    - Acesso ao token: Ao receber uma requisição de atualização de cliente, o servidor acessa o token que está presente nos cabeçalhos (headers) da requisição. O token geralmente é enviado pelo cliente como uma forma de autenticação.

   - Verificação da presença do token: O servidor verifica se o token está presente na requisição. Se não houver um token válido, o servidor retornará um erro personalizado com status 401 (não autorizado), informando que é necessário estar autenticado para acessar uma rota de atualização.

   - Validação do token: O servidor valida o token usando a biblioteca jsonwebtoken. O token é verificado em relação a uma chave secreta (chave secreta) armazenada no arquivo .envdo servidor. Isso garante que o token não foi manipulado e que pertence a um usuário autenticado.

    - Tratamento de erros: Se ocorrer algum problema na validação do token, como um token inválido, expirado ou interrompido, o servidor retornará um erro personalizado com status 401, informando que o token é inválido ou expirado.

     - armazenamento do token: Se a validação do token for bem-sucedida, o servidor armazena o token para usar em outros lugeres da aplicação
       
     - Faço uma verificação para determinar se o usuário logado é o dono de suas próprias informações ou se ele é um administrador, pois caso seja um administrador, ele pode atualizar  e excluir qualquer contato. Se não for um administrador, apenas os dados do próprio usuário logado serão excluídos ou atualizados
  
     -  o servidor procurará pelo contato com o ID especificado. Caso seja encontrado, os dados do contato serão atualizados com as informações fornecidas na requisição. Em seguida, o servidor retornará os dados atualizados do contato.
       
 - GET
   -  Verifico se o contato possui o ID enviado na URL da requisição no meu banco de dados com o TypeORM. Caso não exista, retornarei um erro personalizado informando que o ID enviado não existe, pois não posso listar um registro que não existe.
     
   -  Listo o cliente que possui o ID fornecido na URL, com os dados validados usando Zod na resposta da requisição. Retorno ao status 200 com todos os clientes encontrados.

 - DELETE
    -  Verifico se o contato possui o ID enviado na URL da requisição no meu banco de dados com o TypeORM. Caso não exista, retornarei um erro personalizado informando que o ID enviado não existe, pois não posso listar um registro que não existe.

   - Acesso ao token: Ao receber uma requisição de atualização de cliente, o servidor acessa o token que está presente nos cabeçalhos (headers) da requisição. O token geralmente é enviado pelo cliente como uma forma de autenticação.

   - Verificação da presença do token: O servidor verifica se o token está presente na requisição. Se não houver um token válido, o servidor retornará um erro personalizado com status 401 (não autorizado), informando que é necessário estar autenticado para acessar uma rota de atualização.

   - Validação do token: O servidor valida o token usando a biblioteca jsonwebtoken. O token é verificado em relação a uma chave secreta (chave secreta) armazenada no arquivo .envdo servidor. Isso garante que o token não foi manipulado e que pertence a um usuário autenticado.

  - Tratamento de erros: Se ocorrer algum problema na validação do token, como um token inválido, expirado ou interrompido, o servidor retornará um erro personalizado com status 401, informando que o token é inválido ou expirado.

  - armazenamento do token: Se a validação do token for bem-sucedida, o servidor armazena o token para usar em outros lugeres da aplicação

  - Faço uma verificação para determinar se o usuário logado é o dono de suas próprias informações ou se ele é um administrador, pois caso seja um administrador, ele pode atualizar  e excluir qualquer contato. Se não for um administrador, apenas os dados do próprio usuário logado serão excluídos ou atualizados
       
