import { Client } from "../../entities/clientes.entities";
import {
  TclientRequest,
  TclientResponse,
  TclientUpdateRequest,
} from "../../interfaces/clientsinterface/clientinteface";
import { listClientService } from "../../services/clients/clientlistuserservice";
import { createClientService } from "../../services/clients/createclientservices";
import { Request, Response } from "express";
import { deleteClientService } from "../../services/deleteservices";
import { updateListService } from "../../services/clients/updateservices";
import { listClientContactsServiceId } from "../../services/services/clientsandcontacts/clientsandcontactsId.service";
import { listClientServiceId } from "../../services/clients/clientservices.id";
export const createClientControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TclientRequest = req.body;
  const newClient: TclientResponse = await createClientService(userData);
  return res.status(201).json(newClient);
};
export const listClientControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listClient: TclientResponse[] = await listClientService();
  return res.status(200).json(listClient);
};
export const listClientControllersId = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const listClientId: TclientResponse = await listClientServiceId(id);
  return res.status(200).json(listClientId);
};
export const updateListControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Data: TclientUpdateRequest = req.body;
  const id: number = parseInt(req.params.id);
  const updateList: TclientResponse = await updateListService(Data, id);
  return res.status(200).json(updateList);
};
export const deleteListControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const deleteUser: Client = await deleteClientService(id);
  return res.status(204).json(deleteUser);
};
