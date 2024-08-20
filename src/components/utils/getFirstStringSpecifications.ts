import {
  ACTechnicalSpecifications,
  TOvenSpecifications,
  TRefrigerator,
  TWashingMachineSpecification,
} from "@/types";
import { TVSpecifications } from "../Product_Details/Television_Details/Television_Details";

export const getFirstStringSpecifications = (
  specs:
    | TVSpecifications
    | ACTechnicalSpecifications
    | TRefrigerator
    | TWashingMachineSpecification
    | TOvenSpecifications,
  count: number
): [string, string][] => {
  // Remove the _id and __v properties
  const { _id, __v, ...filteredSpecs } = specs;

  // Get entries of the filtered object
  const entries = Object.entries(filteredSpecs);

  // Filter entries to only include string values
  const stringEntries = entries.filter(
    ([key, value]) => typeof value === "string"
  );

  // Return the first 'count' entries
  return stringEntries.slice(0, count) as [string, string][];
};
