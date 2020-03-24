export default {
  headNeckAreaPoint: (state) => {
    let result = 0;
    if (state.HeadNeck.area.areaPercent >= 90
        && state.HeadNeck.area.areaPercent <= 100) result = 6;
    if (state.HeadNeck.area.areaPercent >= 70
        && state.HeadNeck.area.areaPercent <= 89) result = 5;
    if (state.HeadNeck.area.areaPercent >= 50
        && state.HeadNeck.area.areaPercent <= 69) result = 4;
    if (state.HeadNeck.area.areaPercent >= 30
        && state.HeadNeck.area.areaPercent <= 49) result = 3;
    if (state.HeadNeck.area.areaPercent >= 10
        && state.HeadNeck.area.areaPercent <= 29) result = 2;
    if (state.HeadNeck.area.areaPercent >= 1
        && state.HeadNeck.area.areaPercent <= 9) result = 1;
    return result;
  },
  upperExtremitiesAreaPoint: (state) => {
    let result = 0;
    if (state.UpperExtremities.area.areaPercent >= 90
        && state.UpperExtremities.area.areaPercent <= 100) result = 6;
    if (state.UpperExtremities.area.areaPercent >= 70
        && state.UpperExtremities.area.areaPercent <= 89) result = 5;
    if (state.UpperExtremities.area.areaPercent >= 50
        && state.UpperExtremities.area.areaPercent <= 69) result = 4;
    if (state.UpperExtremities.area.areaPercent >= 30
        && state.UpperExtremities.area.areaPercent <= 49) result = 3;
    if (state.UpperExtremities.area.areaPercent >= 10
        && state.UpperExtremities.area.areaPercent <= 29) result = 2;
    if (state.UpperExtremities.area.areaPercent >= 1
        && state.UpperExtremities.area.areaPercent <= 9) result = 1;
    return result;
  },
  trunkAreaPoint: (state) => {
    let result = 0;
    if (state.Trunk.area.areaPercent >= 90
        && state.Trunk.area.areaPercent <= 100) result = 6;
    if (state.Trunk.area.areaPercent >= 70
        && state.Trunk.area.areaPercent <= 89) result = 5;
    if (state.Trunk.area.areaPercent >= 50
        && state.Trunk.area.areaPercent <= 69) result = 4;
    if (state.Trunk.area.areaPercent >= 30
        && state.Trunk.area.areaPercent <= 49) result = 3;
    if (state.Trunk.area.areaPercent >= 10
        && state.Trunk.area.areaPercent <= 29) result = 2;
    if (state.Trunk.area.areaPercent >= 1
        && state.Trunk.area.areaPercent <= 9) result = 1;
    return result;
  },
  lowerExtremitiesAreaPoint: (state) => {
    let result = 0;
    if (state.LowerExtremities.area.areaPercent >= 90
        && state.LowerExtremities.area.areaPercent <= 100) result = 6;
    if (state.LowerExtremities.area.areaPercent >= 70
        && state.LowerExtremities.area.areaPercent <= 89) result = 5;
    if (state.LowerExtremities.area.areaPercent >= 50
        && state.LowerExtremities.area.areaPercent <= 69) result = 4;
    if (state.LowerExtremities.area.areaPercent >= 30
        && state.LowerExtremities.area.areaPercent <= 49) result = 3;
    if (state.LowerExtremities.area.areaPercent >= 10
        && state.LowerExtremities.area.areaPercent <= 29) result = 2;
    if (state.LowerExtremities.area.areaPercent >= 1
        && state.LowerExtremities.area.areaPercent <= 9) result = 1;
    return result;
  },
  pdfData: (state) => {
    const pdf = {
      Report_Date: state.reportDate,
      Patient_Name: state.patientName,
      Gender: state.gender,
      Age: state.age,
      IGA: state.IGA,
      BSA: `${state.BSA}%`,
      EASI_Score: state.EASI,
      Interpretation: state.interpretation,
      H_BodyScore: state.HeadNeck.bodypartScore,
      H_Area: `${state.HeadNeck.area.areaScore}(${state.HeadNeck.area.areaPercent}%)`,
      H_Er: state.HeadNeck.symptom.Erythema,
      H_Ed: state.HeadNeck.symptom.EdemaPapulation,
      H_Ex: state.HeadNeck.symptom.Excoriation,
      H_Li: state.HeadNeck.symptom.Lichenification,
      U_BodyScore: state.UpperExtremities.bodypartScore,
      U_Area: `${state.UpperExtremities.area.areaScore}(${state.UpperExtremities.area.areaPercent}%)`,
      U_Er: state.UpperExtremities.symptom.Erythema,
      U_Ed: state.UpperExtremities.symptom.EdemaPapulation,
      U_Ex: state.UpperExtremities.symptom.Excoriation,
      U_Li: state.UpperExtremities.symptom.Lichenification,
      T_BodyScore: state.Trunk.bodypartScore,
      T_Area: `${state.Trunk.area.areaScore}(${state.Trunk.area.areaPercent}%)`,
      T_Er: state.Trunk.symptom.Erythema,
      T_Ed: state.Trunk.symptom.EdemaPapulation,
      T_Ex: state.Trunk.symptom.Excoriation,
      T_Li: state.Trunk.symptom.Lichenification,
      L_BodyScore: state.LowerExtremities.bodypartScore,
      L_Area: `${state.LowerExtremities.area.areaScore}(${state.LowerExtremities.area.areaPercent}%)`,
      L_Er: state.LowerExtremities.symptom.Erythema,
      L_Ed: state.LowerExtremities.symptom.EdemaPapulation,
      L_Ex: state.LowerExtremities.symptom.Excoriation,
      L_Li: state.LowerExtremities.symptom.Lichenification,
    };
    return pdf;
  },
  ChestI: state => state['Chest & Shoulder']['Chest-I'].weight * state['Chest & Shoulder']['Chest-I'].reps * state['Chest & Shoulder']['Chest-I'].sets,
  ChestII: state => state['Chest & Shoulder']['Chest-II'].weight * state['Chest & Shoulder']['Chest-II'].reps * state['Chest & Shoulder']['Chest-II'].sets,
  ShoulderI: state => state['Chest & Shoulder']['Shoulder-I'].weight * state['Chest & Shoulder']['Shoulder-I'].reps * state['Chest & Shoulder']['Shoulder-I'].sets,
  ShoulderII: state => state['Chest & Shoulder']['Shoulder-II'].weight * state['Chest & Shoulder']['Shoulder-II'].reps * state['Chest & Shoulder']['Shoulder-II'].sets,
  TricepsI: state => state['Biceps & Triceps']['Triceps-I'].weight * state['Biceps & Triceps']['Triceps-I'].reps * state['Biceps & Triceps']['Triceps-I'].sets,
  TricepsII: state => state['Biceps & Triceps']['Triceps-II'].weight * state['Biceps & Triceps']['Triceps-II'].reps * state['Biceps & Triceps']['Triceps-II'].sets,
  BicepsI: state => state['Biceps & Triceps']['Biceps-I'].weight * state['Biceps & Triceps']['Biceps-I'].reps * state['Biceps & Triceps']['Biceps-I'].sets,
  BicepsII: state => state['Biceps & Triceps']['Biceps-II'].weight * state['Biceps & Triceps']['Biceps-II'].reps * state['Biceps & Triceps']['Biceps-II'].sets,
  BacksideI: state => state['Abs & Backside']['Backside-I'].weight * state['Abs & Backside']['Backside-I'].reps * state['Abs & Backside']['Backside-I'].sets,
  BacksideII: state => state['Abs & Backside']['Backside-II'].weight * state['Abs & Backside']['Backside-II'].reps * state['Abs & Backside']['Backside-II'].sets,
  AbsI: state => state['Abs & Backside']['Abs-I'].weight * state['Abs & Backside']['Abs-I'].reps * state['Abs & Backside']['Abs-I'].sets,
  AbsII: state => state['Abs & Backside']['Abs-II'].weight * state['Abs & Backside']['Abs-II'].reps * state['Abs & Backside']['Abs-II'].sets,
  LegI: state => state['Buttocks & Leg']['Leg-I'].weight * state['Buttocks & Leg']['Leg-I'].reps * state['Buttocks & Leg']['Leg-I'].sets,
  LegII: state => state['Buttocks & Leg']['Leg-II'].weight * state['Buttocks & Leg']['Leg-II'].reps * state['Buttocks & Leg']['Leg-II'].sets,
  ButtocksI: state => state['Buttocks & Leg']['Buttocks-I'].weight * state['Buttocks & Leg']['Buttocks-I'].reps * state['Buttocks & Leg']['Buttocks-I'].sets,
  ButtocksII: state => state['Buttocks & Leg']['Buttocks-II'].weight * state['Buttocks & Leg']['Buttocks-II'].reps * state['Buttocks & Leg']['Buttocks-II'].sets,
};
