import Link from 'next/link';
import { useState, useEffect } from 'react';
import ThemeSwitch from './ThemeSwitch';
import { NAV_ROUTE } from './config'
import { useRouter } from 'next/router'

const Navigation = (): JSX.Element => {
  const router = useRouter();
  const [active,setActive] = useState("")

  useEffect(()=>{
    router.query.type ? setActive(router.query.type as string) : setActive('/')
  },[router.query.type])

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-20 w-full m-auto">
      <div className="bg-white dark:bg-[#333333]">
        <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <div className="flex cursor-pointer">
              <img src="/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HaiChill</span>
            </div>
          </Link>
          <div className="flex">
            <div className="flex items-center">
              <div className="flex space-x-1">
                <input
                  type="text"
                  className="block w-full md:w-[350px] px-4 py-2 text-black dark:text-white dark:bg-[#333333] border rounded-full dark:border-gray-500 focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search..."
                />
                <button className="px-4 text-gray-500 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
      <div className="bg-[#f0f0f0] dark:bg-[#2D2D2D]">
        <div className="max-w-6xl flex flex-wrap items-center mx-auto justify-center">
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              {
                NAV_ROUTE.map((item, index) => (
                <li className="text-center text-sm" key={`NAV_PARENT:${index}`}>
                  <>
                    {
                      item.path && <Link href={`/${item.path}`}>
                        <p className={`${active === item.path ? '!text-[#c58560]' : 'md:dark:text-white'} uppercase dark:hover:text-[#c58560] block py-4 pb-0 text-black bg-blue-700 rounded md:bg-transparent md:text-black md:hover:text-[#c58560] dark:bg-blue-600 md:dark:bg-transparent cursor-pointer`}>{item.name}</p></Link>
                    }
                    {
                      item.childs && 
                      <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="py-4 relative uppercase flex items-center justify-between w-full text-black md:dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#c58560] md:w-auto dark:hover:text-[#c58560] dark:focus:text-[#c58560] dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-[#2D2D2D]">{item.name} 
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                        <div id="dropdownNavbar" className={`hidden absolute w-max top-[50px] p-2.5 z-10 font-normal bg-white divide-y divide-gray-100 shadow dark:bg-[#2D2D2D] dark:divide-gray-600`}>
                          <ul className="pt-2 grid grid-rows-4 grid-flow-col gap-4 justify-between py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            {
                              item?.childs?.length > 0 && item.childs.map((item, index) => (
                                <li className="text-left" key={`NAV_CHILDS${index}`}>
                                  <Link href={`/${item.path}`}><p className="block px-4 dark:text-white text-black md:hover:text-[#c58560]">{item.name}</p></Link>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      </button>
                    }
                  </>
                </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
