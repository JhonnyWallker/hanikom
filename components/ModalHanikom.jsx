import InputData from "./InputData";

function ModalHanikom() {
  const stopClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="z-20 h-screen w-screen bg-blur absolute bottom-0 left-0 flex justify-center items-center">
      <div className="w-auto bg-white rounded-xl p-10" onClick={stopClick}>
        <InputData />
      </div>
    </div>
  );
}

export default ModalHanikom;
