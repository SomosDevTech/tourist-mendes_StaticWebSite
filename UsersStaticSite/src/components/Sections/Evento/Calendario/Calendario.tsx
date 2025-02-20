import { ChevronDown, ChevronUp, Clock } from 'lucide-react';
import React, { useState } from 'react';
import CalendarioCard from '../../../Cards/CalendarioCard/CalendarioCard';
import useMediaQuery from './../../../../hooks/useMediaQuery';

export interface Appointments {
  start: Date;
  final: Date;
};

interface Props {
  schedule: Appointments[];
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
  const weekdays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

  return {
    month: months[date.getUTCMonth()],
    day: date.getUTCDate(),
    weekday: weekdays[date.getUTCDay()],
    time: date.toISOString().substring(11, 16),
  };
};

const Calendario: React.FC<Props> = ({ schedule }) => {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1279px)');

  const defaultVisibleAppointments = isTablet ? 3 : 4;

  const visibleAppointments = isMobile 
    ? schedule 
    : showAll 
    ? schedule 
    : schedule.slice(0, defaultVisibleAppointments);

  return (
    <div className="w-full flex flex-col pl-4 md:pl-0 md:max-w-[770px] lg:max-w-[944px] xl:w-[530px]">
      <h2 className="text-h2 font-bold mb-4">Data e Horário</h2>
      <div className="flex w-full justify-start overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan no-scrollbar gap-2 md:flex-wrap md:snap-none">
        {visibleAppointments.map(({ start, final }, index) => {
          const startData = formatDate(start as unknown as string);
          const finalData = formatDate(final as unknown as string);

          return (
            <CalendarioCard key={index}>
              <div className="w-full flex flex-row items-center justify-start gap-4 md:gap-2 lg:gap-6">
                {/* Left side: Month, Day, Weekday */}
                <div className="flex flex-col items-center justify-center w-16 xl:w-[73px]">
                  <span className="bg-gray-200 text-h6 h-[20px] px-2 rounded-md xl:h-5 flex items-center dark:bg-grey dark:text-gray-300">
                    {startData.month}
                  </span>
                  <span className="text-h2 font-bold">{startData.day}</span>
                  <span className="text-level-2 font-normals text-sm text-gray-600 dark:text-white">{startData.weekday}</span>
                </div>

                {/* Separator */}
                <div className="w-[1px] bg-gray-300 h-12" />

                {/* Right side: Clock Icon + Time Range */}
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-600 dark:text-white" />
                  <span className="text-level-2 font-normal text-black dark:text-white">
                    {startData.time} - {finalData.time}
                  </span>
                </div>
              </div>
            </CalendarioCard>
          );
        })}
      </div>
      {schedule.length >= 3 && !isMobile && !isTablet && (
        <div
          className="w-fit flex items-center cursor-pointer mt-4 text-primary font-montserrat font-semibold"
          onClick={() => setShowAll(!showAll)}
        >
          <p className='text-level-1 font-montserrat text-primary dark:text-secondary'>{showAll ? "Exibir menos datas" : "Exibir todas as datas"}</p>
          {showAll ? <ChevronUp className="ml-2 text-primary dark:text-secondary" /> : <ChevronDown className="ml-2 text-primary dark:text-secondary" />}
        </div>
      )}
      {schedule.length >= 4 && !isMobile && isTablet && (
        <div
          className="w-fit flex items-center cursor-pointer mt-4 text-primary font-montserrat font-semibold"
          onClick={() => setShowAll(!showAll)}
        >
          <p className='text-level-1 font-montserrat text-primary dark:text-secondary'>{showAll ? "Exibir menos datas" : "Exibir todas as datas"}</p>
          {showAll ? <ChevronUp className="ml-2 text-primary dark:text-secondary" /> : <ChevronDown className="ml-2 text-primary dark:text-secondary" />}
        </div>
      )}
    </div>
  );
};

export default Calendario;