import React, { FC } from 'react';

interface PercentageBubbleProps {
  percentage: number;
}

const PercentageBubble: FC<PercentageBubbleProps> = ({ percentage }) => {
  return (
    <div className="percentage-bubble">
      <svg className="percentage-bubble__svg" viewBox="0 0 10 10">
        <path className="percentage-bubble__circle-bg"
          d="M5 0.347415
            a 4.652585 4.652585 0 0 1 0 9.30517
            a 4.652585 4.652585 0 0 1 0 -9.30517"
        />
        <path className="percentage-bubble__circle"
          strokeDasharray={`${percentage}, 100`}
          d="M5 0.347415
            a 4.652585 4.652585 0 0 1 0 9.30517
            a 4.652585 4.652585 0 0 1 0 -9.30517"
        />
        <text x="2" y="7" className="percentage-bubble__percentage"> 
          {percentage}
        </text>
      </svg>
    </div>
  );
}

export default PercentageBubble;
