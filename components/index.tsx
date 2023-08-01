import { useState } from 'react';
import Link from 'next/link';
import { GrCirclePlay } from 'react-icons/gr'

const TabsFilm = ({ color = 'pink', data }) => {
  const [openTab, setOpenTab] = useState(1);
  console.log("data ", data[openTab - 1].movies)
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
                <li key={`TABS_MOVIES:${index}`} className="HaiChill">
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
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded grid-cols-1 sm:grid-cols-2 grid md:grid-cols-4 gap-4">
            {
              data[openTab - 1].movies.map((item, index) => (
                  <div key={`MOVIES_ITEM:${index}`} className="banner_item rounded relative cursor-pointer overflow-hidden">
                    <span className="absolute top-2 text-sm bg-[#A3765D] text-white px-2 py-1 rounded-r border border-[#96674f] z-10">{item.episodes}</span>
                    <Link href="#">
                      <div className="transition duration-150 ease-out hover:scale-125 h-full">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full"
                        />
                        <GrCirclePlay color="white" style={{ transform: 'translate(-50%,-50%)' }} className="hidden absolute top-1/2 left-1/2 text-5xl translate-1/2 text-[#95a5a6]" />
                      </div>
                    </Link>
                    <div className="absolute bottom-0 w-full">
                      {item.quality && <span className="bg-[#522e75] text-white px-2 py-1 rounded-r mb-2 relative">{item.quality}</span>}
                      <div style={{background: 'rgba(0, 0, 0, 0.7)'}} className="text-white text-center p-2 text-ellipsis">{item.title}</div>
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