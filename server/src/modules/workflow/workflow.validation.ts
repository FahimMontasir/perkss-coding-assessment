import { z } from 'zod';

const createWorkflowZodSchema = z.object({
  body: z.object({
    phoneNumber: z.string().optional(),
    password: z.string().optional(),
    name: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    }),
    address: z.string().optional(),
    budget: z.number().optional(),
    income: z.number().optional(),
  }),
});

const updateWorkflowZodSchema = z.object({
  body: z.object({
    phoneNumber: z.string().optional(),
    password: z.string().optional(),
    name: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    }),
    address: z.string().optional(),
    budget: z.number().optional(),
    income: z.number().optional(),
  }),
});

export const WorkflowValidation = {
  createWorkflowZodSchema,
  updateWorkflowZodSchema,
};
