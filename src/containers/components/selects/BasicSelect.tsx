import React from "react";
import AutoFilterDropdown from "../../../components/select";
import { Category } from "../../../interfaces";

const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    description: "Electronic Items",
  },
  {
    id: 2,
    name: "Clothes",
    description: "Clothing Items",
  },
  {
    id: 3,
    name: "Books",
    description: "Reading Materials",
  },
  {
    id: 4,
    name: "Furniture",
    description: "Furniture Items",
  },
  {
    id: 5,
    name: "Toys",
    description: "Play Items",
  },
  {
    id: 6,
    name: "Food",
    description: "Eating Items",
  },
  {
    id: 7,
    name: "Stationary",
    description: "Writing Items",
  },
  {
    id: 8,
    name: "Sports",
    description: "Sports Items",
  },
];

const BasicSelect: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    React.useState<Category | null>(null);

  const handleCategoryChange = (selectedValue: Category): void => {
    console.log("selectedCategory", selectedValue);
    setSelectedCategory(selectedValue);
  };

  return (
    <div style={{ display: "block" }}>
      <h4>Basic Example</h4>
      <div className="select-example" style={{ display: "flex" }}>
        <div className="country-item" style={{ paddingRight: "10px" }}>
          <AutoFilterDropdown<Category>
            value={selectedCategory}
            data={categories}
            filterKey={"name"}
            valueChange={handleCategoryChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicSelect;
