import React from "react";

const Card = ({p , status,reason}:{p?:string, status:string, reason:string}) => {
  return (
    <div className="p-5">
      <div className="p-5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-6">
          <h4 className="mb-3 text-md font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
            <a href="/ui/cards">Justifcation from 22 / 06 / 2024</a>
          </h4>
          <p>
           {reason}
          </p>
        </div>
        <span className={`${status ? 'bg-yellow-500' : 'bg-primary'} px-5 text-white py-2 rounded-full`}>
        {status}
        </span>
      </div>
    </div>
  );
};

export default Card;
