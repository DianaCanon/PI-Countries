export const ValidateActivity = (activity) => {
  let errors = {};
  let regexDifficulty = /^[1-5]$/;
  let regexSpecialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  !activity.name &&
    (errors.name = "Diligenciar nombre de la actividad turística");
  if (activity.name) {
    let arrayName = activity.name?.split("").find((a) => Number(a));
    arrayName && (errors.name = "Nombre actividad no puede contener números");

    regexSpecialCharacters.test(activity.name) &&
      (errors.name = "Este campo no puede contener caracteres especiales");
  }

  !activity.difficulty &&
    (errors.difficulty = "Diligenciar grado de dificultad escala de 1 a 5");
  activity.difficulty &&
    !regexDifficulty.test(activity.difficulty) &&
    (errors.difficulty = "Dificultad debe estar en una escala de 1 a 5");

  !activity.duration && (errors.duration = "Este campo no puede estar vacio");
  if (activity.duration) {
    let arrayDuration = activity.duration?.split("").find((d) => isNaN(d));
    arrayDuration && (errors.duration = "Duración no debe contener letras");

    regexSpecialCharacters.test(activity.duration) &&
      (errors.duration = "Este campo no puede contener caracteres especiales");
  }

  !activity.season && (errors.season = "Este campo no puede estar vacio");

  return errors;
};
