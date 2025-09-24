"use client";

import { GridLoader } from "react-spinners";

export default function ErrorMessage() {
  return (
    <div className="w-screen h-screen gap-12 flex flex-col justify-center items-center font-bold">
      <GridLoader color="red" className="mb-4" />
      <div className="text-6xl">Oops!!</div>
      <div>잠시 후 다시 확인해주세요...</div>
    </div>
  );
}
