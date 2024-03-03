import Cards from "@/components/Cards";
import Filter from "@/components/Filter";
import { useState } from 'react'


export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

  return (
    <div className="maxWidth mt-12 pb-[45px]">
      <div className="flex items-center justify-between mb-12">
        <div className="shadow-md max-w-[480px] w-full py-[18px] px-8 flex items-center gap-6 rounded-[5px]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z" fill="#848484" />
          </svg>

          <form >
            <input type="text" name="country" placeholder="Search for a country…" className="outline-none text-sm w-full" />
          </form>
        </div>
        <Filter />
      </div>
      <Cards region={searchParams.filter} country={searchParams.country} />
    </div>
  );
}
