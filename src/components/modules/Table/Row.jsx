import FontAwesomeIcon from "../FontawesomeIcon/FontawesomeIcon";

const Row = () => {
  return (
    <div className="flex h-full w-full items-center justify-evenly text-sm hover:bg-gray-200 py-1">
      <div className="flex w-full justify-center items-center">
        <span>952900</span>
      </div>
      <div className="flex w-full justify-center items-center">
        <span>چگونه انسان شاد تری باشیم؟</span>
      </div>
      <div className="flex w-full justify-center items-center  manage-buttons">
        <button className="text-white text-md rounded-md py-2 px-3 bg-red-500 hover:bg-red-600">
          <FontAwesomeIcon icon="faTrashCan" />
        </button>
        <button className="text-white text-md rounded-md py-2 px-3 bg-[#008f8fcc] hover:bg-[#007272cc]">
          <FontAwesomeIcon icon="faPenToSquare" />
        </button>
      </div>
    </div>
  );
};

export default Row;
