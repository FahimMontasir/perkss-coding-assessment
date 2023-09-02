import { Schema, model } from 'mongoose';
import { IWorkFlow, IWorkFlowModel } from './workflow.interface';

const workflowSchema = new Schema<IWorkFlow>(
  {
    name: { type: String, required: true, unique: true },
    initBox: { type: String, required: true },
    endBox: { type: String, required: true },
    conditionalBoxes: [{ type: String }],
    actionBoxes: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const Workflow = model<IWorkFlow, IWorkFlowModel>('Workflow', workflowSchema);
