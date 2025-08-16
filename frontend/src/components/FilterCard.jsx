import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

export const FilterCard = () => {
  return (
    <div className="w-full bg-white p-5 rounded-lg shadow-sm border">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="my-3" />
      <RadioGroup.Root className="space-y-5">
        {filterData.map((data, index) => (
          <div key={index}>
            <h2 className="font-semibold text-gray-700 mb-2">{data.filterType}</h2>
            {data.array.map((item, idx) => {
              const itemId = `radio-${index}-${idx}`;
              return (
                <div key={itemId} className="flex items-center space-x-2 my-1">
                  <RadioGroup.Item
                    value={item}
                    id={itemId}
                    className="w-4 h-4 rounded-full border border-gray-400 
                               data-[state=checked]:bg-blue-500 
                               flex items-center justify-center"
                  >
                    <RadioGroup.Indicator className="w-2 h-2 rounded-full bg-white" />
                  </RadioGroup.Item>
                  <Label htmlFor={itemId} className="text-gray-600 cursor-pointer">
                    {item}
                  </Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup.Root>
    </div>
  );
};
