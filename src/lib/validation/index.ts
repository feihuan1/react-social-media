import * as z from "zod";


export const SignupValidation = z.object({
    name: z.string().min(2,{message: 'Are you sure you name is only one letter?'}).max(50),
    username: z.string().min(2,{message: 'Can not be one letter'}),
    email: z.string().email(),
    password: z.string().min(8,{message: 'Use a longer password~'}),
  });

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8,{message: 'Use a longer password~'}),
  });

  export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    username: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    bio: z.string(),
  });

export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
  });