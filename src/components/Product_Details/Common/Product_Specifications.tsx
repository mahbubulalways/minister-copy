import React from "react";
import { TVSpecifications } from "../Television_Details/Television_Details";
import {
  ACOperations,
  ACTechnicalSpecifications,
  TRefrigerator,
} from "@/types";

interface SpecificationsProps {
  obj:
    | TVSpecifications
    | ACTechnicalSpecifications
    | ACOperations
    | TRefrigerator;
}

const Product_Specifications: React.FC<SpecificationsProps> = ({ obj }) => {
  if (!obj) {
    return null; // or you could return some other fallback UI
  }
  const { _id, __v, ...filteredSpecification } = obj;
  return (
    <div>
      <table className="min-w-full bg-white">
        <tbody>
          {Object.entries(filteredSpecification).map(([key, value]) => (
            <tr key={key}>
              <td className="py-2">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </td>
              <td className="py-2">
                {Array.isArray(value) ? value.join(", ") : value.toString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product_Specifications;
