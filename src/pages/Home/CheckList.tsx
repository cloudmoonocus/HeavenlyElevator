import React from "react";
import {
  TravelOutline,
  FingerdownOutline,
  ScanningOutline,
  TeamOutline,
  FileOutline,
  UploadOutline,
} from "antd-mobile-icons";

const ICON_SIZE = 45;
const listOfCheckInMethods = [
  { name: "普通/位置签到", icon: <TravelOutline fontSize={ICON_SIZE} /> },
  { name: "手势/签到码签到", icon: <FingerdownOutline fontSize={ICON_SIZE} /> },
  { name: "二维码签到", icon: <ScanningOutline fontSize={ICON_SIZE} /> },
  { name: "一起签到", icon: <TeamOutline fontSize={ICON_SIZE} /> },
  { name: "课程签到", icon: <FileOutline fontSize={ICON_SIZE} /> },
  { name: "切换账号", icon: <UploadOutline fontSize={ICON_SIZE} /> },
];

const CheckList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-y-5 gap-x-3 mt-5">
      {listOfCheckInMethods.map((check) => {
        return (
          <div
            key={check.name}
            className="flex flex-col items-center gap-y-3 indexCard box-border w-auto px-8 py-5 cursor-pointer"
          >
            {check.icon}
            <span>{check.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CheckList;
