interface InputProps {
  id: string;
  placeholder?: string;
  label?: string;
  size?: "md" | "sm";
  type?: "text" | "number" | "password" | "email" | "file" | "date";
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({
  id,
  placeholder = "",
  label = "",
  size = "md",
  type = "text",
  value = "",
  onChange = () => null,
  className = "",
}: InputProps) => {
  return (
    <>
      <label
        htmlFor={id}
        className={`label text-primaryFont mb-2 block ${label ? "" : "hidden"}`}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        className={`input focus:border-inputOutline w-full focus:outline-0 ${size === "md" ? "input-md" : "input-sm"} ${className} `}
      />
    </>
  );
};

export default Input;
