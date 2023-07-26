import { z } from "zod";
import {
  createLoginSchema,
  createTokenResponseSchema,
} from "../../schemas/schemasclients/schemalogin.ts/schemalogin";
type TloginRequest = z.infer<typeof createLoginSchema>;

type TtokenLoginResponse = z.infer<typeof createTokenResponseSchema>;
export { TloginRequest, TtokenLoginResponse };
