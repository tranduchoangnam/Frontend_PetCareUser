import z from "zod";

export const LoginResponseSchema = z.object({
    access_token: z.string(),
    refresh_token: z.string(),
});
export type LoginResponse = z.infer<typeof LoginResponseSchema>;

export const LoginRequestSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});
export type LoginRequest = z.infer<typeof LoginRequestSchema>;

export const RegisterRequestSchema = z.object({
    email: z.string().email(),
    username: z.string(),
    password: z.string().min(6),
    phone: z.string(),
});
export type RegisterRequest = z.infer<typeof RegisterRequestSchema>;

