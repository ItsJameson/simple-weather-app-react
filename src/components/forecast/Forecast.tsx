import { Forecast } from "../../types";
import { DAYS } from "../../constants/days";

const GetForcast: React.FC<Forecast> = ({ forecastday }) => {
    let dayOfWeek: string[] = [];
  
    dayOfWeek = forecastday.map(
      (day) => DAYS[new Date(day.date).getDay()]
    );
  
    const itemElements = forecastday.map((item, index) => (
      <div
        key={index}
        className="bg-pale-blue-color py-4 px-4 rounded-full h-full shadow-lg"
      >
        <p className="py-2 px-1 text-center">{dayOfWeek[index].substring(0,3)}</p>
        <p className="py-2 px-1 text-center">{Math.ceil(item.day.maxtemp_c)}&deg;</p>
        <p className="py-2 px-1 text-center text-text-faded" id="forecase-day-min">
          {Math.ceil(item.day.mintemp_c)}&deg;
        </p>
      </div>
    ));
  
    return (
      <div className="h-full w-full flex flex-row justify-evenly place-self-center py-8">
        {itemElements}
      </div>
    );
  };

  export {GetForcast};