import { z } from "zod";
const createClientSchema = z.object({
  id: z.number(),
  fullname: z.string().max(45),
  email: z.string().max(45).email(),
  telephone: z.string().min(10),
  admin: z.boolean(),
  password: z.string().max(120),
  createdAt: z.union([z.string(), z.date()]),
});
const clientSchemaResponse = createClientSchema.omit({
  password: true,
});
const clientSchemaRequest = createClientSchema.omit({
  id: true,
  createdAt: true,
});
const updateClientSchemaRequest = createClientSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .partial();
const allClientSchemaResponseGet = createClientSchema
  .omit({
    password: true,
  })
  .array();
export {
  allClientSchemaResponseGet,
  clientSchemaRequest,
  updateClientSchemaRequest,
  createClientSchema,
  clientSchemaResponse,
};
