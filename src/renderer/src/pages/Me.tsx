import { MdEdit } from 'react-icons/md'
import { AiFillSignal } from 'react-icons/ai'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import * as React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
function Me() {
  const [isOpenModal, setIsOpenModal] = React.useState(false)

  return (
    <div className="w-full h-[calc(100vh-120px)] flex justify-center">
      <div
        className="
      relative
      w-full lg:w-[65%] 
      h-[420px]"
      >
        <img
          className="z-100 w-full h-[420px]"
          src="https://i.guim.co.uk/img/media/4d0d9b44a24ba46cf443a3a3e693244e8950627e/307_6_1386_832/master/1386.jpg?width=1200&quality=85&auto=format&fit=max&s=55ced45aed3775e40e6bcbe760e47170"
          alt=""
        />

        <div className="w-full h-[150px] relative flex flex-col">
          <img
            className="
                absolute translate-y-[-20%] 
                left-1/2 lg:left-[3%] 
                translate-x-[-50%] lg:translate-x-0
                rounded-full w-[190px] h-[190px]
                border-4 border-blue-100 z-50
            "
            src="https://nexuscompendium.com/images/heroes/hanzo.jpg"
            alt=""
          />

          <div
            className="
                absolute 
                left-1/2 lg:left-[calc(3%+190px)] 
                translate-x-[-50%] lg:translate-x-0
                top-[160px] lg:top-0
                h-[100px] py-2
            "
          >
            <div
              className="
                ms-4 flex
                flex-col
                justify-center lg:justify-start
                items-center lg:items-start
            "
            >
              <span className="font-bold text-2xl mt-2">Hữu Tấn</span>
              <span className="font-bold text-sm">xxx người theo dõi • xxx đang theo dõi</span>
            </div>
          </div>

          <div
            className="
                absolute 
                w-[500px] lg:w-[500px]
                left-1/2 lg:left-[calc(100%-500px)]
                translate-x-[-50%] lg:translate-x-0
                top-[260px] lg:top-0
                h-[100px] py-2
            "
          >
            <div
              className="flex flex-row gap-2
             justify-center
             lg:justify-end"
            >
              <button
                type="button"
                className="bg-blue-500 rounded-md py-1 px-2 flex flex-row items-center text-white font-bold h-[36px]"
              >
                <AiFillSignal className="me-1" />
                Công cụ chuyên nghiệp
              </button>

              <button
                type="button"
                className="bg-gray-400 rounded-md py-1 px-2 flex flex-row items-center text-white font-bold h-[36px]"
              >
                <MdEdit className="me-1" />
                Chỉnh sửa
              </button>

              <button
                type="button"
                className="bg-gray-400 rounded-md py-1 px-2 flex flex-row items-center text-white font-bold h-[36px]"
                onClick={() => setIsOpenModal(!isOpenModal)}
              >
                {isOpenModal ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`mt-[160px] lg:mt-[0px] h-[150px] bg-blue-300 w-full transition-all duration-500 overflow-hidden ${isOpenModal ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="w-full h-[150px]">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              observer={true}
              observeParents={true}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              ...
            </Swiper>
          </div>
        </div>

        <div
          className={`h-[150px] mt-2 bg-red-300 w-full transition-all duration-500 overflow-hidden max-h-96 opacity-100`}
        >
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Me
