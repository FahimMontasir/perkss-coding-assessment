import { WorkflowService } from './workflow.service';
import { catchAsync } from '../../shared/catchAsync';
import { sendResponse } from '../../shared/sendResponse';

const createWorkflow = catchAsync(async (req, res) => {
  const data = await WorkflowService.createWorkflow(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Workflow created successfully',
    data,
  });
});

const getWorkflow = catchAsync(async (req, res) => {
  const data = await WorkflowService.getWorkflow(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Workflow retrieved successfully',
    data,
  });
});

const getAllWorkflows = catchAsync(async (req, res) => {
  const data = await WorkflowService.getAllWorkflows();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Workflows retrieved successfully',
    data,
  });
});

const updateWorkflow = catchAsync(async (req, res) => {
  const data = await WorkflowService.updateWorkflow(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Workflow updated successfully',
    data,
  });
});

const deleteWorkflow = catchAsync(async (req, res) => {
  const data = await WorkflowService.deleteWorkflow(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Workflow deleted successfully',
    data,
  });
});

export const WorkflowController = {
  createWorkflow,
  getWorkflow,
  getAllWorkflows,
  updateWorkflow,
  deleteWorkflow,
};
