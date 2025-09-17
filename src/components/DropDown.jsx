import { useState } from "react";

export default function DropdownFilter({ label, options }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleOpen = () => setOpen(!open);

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
  };

  const clearSelection = () => {
    setSelected(null);
    setOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Dropdown button */}
      <button
        onClick={toggleOpen}
        className="px-4 py-2 border rounded-lg bg-white shadow-sm flex items-center justify-between w-40"
      >
        {selected ? `${selected}` : label}
        <span className="ml-2">▼</span>
      </button>

      {/* Options */}
      {open && (
        <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg p-2 z-10">
          <p className="text-sm text-purple-600 mb-2">{label}</p>
          {options.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 py-1 cursor-pointer"
            >
              <input
                type="radio"
                name={label}
                value={opt}
                checked={selected === opt}
                onChange={() => handleSelect(opt)}
              />
              {opt}
            </label>
          ))}
          <button
            onClick={clearSelection}
            className="text-sm text-gray-500 mt-2"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
