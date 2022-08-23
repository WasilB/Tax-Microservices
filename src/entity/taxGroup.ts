import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import Joi = require("joi");

@Entity("TaxGroup")
export class TaxGroup {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
}

const taxGroupSchema = Joi.object({
  name: Joi.string().alphanum().required(),
});

export default taxGroupSchema;
