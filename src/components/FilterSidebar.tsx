"use client";

import { useState } from "react";

function FilterSection({
  title,
  options,
}: {
  title: string;
  options: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="filter-section">
      <button
        className="filter-section__header"
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span className={`arrow ${open ? "open" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="filter-section__content">
          {options.map((option) => (
            <label key={option} className="custom-checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FilterSidebar() {
  return (
    <aside className="filter-sidebar" aria-label="Product filters">
      <h3 className="filter-sidebar__title">CUSTOMIZABLE</h3>

      <label className="custom-checkbox">
        <input type="checkbox" defaultChecked />
        <span className="checkmark"></span>
        All
      </label>

      <FilterSection
        title="IDEAL FOR"
        options={["Men", "Women", "Kids & Babies"]}
      />

      <FilterSection
        title="OCCASION"
        options={["Casual", "Formal", "Party"]}
      />

      <FilterSection
        title="WORK"
        options={["Office", "Outdoor"]}
      />

      <FilterSection
        title="FABRIC"
        options={["Cotton", "Wool", "Silk"]}
      />

      <FilterSection
        title="SEGMENT"
        options={["Premium", "Budget"]}
      />

      <FilterSection
        title="SUITABLE FOR"
        options={["Daily Wear", "Travel"]}
      />

      <FilterSection
        title="RAW MATERIALS"
        options={["Organic", "Synthetic"]}
      />

      <FilterSection
        title="PATTERN"
        options={["Solid", "Printed"]}
      />
    </aside>
  );
}
