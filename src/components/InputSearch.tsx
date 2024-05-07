const InputSearch = ({
  value,
  onChange,
  startIcon,
  endIcon,
  className,
  style = {},
}: {
  value: string;
  onChange: (value: string) => void;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  className: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div className="relative">
      {startIcon && startIcon}
      <input
        type="search"
        id="pokemon-search"
        className={className}
        style={style}
        placeholder="Enter pokemon name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      {endIcon && endIcon}
    </div>
  );
};

export default InputSearch;
