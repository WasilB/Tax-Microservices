import { Request, Response } from "express";
import { TaxModel } from "../entity/tax";
import { Double, getManager } from "typeorm";
//const taxSchema = require("../entity/tax");
import taxSchema from "../entity/tax";

export class TaxController {
  async getAllTaxes(req: Request, res: Response) {
    try {
      const taxRepository = getManager().getRepository(TaxModel);
      const tax = await taxRepository.find();

      res.status(200).json({
        success: true,
        data: tax,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Error",
      });
    }
  }

  async getTaxesById(req: Request, res: Response) {
    try {
      const taxRepository = getManager().getRepository(TaxModel);
      const tax = await taxRepository.findOne({
        id: req.params.id,
      });

      res.status(200).json({
        success: true,
        data: tax,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Error",
      });
    }
  }

  //   async deleteTaxById(req: Request, res: Response) {
  //     const taxRepository = getManager().getRepository(TaxModel);
  //     const tax = await taxRepository.delete({
  //       id: req.params.id,
  //     });

  //     res.send(tax);
  //   }

  async createNewTax(req: Request, res: Response) {
    const { error, value } = taxSchema.validate(req.body);
    if (error) {
      res.send(error);
    } else {
      try {
        console.log("create ", req.body);
        const taxRepository = getManager().getRepository(TaxModel);
        const tax = await taxRepository.save(req.body);

        res.status(200).json({
          success: true,
          data: tax,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: "Error",
        });
      }
    }
  }

  // async updateAccountype(req: Request, res: Response) {
  //     console.log("update body ",req.body);
  //     console.log("update query ",req.query);

  //     const accountTypeRepository = getManager().getRepository(TaxModel);
  //     const accountType = await accountTypeRepository.update({ id: req.query.id }, req.body);
  //     res.send(accountType);
  // }
}
