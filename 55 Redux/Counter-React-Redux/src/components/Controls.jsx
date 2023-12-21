import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleMinus = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary" onClick={handleAdd}>
        +1
      </button>

      <button type="button" className="btn btn-success" onClick={handleMinus}>
        -1
      </button>
    </div>
  );
};
export default Controls;
