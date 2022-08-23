import * as express from "express";
import { TaxGroupController } from "../controller/taxGroup.controller";
const taxGroupRouter = express.Router();
const taxGroupController = new TaxGroupController();

taxGroupRouter.post("/", taxGroupController.insertNewTaxGroup);
// taxGroupRouter.put("/update", taxGroupController.updateCategory);
// taxGroupRouter.delete("/delete", taxGroupController.deleteCategoryById);
// taxGroupRouter.get("/:id", taxGroupController.getCategoryById);
taxGroupRouter.get("/", taxGroupController.getAllTaxGroup);


export default taxGroupRouter;