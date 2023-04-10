"use client";

// React icons
import { BiSearch } from "react-icons/bi";

export default function Search() {
  return (
    <div className=" bg-white rounded-full text-[15px] flex gap-4 justify-between items-center shadow-sm py-[8px] pl-6 hover:shadow-md transition border cursor-pointer md:w-auto w-full">
      <h4 className="font-bold">Anywhere</h4>
      <hr className="w-[1px] h-6 border-0 bg-gray-200 hidden sm:block" />
      <h4 className="font-bold  hidden sm:block">Any week</h4>
      <hr className="w-[1px] h-6 border-0 bg-gray-200 hidden sm:block" />
      <div className="flex items-center gap-2 pr-2">
        <h3 className="hidden sm:block">Add Guests</h3>
        <div className="bg-rose-500 text-white p-[7px] rounded-full">
          <BiSearch size={16} />
        </div>
      </div>
    </div>
  );
}
