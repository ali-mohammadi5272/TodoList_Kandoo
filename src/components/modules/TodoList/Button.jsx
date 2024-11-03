import FontAwesomeIcon from "../FontawesomeIcon/FontawesomeIcon";

const Button = ({ className, onClick, icon, text }) => {
  return (
    <button
      className={`text-white text-md rounded-md py-1 px-3 ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {text ? text : <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

export default Button;
