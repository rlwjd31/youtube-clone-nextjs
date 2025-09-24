// "use client";

import { BarLoader } from "react-spinners";

export default function BarLoading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {/* color는 override가 안 된다 */}
      <BarLoader color="red" cssOverride={{ width: "500px" }} />
    </div>
  );
}
