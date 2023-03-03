const ModifyActivities = () => {
  return (
    <div>
      <label htmlFor="activity">activity</label>
      <input
        id="activity"
        name="activity"
        placeholder="escribe el nombre de la actividad"
      ></input>
      <label htmlFor="countries">Pais a agregar</label>
      <input id="countries" name="countries"></input>
      <button>Agregar País a una Actividad</button>
    </div>
  );
};

export default ModifyActivities;
