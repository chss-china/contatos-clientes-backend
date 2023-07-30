
# TypeOrm + Express + React + Vite + Typescript
- Back End 
# Comandos para instalação e Configuração
 1.npm init -y para istalar aplicação com node js
2. npm install typeorm reflect-metadata @nestjs/typeorm pg para instalar o back end com suporte ao pg
3. abrir um arquivo Data Source para configurar suas entidades e migrações
4. colocar .env com todas suas credenciais do banco de dados e criar um banco de dados conforme está no env
5. No app Data SoUrce verificar se sua baseURl que é as credencias do banco de dados existe, se não tem que estourar um erro personalizado
6. retornar o banco de dados que vai usar, nesse caso postgres
7. retornar a url do seu database com suas credencias
8. colocar synchronize para false se quiser gerar migrations e entitidades
9. logging = true para mostrar todos os logs da aplicação
 e retonar suas entidades e migrations que foram configuradas
10. abrir um arquivo para colocar a inicialização do AppDatataSouce 
11. para iniciar o data souce use initialize e com .then para  mostrar console.log de database conectado
12.e nesse then com listen iniciar o servidor no localhost que quiser e dar um console.log para ver se o servidor foi iniciado
13.importar o reflect-metadata no arquivo pricipal app.ts 
14.se você tiver um clone do projeto por ultimo dar o npm install para instalar todas dependencias do projeto ou se for um projeto do começo
apos fazer as configurações  ir instalando as bibliotecas que você vai precisar
 
 
