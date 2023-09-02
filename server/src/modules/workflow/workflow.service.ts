import ApiError from '../../errors/ApiError';
import { IWorkFlow } from './workflow.interface';
import { Workflow } from './workflow.model';

const createWorkflow = async (payload: IWorkFlow): Promise<IWorkFlow | null> => {
  const result = await Workflow.create(payload);
  if (!result) {
    throw new ApiError(404, 'No workflow created');
  }
  return result;
};

const getWorkflow = async (id: string): Promise<IWorkFlow | null> => {
  const result = await Workflow.findById(id);
  if (!result) {
    throw new ApiError(404, 'No workflow found');
  }
  return result;
};

const getAllWorkflows = async (): Promise<IWorkFlow[] | null> => {
  const results = await Workflow.find();

  if (!results.length) {
    throw new ApiError(404, 'No Workflow found');
  }

  return results;
};

const updateWorkflow = async (
  id: string,
  payload: Partial<IWorkFlow>
): Promise<IWorkFlow | null> => {
  const isExitsWorkflow = await Workflow.exists({ _id: id });
  if (!isExitsWorkflow) {
    throw new ApiError(404, 'Workflow not found.');
  }

  const result = await Workflow.findOneAndUpdate({ _id: id }, payload, { new: true });

  return result;
};

const deleteWorkflow = async (id: string): Promise<IWorkFlow | null> => {
  const result = await Workflow.findByIdAndDelete(id);
  if (!result) {
    throw new ApiError(409, 'Workflow already deleted');
  }

  return result;
};

export const WorkflowService = {
  createWorkflow,
  getWorkflow,
  getAllWorkflows,
  updateWorkflow,
  deleteWorkflow,
};
