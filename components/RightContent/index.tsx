import {useState} from 'react';
import { bannerData, newMovies } from '../../data/index'
import RatingStars from '../RatingStars'

const RightContent = () => {
  const [trendingData, setTrendingData] = useState({
    'Ngày': [
      {
        name: 'Khói Lửa Nhân Gian Của Tôi',
        care: 191
      },
      {
        name: 'Vụng Trộm Không Thể Giấu',
        care: 112
      },
      {
        name: 'Khách Sạn Vương Giả',
        care: 80
      }
    ],
    'Tuần': [
      {
        name: 'Khói Lửa Nhân Gian Của Tôi',
        care: 191
      },
      {
        name: 'Vụng Trộm Không Thể Giấu',
        care: 112
      },
      {
        name: 'Khách Sạn Vương Giả',
        care: 80
      },
      {
        name: 'Khói Lửa Nhân Gian Của Tôi',
        care: 191
      },
      {
        name: 'Vụng Trộm Không Thể Giấu',
        care: 112
      },
      {
        name: 'Khách Sạn Vương Giả',
        care: 80
      }
    ],
    'Tháng': [
      {
        name: 'Khói Lửa Nhân Gian Của Tôi',
        care: 191
      },
      {
        name: 'Vụng Trộm Không Thể Giấu',
        care: 112
      },
      {
        name: 'Khách Sạn Vương Giả',
        care: 80
      }
    ]
  })
  const [openTab, setOpenTab] = useState('Ngày');
  return (
    <div className="md:flex md:flex-col md:col-span-2 pt-3 pb-4 hidden md:block">
    <div>
      <h2 className='text-[#da966e] uppercase px-1 mb-4 py-3'>Phim Sắp Chiếu</h2>
      <div>
        {
          bannerData.map((item, index)=>(
            <div key={`NEW_MOVIES:${index}`} className="mb-2 flex cursor-pointer">
              <img className="w-[75px] mr-2 border border-[#efefef]" src={item.img} alt={item.title} />
              <div>
                <h5 className="text-ellipsis">{item.title}</h5>
                <p className="text-sm text-[#BABABA]">{item.year}</p>
                {RatingStars(item.rating)}
              </div>
            </div>
          ))
        }
      </div>
    </div>
    <div>
      <h2 className='text-[#da966e] uppercase px-1 mb-4 py-3'>Trending</h2>
      <ul
        className="flex flex-wrap mb-0 list-none flex-wrap pb-4 flex-row"
        role="tablist"
      >
        {
          ['Ngày', 'Tuần', 'Tháng'].map((item, index) => (
            <li style={{flex: '1 1 30%'}} key={`TABS_MOVIES:${index}`} className="m-1 last:mr-0 text-center cursor-pointer">
              <h4
                className={
                  "uppercase pb-3 shadow-lg block leading-normal  " +
                  (openTab === item
                    ? "text-[#da966e] uppercase bg-" + 'red' + `-600 border-b dark:border-[#c58560]`
                    : "text-" + 'red' + "-600")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(item);
                }}
                data-toggle="tab"
                role="tablist"

              >
                {item}
              </h4>
            </li>
          ))
        }
      </ul>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {
          trendingData[`${openTab}`].map((item, index) => (
              <div key={`MOVIES_ITEM:${index}`} className="banner_item even:dark:text-black even:bg-gray-200 dark:text-white text-black dard:even:bg-[#141414] flex p-1 px-2 items-center relative cursor-pointer overflow-hidden">
                <span className="w-[30px] h-[30px] bg-[#A3765D] text-white rounded-full font-bold flex items-center justify-center text-sm">{index + 1}</span>
                <div className="ml-2 text-ellipsis">
                  <span className="text-sm bold font-bold hover:text-[#da966e]">{item.name}</span>
                  <p className="italic text-gray-600 text-xs">{item.care} lượt quan tâm</p>
                </div>
              </div>
          ))
        }
      </div>
    </div>
  </div>
  )
}

export default RightContent;