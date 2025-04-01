import React from "react";

const SummaryCard = ({ icon, text, number, color }) => {
  return (
    <div className="rounded flex bg-white shadow-md">
      {/* Apply only the dynamic color class */}
      <div className={`text-3xl flex justify-center items-center ${color} text-white px-4 w-16 h-16 rounded-l-lg`}>
        {icon}
      </div>
      <div className="pl-4 py-3">
        <p className="text-lg font-semibold">{text}</p>
        <p className="text-xl font-bold">{number}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
