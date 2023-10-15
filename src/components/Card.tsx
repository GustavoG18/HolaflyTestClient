import { CardDataTypes } from "../types";
import ComsuptionIndex from "./ComsuptionIndex";

const Card = ({ cardData }: CardDataTypes) => {
  return (
    <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow border-1 border-gray-400">
      <div
        className={`flex flex-col ${
          cardData.status === "expired" ? "items-start" : "items-center"
        } justify-between space-x-6 p-6 h-72 w-80`}
      >
        <div className="flex space-x-8 w-full">
          <div className="flex-1 truncate space-y-3">
            <div className="w-full h-10 flex items-center relative">
              <img
                className={`h-6 w-6 flex-shrink-0 rounded-full bg-gray-300 absolute ${
                  cardData.status === "expired" ? "filter grayscale" : ""
                }`}
                src={cardData.flag}
                alt="country logo"
              />
              {cardData.status === "pending" && (
                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-yellow-50 px-1.5 py-0.5 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20 pl-7 pt-1 pb-1 ">
                  Pending
                </span>
              )}
              {cardData.status === "active" && (
                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-indigo-50 px-1.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20 pl-7 pt-1 pb-1 ">
                  Active
                </span>
              )}
              {cardData.status === "expired" && (
                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20 pl-7 pt-1 pb-1 ">
                  expired
                </span>
              )}
            </div>
            <p className="mt-1 truncate text-sm text-gray-700 font-bold">
              {cardData.country}
            </p>
            {cardData.status === "expired" && (
              <p className="mt-1 truncate text-sm text-gray-700 font-semibold">
                {cardData.dateStart} - {cardData.dateEnd}
              </p>
            )}
            {cardData.status === "expired" && (
              <p className="mt-1 truncate text-sm text-gray-500">
                {cardData.plan}
              </p>
            )}
            {cardData.status !== "expired" && (
              <p className="mt-1 truncate text-sm text-gray-700">
                {cardData.plan}
              </p>
            )}
          </div>
          <ComsuptionIndex
            dataComsuption={{
              status: cardData.status,
              plan: cardData.plan,
              comsuption: cardData.comsuption,
            }}
          />
        </div>
        <div
          className="flex flex-col space-y-2"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        >
          {cardData.status === "pending" && (
            <button className="flex w-full justify-center rounded-md bg-rose-500 text-sm leading-6 text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 pt-3 pb-3 pl-10 pr-10">
              View details and install
            </button>
          )}
          {cardData.status === "active" && (
            <button className="flex w-full justify-center rounded-md text-sm  leading-6 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 pt-3 pb-3 pl-10 pr-10 border-2">
              View details
            </button>
          )}
          {cardData.status === "active" && (
            <button className="flex w-full justify-center rounded-md text-sm  leading-6 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 pt-3 pb-3 pl-10 pr-10 bg-green-400">
              Add more data
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
