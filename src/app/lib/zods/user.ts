import z from "zod";
export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  username: z.string(),
  phone: z.string().optional(),
  role: z.string(),
  avatar: z.string().optional(),
  gender: z.string().optional(),
  accessToken: z.string().optional(),
  refreshToken: z.array(z.string()).optional(),
});
export type UserBase = z.infer<typeof UserSchema>;
