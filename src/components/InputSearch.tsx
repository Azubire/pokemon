const InputSearch = ({
  startIcon,
  endIcon,
  className,
  style = {},
}: {
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
        required
      />
      {endIcon && endIcon}
    </div>
  );
};

export default InputSearch;
