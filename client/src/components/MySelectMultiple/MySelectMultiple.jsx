import { useEffect, useState } from "react";
import style from "./MySelectMultiple.module.css";

const MySelectMultiple = (props) => {
  const { options, onSelectedOptions } = props;

  const [inputs, setInputs] = useState([]);
  const [visibility, setVisibility] = useState(false);

  const handlerClick = (e) => {
    const id = e.target.id;

    if (inputs.length === 0) {
      options.find((o) => o.id === id).checked = true;
      setInputs([...inputs, id]);
    } else {
      const repetedId = inputs?.find((i) => i === id);
      if (!repetedId) {
        options.find((o) => o.id === id).checked = true;
        setInputs([...inputs, id]);
      } else {
        const cleanInput = inputs?.filter((i) => i !== id);
        setInputs(cleanInput);
        options.find((o) => o.id === id).checked = false;
      }
    }
  };

  const handlerClickVisibility = () => {
    setVisibility(!visibility);
  };

  useEffect(() => {
    onSelectedOptions(inputs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs]);

  return (
    <div className={style.containerSelect}>
      <input
        type="text"
        name="searchSelect"
        id="searchSelect"
        onClick={handlerClickVisibility}
        className={style.containerHeader}
      />
      {visibility && (
        <div
          className={style.containerOptions}
          onMouseLeave={() => setVisibility(false)}
        >
          {options?.map((opc) => {
            return (
              <div key={opc.id}>
                <input
                  type="checkbox"
                  id={opc.id}
                  name={opc.value}
                  onChange={handlerClick}
                  checked={opc.checked}
                />
                <label htmlFor={opc.id}>{opc.value}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MySelectMultiple;
