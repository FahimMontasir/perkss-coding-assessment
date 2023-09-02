import { Model, Document } from 'mongoose';

export type IWorkFlow = Document & {
  name: string;
  initBox: string;
  endBox: string;
  conditionalBoxes?: string[];
  actionBoxes?: string[];
};

export type IWorkFlowModel = Model<IWorkFlow>;
