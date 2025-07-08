const StepLine = ({ active }: { active: boolean }) => {
  return (
    <div
      className={`h-0.5 w-full ${active ? "bg-green-400" : "bg-gray-400"}`}
    ></div>
  );
};

export default StepLine;
