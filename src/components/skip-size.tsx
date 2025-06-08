import type { skipdata } from "../lib/types";

export default function SkipSize({ skipdata }: { skipdata: skipdata }) {
  return (
    <div className="p-4 rounded-2xl border">
      <div className="space-y-2 text-gray-700">
        <div>
          <span className="font-medium">Skip Size:</span> {skipdata.size} cubic
          yards
        </div>
        <div>
          <span className="font-medium">Hire Period:</span>{" "}
          {skipdata.hire_period_days} days
        </div>
        <div>
          <span className="font-medium">Price Before VAT:</span> £
          {skipdata.price_before_vat}
        </div>
        <div>
          <span className="font-medium">VAT:</span> {skipdata.vat}%
        </div>
        <div>
          <span className="font-medium">Allowed on Road:</span>{" "}
          {skipdata.allowed_on_road ? "Yes" : "No"}
        </div>
        <div>
          <span className="font-medium">Allows Heavy Waste:</span>{" "}
          {skipdata.allows_heavy_waste ? "Yes" : "No"}
        </div>
        <div>
          <span className="font-medium">Postcode:</span> {skipdata.postcode}
        </div>
      </div>
    </div>
  );
}
