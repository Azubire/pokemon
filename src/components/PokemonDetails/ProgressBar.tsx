const ProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="flex-1 bg-[#CBCB]  h-2 ">
      <div className="bg-primary h-2 " style={{ width: `${value}%` }}></div>
    </div>
  );
};

export default ProgressBar;
