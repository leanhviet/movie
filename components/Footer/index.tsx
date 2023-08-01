import React from 'react'
import Link from 'next/link';

// import Logo from '../logo'
// import Wrapper from '../wrapper'

const Footer = () => {
  return (
    <div>
      <div className='footer bg-black pt-16 py-4 text-center p-2'>
        <div>
          {/* <Logo /> */}
          <Link href="/" className="flex items-center">
            <div className="flex cursor-pointer justify-center">
              <img src="/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">HaiChill</span>
            </div>
          </Link>
          <h2 className='mb-4 mt-2 text-center text-xl font-medium text-white'>
            Xem Phim Online Miễn Phí Tại HaiChill
          </h2>
          <p className='mt-2 text-xs text-white sm:text-sm md:px-40'>
            <span className='text-2xl font-bold'>
            HaiChill
            </span>{' '}
            - Một nơi tốt hơn để xem phim trực tuyến miễn phí. Nó cho phép bạn
            xem phim trực tuyến với chất lượng cao mà không phải trả phí. Không
            cần đăng ký. Nội dung được cập nhật hàng ngày với các máy chủ phát
            trực tuyến nhanh chóng, hỗ trợ phụ đề đa ngôn ngữ. Chỉ cần truy cập
            HaiChill và xem những bộ phim, chương trình truyền hình yêu thích
            của bạn. Chúng tôi có gần như bất kỳ bộ phim, chương trình truyền
            hình nào bạn muốn xem!
          </p>
        </div>
        <div className='mt-4 border-t border-t-[#495057] py-3 text-xs text-white'>
          &copy;Copyright 2023. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer