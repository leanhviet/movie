import { useState } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import { bannerData } from '../../data/index'
import Link from 'next/link';
import { GrCirclePlay } from 'react-icons/gr'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// components
import RightContent from '../../components/RightContent'

// mock 
import { filmDetail } from '../../data/index';
import RatingStars from '../../components/RatingStars';

const DetailFilm = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="min-h-screen mx-auto md:flex lg:grid lg:grid-cols-9 md:gap-x-2 items-start p-4 md:p-0">
        <div className="md:grid-cols-9 md:grid md:gap-x-2 w-full lg:contents">
          <div className="lg:w-full flex flex-col gap-y-4 w-full md:col-span-7">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/">
                    <div className="inline-flex cursor-pointer items-center text-sm font-medium text-gray-700 hover:text-[#da966e] dark:text-gray-400 dark:hover:text-white">
                      <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                      </svg>
                      Trang Chủ
                    </div>
                  </Link>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Cú lừa tình duyên</span>
                  </div>
                </li>
              </ol>
            </nav>
            <div className="mr-2 mt-2 p-4 bg-[#181818]">
              <div className="bg-[#181818]">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="w-full h-full relative">
                    <img className="w-full" src={filmDetail.img} alt={filmDetail.name} />
                    <div style={{ background: 'rgba(0, 0, 0, 0.7)' }} className="flex absolute bottom-0 px-2 py-4 w-full justify-center">
                      <Link href={`/xem-phim/${filmDetail.slug}`}>
                        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Xem Phim</button>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-2 md:ml-4">
                    <h2 className="text-[#da966e] uppercase">{filmDetail.name}</h2>
                    <p className="text-[#999]">{filmDetail.enName}</p>
                    <div className="bg-[#222] p-2 h-[350px] snap-y overflow-auto">
                      <div className="flex text-[11px] items-center mb-4">
                        <span className="text-[#999] font-bold">Trạng thái:</span>
                        <p className="font-bold ml-2 bg-[#777] mb-0 p-0.5 text-white">{filmDetail.episode}</p>
                      </div>
                      <div className="flex text-[11px]">
                        <span className="text-[#999] font-bold">Sắp chiếu:</span>
                        <p className="text-[#999] ml-2 ">{filmDetail.nextEpisode}</p>
                      </div>
                      <div className="flex text-[11px]">
                        <span className="text-[#999] font-bold">Đạo diễn:</span>
                        <p className="text-white cursor-pointer hover:text-[#da966e] ml-2">{filmDetail.director}</p>
                      </div>
                      <div className="flex text-[11px]">
                        <span className="text-[#999] font-bold">Thời lượng:</span>
                        <p className="text-[#999] ml-2">{filmDetail.timer}</p>
                      </div>
                      <div className="flex text-[11px]">
                        <span className="text-[#999] font-bold">Số tập:</span>
                        <p className="text-[#999] ml-2">{filmDetail.totalEpisodes}</p>
                      </div>
                      <div className="flex text-[11px]">
                        <span className="text-[#999] font-bold">Tình trạng:</span>
                        <p className="text-[#999] ml-2">{filmDetail.action}</p>
                      </div>
                      <div className="flex text-[11px]">
                        <span className="text-[#999] font-bold">Ngôn ngữ:</span>
                        <p className="text-[#999] ml-2">{filmDetail.lang}</p>
                      </div>
                      <div className="flex text-[11px]">
                        <span className="text-[#999] font-bold">Năm sản xuất:</span>
                        <p className="text-[#999] ml-2">{filmDetail.yearOfManufacture}</p>
                      </div>
                      <div className="flex text-[11px]">
                        <span className="text-[#999] font-bold">Quốc gia:</span>
                        <p className="text-[#999] ml-2">{filmDetail.nation}</p>
                      </div>
                      <div className="flex text-[11px]">
                        <span className="text-[#999] font-bold mr-2">Thể loại:</span>
                        <div className="flex flex-wrap">
                          {filmDetail.type.map((item, index) => <p key={`TYPES:${index}`} className="text-white cursor-pointer hover:text-[#da966e] mb-1">{item} ,</p>)}
                        </div>
                      </div>
                      <div className="flex text-[11px]">
                        <span className="text-[#999] font-bold mr-2">Diễn viên:</span>
                        <div className="flex flex-wrap">
                          {filmDetail.actors.map((item, index) => <p key={`ACTORS:${index}`} className="text-white cursor-pointer hover:text-[#da966e] mb-1">{item} ,</p>)}
                        </div>
                      </div>
                    </div>
                    {/* <div className="bg-[#222] mt-2 p-2">
                      <div>
                        <button>Chia sẻ</button>
                      </div>
                      <RatingStars rating={5} />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="bg-[#222] p-2 flex items-center mt-2">
                <span className='text-white mr-2 uppercase font-bold'>Tập mới nhất:</span>
                <div>
                  {
                    ['Tập 5', 'Tập 4', 'Tập 3'].map((item, index) => <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" key={`NEW_EPISODES:${index}`}>{item}</button>)
                  }
                </div>
              </div>
              <div className="bg-[#222] p-2 mt-2">
                <h4 className="font-bold text-[#ccc] uppercase mb-2">Nội dung phim</h4>
                <span className="font-bold text-[#828282] text-sm"><strong>{filmDetail.name}</strong><p className="font-normal">{filmDetail.description}</p></span>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-[#da966e] uppercase">Phim Đề Cử</h2>
              <div className="my-2">
                <Swiper
                  navigation
                  spaceBetween={10}
                  slidesPerView={1}
                  breakpoints={{
                    576: {
                      width: 576,
                      slidesPerView: 3,
                    },
                    768: {
                      width: 768,
                      slidesPerView: 4,
                    },
                  }}
                  modules={[Navigation, Pagination]}
                  pagination={{ clickable: true }}
                >
                  {bannerData?.length &&
                    bannerData.map((item, index) => (
                      <SwiperSlide
                        key={`BANNER_SLIDER:${index}`}>
                        <div className="banner_item rounded relative cursor-pointer overflow-hidden">
                          <span className="absolute top-2 text-sm bg-[#A3765D] text-white px-2 py-1 rounded-r border border-[#96674f] z-10">{item.episodes}</span>
                          <Link href={`phim/${item.slug}`}>
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
                            <div style={{ background: 'rgba(0, 0, 0, 0.7)' }} className="text-white text-center p-2 text-ellipsis">{item.title}</div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
          <RightContent />
        </div>
      </div>
    </Layout>
  )
}

export default DetailFilm;