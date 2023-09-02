import express from 'express';
import { WorkflowController } from './workflow.controller';
import validateRequest from '../../middlewares/validateRequest';
import { WorkflowValidation } from './workflow.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(WorkflowValidation.createWorkflowZodSchema),
  WorkflowController.createWorkflow
);

router.get('/:id', WorkflowController.getWorkflow);

router.get('/', WorkflowController.getAllWorkflows);

router.patch(
  '/:id',
  validateRequest(WorkflowValidation.updateWorkflowZodSchema),
  WorkflowController.updateWorkflow
);

router.delete('/:id', WorkflowController.deleteWorkflow);

export const WorkflowRoutes = router;
