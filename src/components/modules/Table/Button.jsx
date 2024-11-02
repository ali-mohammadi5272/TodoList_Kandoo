import FontAwesomeIcon from "../FontawesomeIcon/FontawesomeIcon";

const Button = ({ className, onClick, icon }) => {
  return (
    <button
      className={`text-white text-md rounded-md pt-1 px-3 pb-2 ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default Button;
