import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="odd:bg-primary even:bg-card bg-red-300 rounded-2xl p-4 flex-1 font-mono">
      <div className="flex flex-col">
        <span className="text-xs text-gray-400 ">{type.toUpperCase()}</span>
        <h1 className="text-2xl">2209</h1>
        <h1 className="">{type.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default UserCard;
