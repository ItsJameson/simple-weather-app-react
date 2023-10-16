import { DAYS } from "../../constants/days";
import { Forecast } from "../../types";

export default function GetDayOfWeek({ forecastday }: Forecast): JSX.Element {
  let dayOfWeek: string[] = [];
  dayOfWeek = forecastday.map((day: any) => DAYS[new Date(day.date).getDay()]);

  return <span>{dayOfWeek[0]}</span>;
}
