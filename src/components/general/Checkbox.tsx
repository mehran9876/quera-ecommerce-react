// this component needs checked prop to work properly and onChange to change when clicked

// import { useState } from "react";
// import { useSearchParams } from "react-router";

interface CheckboxProps {
  id: string;
  label: string;
  checked?: boolean;
  onChange: (id: string) => void;
  color?: string;
}
const Checkbox = ({
  id,
  label,
  checked = false,
  onChange = () => {},
  color,
}: CheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      <input
        className={`checkbox h-4 w-4 rounded border-[#637381] bg-white p-0.5 ${color ? `checked:bg-[${color}]` : "checked:bg-primaryBtnPink"}`}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => onChange(id)}
      />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
