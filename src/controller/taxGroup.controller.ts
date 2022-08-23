import { Request, Response } from "express";
import { TaxGroup } from "../entity/taxGroup";
import { Double, getManager } from "typeorm";
import taxGroupSchema from "../entity/taxGroup";

export class TaxGroupController {
  async getAllTaxGroup(req: Request, res: Response) {
    try {
      const taxGroupRepository = getManager().getRepository(TaxGroup);
      const taxGroup = await taxGroupRepository.find();

      res.status(400).json({
        success: true,
        Data: taxGroup,
      });
    } catch (error) {
      res.status(200).json({
        success: false,
        message: "Error",
      });
    }
  }

  // async getCategoryById(req: Request, res: Response) {
  //     const categoryRepository = getManager().getRepository(TaxGroup);
  //     const category = await categoryRepository.findOne({
  //         id: req.params.id
  //     });

  //     res.send(category);
  // };

  // async deleteCategoryById(req: Request, res: Response) {
  //     const categoryRepository = getManager().getRepository(TaxGroup);
  //     const category = await categoryRepository.delete({
  //         id: req.query.id
  //     });

  //     res.send(category);
  // };

  async insertNewTaxGroup(req: Request, res: Response) {
    const { error, value } = taxGroupSchema.validate(req.body);
    if (error) {
      res.send(error);
    } else {
      try {
        console.log("create ", req);
        const taxGroupRepository = getManager().getRepository(TaxGroup);
        const taxGroup = await taxGroupRepository.save(req.body);

        res.status(400).json({
          success: true,
          Data: taxGroup,
        });
      } catch (error) {
        res.status(200).json({
          success: false,
          message: "Error",
        });
      }
    }
  }

  // async updateCategory(req: Request, res: Response) {
  //     console.log("update body ",req.body);
  //     console.log("update query ",req.query);

  //     const categoryRepository = getManager().getRepository(TaxGroup);
  //     const category = await categoryRepository.update({ id: req.query.id }, req.body);
  //     res.send(category);
  // }
}
