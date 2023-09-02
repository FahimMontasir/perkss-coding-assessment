import { z } from 'zod';

const createWorkflowZodSchema = z.object({
  body: z.object({
    name: z.string(),
    initBox: z.string(),
    endBox: z.string(),
    conditionalBoxes: z.array(
      z.object({
        condition: z.string(),
        actions: z.array(z.object({ actionName: z.string(), conditionApplicable: z.boolean() })),
      })
    ),
  }),
});

const updateWorkflowZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    initBox: z.string().optional(),
    endBox: z.string().optional(),
    conditionalBoxes: z.array(
      z.object({
        condition: z.string().optional(),
        actions: z.array(
          z.object({
            actionName: z.string().optional(),
            conditionApplicable: z.boolean().optional(),
          })
        ),
      })
    ),
  }),
});

export const WorkflowValidation = {
  createWorkflowZodSchema,
  updateWorkflowZodSchema,
};
