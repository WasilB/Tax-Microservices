import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
// const Joi = require("joi");
import Joi = require("joi");

@Entity("TaxModel")
export class TaxModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  taxName: string;

  @Column()
  taxPercentage: string;

  @Column()
  name: string;
}

const taxSchema = Joi.object({
  taxName: Joi.string().alphanum().required(),
  taxPercentage: Joi.number().min(0.0).max(100.0).required(),
  name: Joi.string().alphanum().required(),
});

export default taxSchema;
