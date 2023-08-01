import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import { bannerData } from '../../data/index'
import Link from 'next/link';
import { GrCirclePlay } from 'react-icons/gr'

import videojs from "video.js";
import "video.js/dist/video-js.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { Player } from 'video-react';
// mock 
import { filmDetail } from '../../data/index';

const DetailFilm = () => {
  const play = {
    fill: true,
    fluid: true,
    controls: true,
    preload: "metadata",
    sources: [
      {
        src: filmDetail.url,
        type: "application/x-mpegURL"
      }
    ]
  };

  const router = useRouter();
  const videoNode = useRef(null);
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    if (videoNode.current) {
      const _player = videojs(videoNode.current, play);
      setPlayer(_player);
      return () => {
        if (player !== null) {
          player.dispose();
        }
      };
    }
  }, []);
  return (
    <Layout>
      <div className="min-h-screen mx-auto md:flex lg:grid lg:grid-cols-9 md:gap-x-2 items-start p-4 md:p-0">
        <div className="md:grid-cols-9 md:grid md:gap-x-2 w-full lg:contents">
          <div className="lg:w-full flex flex-col gap-y-4 w-full md:col-span-9">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href='/'>
                    <div className="inline-flex cursor-pointer items-center text-sm font-medium text-gray-700 hover:text-[#da966e] dark:text-gray-400 dark:hover:text-white">
                      <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                      </svg>
                      Trang Chủ
                    </div>
                  </Link>
                </li>
                <li className="inline-flex items-center">
                  <Link href={`/phim/${filmDetail.slug}`}>
                    <div className="inline-flex cursor-pointer items-center text-sm font-medium text-gray-700 hover:text-[#da966e] dark:text-gray-400 dark:hover:text-white">
                      <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                      </svg>
                      {filmDetail.name}
                    </div>
                  </Link>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Tập 1</span>
                  </div>
                </li>
              </ol>
            </nav>
            <div className="mt-2 py-4">
              <video ref={videoNode} className="video-js"></video>
              <div className="my-2">
                {
                  ['Tập 1', 'Tập 2', 'Tập 3', 'Tập 4 - Tập cuối Preview'].map((item, index)=><button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" key={`NEW_EPISODES:${index}`}>{item}</button>)
                }
              </div>
              <h2 className="text-[#da966e] uppercase">{filmDetail.name}</h2>
              <p className="text-[#999]">{filmDetail.enName}</p>
              <div className="bg-[#f0f0f0] dark:bg-[#2D2D2D] p-2">
                <span className="font-bold text-[#828282] text-sm"><strong>{filmDetail.name}</strong><p className="font-normal mb-0">{filmDetail.description}</p></span>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-[#da966e] uppercase">Có thể bạn muốn xem</h2>
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
        </div>
      </div>
    </Layout>
  )
}

export default DetailFilm;