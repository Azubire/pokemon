import logo from "../assets/logo.svg";

const Logo = ({ className }: { className: string }) => {
  return <img src={logo} alt="pokeman logo" className={className} />;
};

export default Logo;
