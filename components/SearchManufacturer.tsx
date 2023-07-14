"use client";

import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";

import { SearchManufacturerProps } from "@/types";

const SearchManufacturer = ({
  manuFacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relatvie w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
