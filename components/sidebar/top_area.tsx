// components/sidebar/Top_area.tsx
import React from 'react';

type WrapperProps = {
  title: string;
  desc: string;
  components?: React.ReactNode[];
};

const Top_area = ({ title, desc, components = [] }: WrapperProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col gap-2">
        <p className="text-title">{title}</p>
        <p className="text-desc">{desc}</p>
      </div>

      <div className="flex flex-row gap-2">
        {components.map((comp, index) => (
          <div key={index}>{comp}</div>
        ))}
      </div>
    </div>
  );
};

export default Top_area;
