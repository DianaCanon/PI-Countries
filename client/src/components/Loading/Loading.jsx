import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.container}>
      <div className={style.loadingCountries}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
