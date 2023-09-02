import { Model, Document } from 'mongoose';

export type IWorkFlow = Document & {
  name: string;
  initBox: string;
  endBox: string;
  conditionalBoxes?: {
    condition: string;
    actions: { actionName: string; conditionApplicable: boolean }[];
  }[];
};

export type IWorkFlowModel = Model<IWorkFlow>;
