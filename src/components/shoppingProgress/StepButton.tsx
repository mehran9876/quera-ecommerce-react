const StepButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer flex-col items-center gap-2"
    >
      <span className={`w-max ${active ? "text-green-400" : "text-gray-400"}`}>
        {children}
      </span>{" "}
      {active && <div className={`h-4.5 w-4.5 bg-green-400`}></div>}
    </button>
  );
};

export default StepButton;
