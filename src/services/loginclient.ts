import {
  TloginRequest,
  TtokenLoginResponse,
} from "../interfaces/logininterface.ts/logininterface";
import { Client } from "../entities/clientes.entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errrors";
import { compare } from "bcryptjs";
import * as jwt from "jsonwebtoken";
import "dotenv/config";
import {
  TclientResponse,
  TreturnLogin,
} from "../interfaces/clientsinterface/clientinteface";
// Importe a interface LoggedInClient que você criou
import { Admin, Repository } from "typeorm";

export const createLoginService = async (
  loginData: TloginRequest
): Promise<{ token: string; client: TreturnLogin }> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const client: Client | null = await clientRepository.findOne({
    where: {
      email: loginData.email,
    },
  });
  if (!client) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, client.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials2", 401);
  }

  const token: string = jwt.sign(
    {
      admin: client.admin,
      client: client.id,
    },
    String(process.env.SECRET_KEY!),
    {
      expiresIn: "24h",
      subject: String(client.id),
    }
  );

  // Crie um objeto com os dados do cliente que deseja retornar
  const loggedInClient: TreturnLogin = {
    id: client.id,
    fullname: client.fullname,
    email: client.email,
    // Outros campos...
  };

  // Retorne o token e os dados do cliente
  return { token, client: loggedInClient };
};
