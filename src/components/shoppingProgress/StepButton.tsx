interface StepButtonI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const StepButton = ({ active, disabled, onClick, children }: StepButtonI) => {
  return (
    <button
      onClick={onClick}
      className={`flex ${!disabled ? "cursor-pointer" : ""} flex-col items-center gap-2`}
      disabled={disabled}
    >
      <span className={`w-max ${active ? "text-green-400" : "text-gray-400"}`}>
        {children}
      </span>{" "}
      {active && <div className={`h-4.5 w-4.5 bg-green-400`}></div>}
    </button>
  );
};

export default StepButton;
