import * as z from "zod";


export const SignupValidation = z.object({
    name: z.string().min(2,{message: 'Are you sure you name is only one letter?'}).max(50),
    username: z.string().min(2,{message: 'Can not be one letter'}),
    email: z.string().email(),
    password: z.string().min(8,{message: 'Use a longer password~'}),
  });