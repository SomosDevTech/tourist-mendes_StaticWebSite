import React from "react";

interface Props {
  text: string;
}

function WorkingTime({ text }: Props): React.ReactNode {
  return (
    <section className="w-full pl-4 flex flex-col gap-4 md:pl-0">
        <>
          <h2 className="text-h2">Funcionamento</h2>
          <div className="flex flex-col">
            {text && <p className="text-level-1 font-normal">{text}</p>}
          </div>
        </>
    </section>
  );
}

export default WorkingTime;
