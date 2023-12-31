import { Request, Response } from "express";
import { Client } from "../../../entities/clientes.entities";
import { listClientContactsService } from "../../../services/services/clientsandcontacts/clientsandcontacts.services";
import { listClientContactsServiceId } from "../../../services/services/clientsandcontacts/clientsandcontactsId.service";
export const listClientsContactsControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listClient: Client[] = await listClientContactsService();
  return res.status(200).json(listClient);
};
export const listClientsContactsControllersId = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id);
  const listCategoryRealEstate = await listClientContactsServiceId(id);
  return res.status(200).json(listCategoryRealEstate);
};
