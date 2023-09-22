import { DAYS } from "../../constants/days";
import { Forecast } from "../../types";

function GetDayOfWeek ({forecastday}:Forecast): JSX.Element {
    let dayOfWeek: string[] = [];
    dayOfWeek = forecastday.map(
      (day: any) => DAYS[new Date(day.date).getDay()]
    );
  
    return(
      <span>{dayOfWeek[0]}</span>
    );
  }

  export {GetDayOfWeek};