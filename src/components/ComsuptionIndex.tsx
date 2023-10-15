import calendar from "../assets/calendar.svg";
import { DataComsuptionType } from "../types";

const ComsuptionIndex = ({ dataComsuption }: DataComsuptionType) => {
  const kbToGb = (kilobytes: number) => {
    const kilobytesPerGigabyte = 1048576;
    const gigabytes = kilobytes / kilobytesPerGigabyte;
    return parseFloat(gigabytes.toFixed(2));
  };

  if (dataComsuption.status === "pending") {
    return (
      <div className="flex-1 truncate relative">
        <img width={200} src={calendar} alt="logo calendar" />
        <div className="flex flex-col absolute top-12 left-9">
          <b className="mt-1 truncate text-sm text-gray-700 text-center">0</b>
          <p className="mt-1 truncate text-sm text-gray-700">
            /{dataComsuption.plan.split(" ")[0]} days
          </p>
        </div>
      </div>
    );
  }
  if (dataComsuption.status === "active") {
    return (
      <div className="relative rounded-full border border-gray z-10 w-[110px] h-[110px] ">
        <div className="absolute rounded-full border-2 border-black z-20 top-0 h-full w-full border-l-0">
          <div className="absolute top-7 left-8">
            <p className="text-center">
              {dataComsuption?.comsuption?.totalComsumption
                ? kbToGb(dataComsuption?.comsuption?.totalComsumption)
                : "0,0"}
            </p>
            <p className="text-center">/{dataComsuption.plan.split(" ")[2]}</p>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default ComsuptionIndex;
