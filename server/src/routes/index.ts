import express from "express";
import { WorkflowRoutes } from "../modules/workflow/workflow.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/workflow",
    route: WorkflowRoutes,
  },
];

moduleRoutes.map((r) => router.use(r.path, r.route));

export default router;
