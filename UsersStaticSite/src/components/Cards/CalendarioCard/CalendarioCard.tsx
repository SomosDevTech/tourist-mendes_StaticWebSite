import React from 'react';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function CalendarioCard({ children }: Props): React.ReactElement {
  return (
    <div className="bg-white dark:bg-transparent border border-gray-300 rounded-lg p-1 min-w-[230px] h-[73px] md:min-w-[250px] md:max-w-[300px] lg:min-w-[300px] xl:min-w-[261px]">
      {children}
    </div>
  );
};

export default CalendarioCard;