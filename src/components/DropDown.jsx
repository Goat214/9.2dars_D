import { useState } from "react";


export default function DropdownFilter({ label, options, onChange }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleOpen = () => setOpen(!open);

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
    if (onChange) {
      onChange(value); 
    }
  };

  const clearSelection = () => {
    setSelected(null);
    setOpen(false);
    if (onChange) {
      onChange(null); 
    }
  };

  return (
    <div className="dropdown">
      <button
        onClick={toggleOpen}
        className={`dropdown-btn ${open ? "active" : ""}`}
      >
        {selected ? `${selected}` : label}
        <span className="arrow"><img src="../images/icon-chevron-down.svg" alt="" /></span>
      </button>

      {open && (
        <div className="dropdown-menu">
          <p className="dropdown-label">{label}</p>
          <div className="options">
            {options.map((opt) => (
              <label key={opt} className="option">
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
          </div>
          <button onClick={clearSelection} className="clear-btn">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
