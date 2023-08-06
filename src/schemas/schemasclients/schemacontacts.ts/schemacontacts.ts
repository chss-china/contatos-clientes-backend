import { z } from "zod";
import { clientSchemaResponse } from "../schemaclients";
const ContactSchema = z.object({
  id: z.number(),
  fullname: z.string().max(70),
  email: z.string().email().max(60),
  password: z.string().max(120),
  zipCode: z.string().max(20),
  city: z.string(),
  street: z.string(),
  state: z.string(),
  country: z.string(),
  telephone: z.string(),
  admin: z.boolean().default(false),
  createdAt: z.date().optional(),
});
const contactSchemaResponse = ContactSchema.omit({ password: true }).array();
const contactSchemaResponseCreate = ContactSchema.omit({
  password: true,
}).extend({
  client: clientSchemaResponse,
});
const contactSchemaResponseUpdate = ContactSchema.omit({
  password: true,
});
const contactSchemaRequest = ContactSchema.omit({
  id: true,
  createdAt: true,
  admin: true,
});
const updateContactSchemaRequest = ContactSchema.omit({
  id: true,
  createdAt: true,
}).partial();
const allContactchemaResponseGet = ContactSchema.omit({
  password: true,
}).array();
export {
  contactSchemaResponse,
  contactSchemaRequest,
  updateContactSchemaRequest,
  allContactchemaResponseGet,
  ContactSchema,
  contactSchemaResponseCreate,
  contactSchemaResponseUpdate,
};
