import * as express from "express";
import { TaxController } from "../controller/tax.controller";
const taxRouter = express.Router();
const taxController = new TaxController();

taxRouter.post("/", taxController.createNewTax);
// taxRouter.put("/update", taxController.updateAccountype);
// taxRouter.delete("/:id", taxController.deleteTaxById);
taxRouter.get("/:id", taxController.getTaxesById);
taxRouter.get("/", taxController.getAllTaxes);

export default taxRouter;
