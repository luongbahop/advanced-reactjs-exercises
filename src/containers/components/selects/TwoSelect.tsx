import React from "react";
import AutoFilterDropdown from "../../../components/select";
import { Country, State } from "../../../interfaces";

const countries: Country[] = [
  {
    name: "United States",
    code: "US",
    states: [
      { name: "California" },
      { name: "Texas" },
      { name: "New York" },
      { name: "Florida" },
      { name: "Illinois" },
    ],
  },
  {
    name: "Canada",
    code: "CA",
    states: [
      { name: "Ontario" },
      { name: "Quebec" },
      { name: "British Columbia" },
      { name: "Alberta" },
      { name: "Manitoba" },
      { name: "Saskatchewan" },
    ],
  },
  {
    name: "Australia",
    code: "AU",
    states: [
      { name: "New South Wales" },
      { name: "Victoria" },
      { name: "Queensland" },
      { name: "Western Australia" },
      { name: "South Australia" },
      { name: "Tasmania" },
      { name: "Australian Capital Territory" },
      { name: "Northern Territory" },
    ],
  },
  {
    name: "India",
    code: "IN",
    states: [
      { name: "Andhra Pradesh" },
      { name: "Arunachal Pradesh" },
      { name: "Assam" },
      { name: "Bihar" },
      { name: "Chhattisgarh" },
      { name: "Goa" },
    ],
  },
];

const TwoSelect: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(
    null
  );
  const [selectedState, setSelectedState] = React.useState<State | null>(null);

  const handleCountryChange = (selectedValue: Country): void => {
    console.log("selectedCountry", selectedValue);
    setSelectedCountry(selectedValue);
    setSelectedState(null);
  };

  const handleStateChange = (selectedValue: State): void => {
    console.log("selectedState", selectedValue);
    setSelectedState(selectedValue);
  };

  return (
    <div style={{ display: "block" }}>
      <h4>Two Selects Example </h4>
      <div className="select-example" style={{ display: "flex" }}>
        <div className="country-item" style={{ paddingRight: "10px" }}>
          <AutoFilterDropdown<Country>
            value={selectedCountry}
            data={countries}
            filterKey={"name"}
            placeholder="Type to filter country"
            valueChange={handleCountryChange}
          />
        </div>
        {selectedCountry && (
          <div className="state-item">
            <AutoFilterDropdown<State>
              value={selectedState}
              data={selectedCountry?.states || []}
              filterKey={"name"}
              placeholder="Type to filter state"
              valueChange={handleStateChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TwoSelect;
