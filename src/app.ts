import "express-async-errors";
import "reflect-metadata";

import express, { Application } from "express";

import { clientRoutes } from "./routes/clients/client.routes";
import { handleErrors } from "./errrors";
import { loginRoutes } from "./routes/clients/login/login.routes";
import { contactRoutes } from "./routes/clients/contacts/contact.routes";
import { clientandContactRoutes } from "./routes/clientsecontacts/clientecontacts.routes";
import cors from "cors";
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/clients", clientRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes);
// app.use("/clients", clientandContactRoutes);
app.use(handleErrors);
export default app;
