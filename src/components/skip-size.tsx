import type { skipdata } from "../lib/types";

export default function SkipSize({ skipdata }: { skipdata: skipdata }) {
  return (
    <div className="p-4 shadow-sm sm:p-4 rounded-xl hover:bg-sky-100 transition-colors duration-200">
      <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700">
        <div className="flex justify-between items-center">
          <span className="font-medium">Size:</span>
          <span>{skipdata.size} cubic yards</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Hire Period:</span>
          <span>{skipdata.hire_period_days} days</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Price:</span>
          <span>£{skipdata.price_before_vat}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">VAT:</span>
          <span>{skipdata.vat}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Road Allowed:</span>
          <span
            className={
              skipdata.allowed_on_road ? "text-emerald-600" : "text-red-600"
            }
          >
            {skipdata.allowed_on_road ? "Yes" : "No"}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Heavy Waste:</span>
          <span
            className={
              skipdata.allows_heavy_waste ? "text-emerald-600" : "text-red-600"
            }
          >
            {skipdata.allows_heavy_waste ? "Yes" : "No"}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Postcode:</span>
          <span>{skipdata.postcode}</span>
        </div>
      </div>
    </div>
  );
}
