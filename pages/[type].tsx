import { useRouter } from 'next/router'
import Layout from '../components/Layout';
import RightContent from '../components/RightContent';
import Link from 'next/link';
import { PaginationNavPresentation } from '../components/Pagination'
import { newMovies } from '../data/index';
import { BsPlayFill } from 'react-icons/bs'
import Select from '../components/Select';

const DetailFilm = () => {
  const router = useRouter();
  const filter = [
    {
      name: '-- Sắp xếp --',
      value: ''
    },
    {
      name: 'Ngày đăng phim',
      value: 'date'
    },
    {
      name: 'Năm sản xuất',
      value: 'year'
    },
    {
      name: 'Tên phim',
      value: 'name'
    },
    {
      name: 'Lượt xem',
      value: 'views'
    },
  ]
  const type = [
    {
      name: '-- Thể loại --',
      value: ''
    },
    {
      name: 'Cổ Trang - Thần Thoại',
      value: 'co-trang-than-thoai',
    },
    {
      name: 'Khoa Học - Viển Tưởng',
      value: 'khoa-hoc-vien-tuong'
    },
    {
      name: 'Thể Thao - Âm nhạc',
      value: 'the-thao-am-nhac'
    },
    {
      name: 'Bí Ẩn - Siêu Nhiên',
      value: 'bi-an-sieu-nhien'
    },
    {
      name: 'Võ Thuật - Kiếm Hiệp',
      value: 'vo-thuat-kiem-hiep'
    },
    {
      name: 'Hình Sự - Chiến Tranh',
      value: 'hinh-su-chien-tranh'
    },
    {
      name: 'Kinh Dị - Ma',
      value: 'kinh-di-ma'
    },
    {
      name: 'Thuyết Minh',
      value: 'thuyet-minh'
    },
    {
      name: 'Phiêu Lưu - Hành Động',
      value: 'phieu-luu-hanh-dong'
    },
    {
      name: 'Tài Liệu - Khám Phá',
      value: 'tai-lieu-kham-pha'
    },
    {
      name: 'Gia Đình - Học Đường',
      value: 'gia-dinh-hoc-duong'
    },
    {
      name: 'Lồng Tiếng',
      value: 'long-tieng'
    },
    {
      name: 'Tâm Lý - Tình Cảm',
      value: 'tam-ly-tinh-cam'
    },
    {
      name: 'Văn Hóa - Tâm Linh',
      value: 'van-hoa-tam-linh'
    },
    {
      name: 'TV Show',
      value: 'tv-show'
    },
    {
      name: 'Boy Love',
      value: 'boy-love'
    },
    {
      name: "Hoạt Hình",
      value: 'hoat-hinh'
    },
    {
      name: 'Hài Hước',
      value: 'hai-huoc'
    },
    {
      name: 'Phim Chiếu Rạp',
      value: 'phim-chieu-rap'
    }
  ]
  const nation = [
    {
      name: '-- Quốc gia --',
      value: ''
    },
    {
      name: 'Việt Nam',
      value: 'viet-nam'
    },
    {
      name: 'Âu - Mỹ',
      value: 'au-my'
    },
    {
      name:'Quốc Gia Khác',
      value: 'quoc-gia-khac'
    },
    {
      name: 'Trung Quốc',
      value: 'trung-quoc'
    },
    {
      name: 'Đài Loan',
      value: 'dai-loan'
    }
  ]

  const year = [
    {
      name: '-- Năm --',
      value: ''
    },
    {
      name: '2023',
      value: '2023'
    },
    {
      name: '2022',
      value: '2022'
    },
    {
      name: '2021',
      value: '2021'
    },
    {
      name: '2020',
      value: '2020'
    },
    {
      name: '2019',
      value: '2019'
    },
    {
      name: '2018',
      value: '2018'
    },
  ]

  return (
    <Layout>
      <section className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className="w-full">
          <div className="min-h-screen mx-auto md:flex lg:grid lg:grid-cols-9 md:gap-x-2 items-start">
            <div className="md:grid-cols-9 md:grid md:gap-x-2 w-full lg:contents">
              <div className="lg:w-full flex flex-col gap-y-4 w-full md:col-span-7">
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
                    <li aria-current="page">
                      <div className="flex items-center">
                        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{router.query.type}</span>
                      </div>
                    </li>
                  </ol>
                </nav>
                <div>
                  <div className="flex flex-wrap justify-between md:justify-start">
                    <div className="mr-2 my-1">
                      <Select dataSelect={filter} />
                    </div>
                    <div className="mr-2 my-1">
                      <Select dataSelect={type} />
                    </div>
                    <div className="mr-2 my-1">
                      <Select dataSelect={nation} />
                    </div>
                    <div className="mr-2 my-1">
                      <Select dataSelect={year} />
                    </div>
                    <div className="mr-2 my-1">
                      <button className="dark:bg-[#666] bg-[#f0f0f0] text-black dark:text-white p-1.5 rounded-md">Lọc Phim</button>
                    </div>
                  </div>
                  <div className="relative flex mt-2 flex-col min-w-0 break-words w-full mb-6 rounded grid-cols-2 sm:grid-cols-2 grid md:grid-cols-4 gap-4">
                    {
                      newMovies.map((item, index) => (
                        <div key={`MOVIES_ITEM:${index}`} className="banner_item rounded relative cursor-pointer overflow-hidden">
                          <span style={{ boxShadow: '2px 2px 3px 0px rgb(0 0 0 / 75%)'}} className="text-xs md:text-sm absolute top-2 bg-[#A3765D] text-white px-2 py-1 rounded-r border border-[#96674f] z-10">{item.episodes}</span>
                          <Link href="#">
                            <div className="transition duration-150 ease-out h-full hover:scale-125">
                              <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full"
                              />
                              <BsPlayFill color="white" style={{ transform: 'translate(-50%,-50%)' }} className="hidden absolute top-1/2 left-1/2 text-5xl translate-1/2 text-[#95a5a6]" />
                            </div>
                          </Link>
                          <div className="absolute bottom-0 w-full">
                            {item.quality && <span className="text-xs md:text-sm bg-[#522e75] text-white px-2 py-1 rounded-r mb-2 relative">{item.quality}</span>}
                            <div style={{ background: 'rgba(0, 0, 0, 0.7)' }} className="text-xs md:text-sm text-white text-center p-2 text-ellipsis">{item.title}</div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <PaginationNavPresentation />
                </div>
              </div>
              <RightContent />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DetailFilm;