import { useState } from 'react';
import Link from 'next/link';
import { BsPlayFill } from 'react-icons/bs'

const TabsFilm = ({ color = 'pink', data }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {
              data.map((item, index) => (
                <li key={`TABS_MOVIES:${index}`} className={`m-1 last:mr-0 flex-auto text-center cursor-pointer ${data.length === 1 ? 'flex' : ''}`}>
                  <h4
                    className={
                      "uppercase px-5 py-3 shadow-lg block leading-normal " +
                      (openTab === item.id
                        ? "text-[#da966e] uppercase bg-" + color + `-600 border-b dark:border-[#c58560]`
                        : "text-" + color + "-600")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(item.id);
                    }}
                    data-toggle="tab"
                    role="tablist"

                  >
                    {item.name}
                  </h4>
                </li>
              ))
            }
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded grid-cols-2 sm:grid-cols-2 grid md:grid-cols-4 gap-4">
            {
              data[openTab - 1].movies.map((item, index) => (
                  <div key={`MOVIES_ITEM:${index}`} className="banner_item rounded relative cursor-pointer overflow-hidden">
                    <span style={{ boxShadow: '2px 2px 3px 0px rgb(0 0 0 / 75%)'}} className="text-xs absolute top-2 md:text-sm bg-[#A3765D] text-white px-2 py-1 rounded-r border border-[#96674f] z-10">{item.episodes}</span>
                    <Link href="#">
                      <div className="transition duration-150 ease-out h-full hover:scale-125">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full"
                        />
                        <BsPlayFill color="#ecf0f1" style={{ transform: 'translate(-50%,-50%)' }} className="hidden absolute top-1/2 left-1/2 text-5xl translate-1/2 text-[#95a5a6]" />
                      </div>
                    </Link>
                    <div className="absolute bottom-0 w-full">
                      {item.quality && <span className="text-xs md:text-sm bg-[#522e75] text-white px-2 py-1 rounded-r mb-2 relative">{item.quality}</span>}
                      <div style={{background: 'rgba(0, 0, 0, 0.7)'}} className="text-xs md:text-sm text-white text-center p-2 text-ellipsis">{item.title}</div>
                    </div>
                  </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default TabsFilm;