interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  inputSize?: "md" | "sm";
  className?: string;
}

const Input = ({
  id,
  placeholder = "",
  label = "",
  inputSize = "md",
  type = "text",
  value = "",
  onChange = () => null,
  className = "",
  ...rest
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
        className={`input focus:border-inputOutline w-full focus:outline-0 ${inputSize === "md" ? "input-md" : "input-sm"} ${className} `}
        {...rest}
      />
    </>
  );
};

export default Input;
