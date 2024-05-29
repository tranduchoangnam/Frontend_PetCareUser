// {
//     "name": "string",
//     "age": 0,
//     "color": "string",
//     "gender": "string",
//     "breed": "string",
//     "avatar": "string",
//     "ownerId": "11e46323-6a89-40e3-a3fb-f506cf43263d"
//   }
import z from "zod";
export const PetSchema = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
  color: z.string(),
  gender: z.string(),
  breed: z.string(),
  avatar: z.string(),
  ownerId: z.string(),
});
export type Pet = z.infer<typeof PetSchema>;

export const PetRegisterSchema = z.object({
    name: z.string(),
    age: z.number(),
    color: z.string(),
    breed: z.string(),
    gender: z.string(),
});