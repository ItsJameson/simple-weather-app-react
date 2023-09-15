import { DAYS } from "../../constants/days";

const GetDayOfWeek: React.FC<any> = ({forecastday}) =>{
    let dayOfWeek: string[] = [];
    dayOfWeek = forecastday.map(
      (day: any) => DAYS[new Date(day.date).getDay()]
    );
  
    return(
      <span>{dayOfWeek[0]}</span>
    );
  }

  export {GetDayOfWeek};