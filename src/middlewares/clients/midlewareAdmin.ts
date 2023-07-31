import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errrors";
import { Contact } from "../../entities/contact.entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clientes.entities";
export const verifyNotAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const decoded = res.locals.decoded;
  const id = parseInt(req.params.id);

  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  if (!decoded || !decoded.sub) {
    throw new AppError("Authentication required", 401);
  }

  // Procura o cliente no repositório com o ID fornecido nos parâmetros da URL
  const client = await clientRepository.findOneBy({ id: id });
  const loggedClient = await clientRepository.findOneBy({ id: decoded.client });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const isSelfUpdated = loggedClient?.id === client.id;

  if (!loggedClient?.admin && !isSelfUpdated) {
    throw new AppError("Insufficient permission", 403);
  }

  await clientRepository.save(client);
  next();
};
