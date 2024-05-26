//export type User nextj with zod
import z from "zod";
const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  role: z.string(),
});
export type User = z.infer<typeof UserSchema>;
export default UserSchema;
