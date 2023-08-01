import Link from 'next/link';
import {useState} from 'react';
import Layout from '../components/Layout';
import { PostType } from '../types/post';
import { bannerData, newMovies } from '../data/index'
import { BsPlayFill } from 'react-icons/bs'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// components
import TabsFilm from '../components/TabsFilm'
import RightContent from '../components/RightContent'

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Phim bộ mới cập nhật',
      movies: newMovies
    },
    {
      id: 2,
      name: 'Phim lẻ mới cập nhật',
      movies: []
    },
    {
      id: 3,
      name: 'Phim đã hoàn thành',
      movies: []
    }
  ])

  const [secondData, setSecondData] = useState([
    {
      id: 1,
      name: 'Phim Hoạt Hình',
      movies: newMovies
    },
  ])

  const [lastData, setLastData] = useState([
    {
      id: 1,
      name: 'Được Yêu Thích',
      movies: newMovies
    },
  ])

  return (
    <Layout>
      <section className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className="w-full">
          <h2 className="text-[#da966e] uppercase">Phim Hot</h2>
          <div className="my-2">
            <Swiper
              loop
              navigation
              spaceBetween={10}
              slidesPerView={2}
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
              autoplay={true}
              modules={[Navigation, Pagination, Autoplay]}
              pagination={{ clickable: true }}
            >
              {bannerData?.length &&
                bannerData.map((item, index) => (
                  <SwiperSlide
                    key={`BANNER_SLIDER:${index}`}>
                    <div className="banner_item rounded relative cursor-pointer overflow-hidden">
                      <span style={{ boxShadow: '2px 2px 3px 0px rgb(0 0 0 / 75%)'}} className="text-xs md:text-sm absolute top-2 bg-[#A3765D] text-white px-2 py-1 rounded-r border border-[#96674f] z-10">{item.episodes}</span>
                      <Link href={`phim/${item.slug}`}>
                        <div className="transition duration-150 ease-out hover:scale-125 h-full">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full"
                          />
                          <BsPlayFill color="white" style={{ transform: 'translate(-50%,-50%)'}} className="hidden absolute top-1/2 left-1/2 text-5xl translate-1/2 text-[#95a5a6]" />
                        </div>
                      </Link>
                      <div className="absolute bottom-0 w-full">
                        { item.quality && <span className="text-xs md:text-sm bg-[#522e75] text-white px-2 py-1 rounded-r mb-2 relative">{item.quality}</span> }
                        <div style={{background: 'rgba(0, 0, 0, 0.7)'}} className="text-xs md:text-sm text-white text-center p-2 text-ellipsis">{item.title}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="min-h-screen mx-auto md:flex lg:grid lg:grid-cols-9 md:gap-x-2 items-start">
            <div className="md:grid-cols-9 md:grid md:gap-x-2 w-full lg:contents">
              <div className="lg:w-full flex flex-col gap-y-4 w-full md:col-span-7">
                  <TabsFilm color="neutral" data={data} />
                  <TabsFilm color="neutral" data={secondData} />
                  <TabsFilm color="neutral" data={lastData} />
              </div>
              <RightContent />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export default Index;
