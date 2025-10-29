import { MdEdit } from 'react-icons/md'
import { AiFillSignal } from 'react-icons/ai'
import { IoIosArrowDown, IoIosArrowUp, IoIosPersonAdd } from 'react-icons/io'
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

  const friends = [
    {
      id: 1,
      name: 'Nguyễn Minh Anh',
      img: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Trần Thị Bảo Ngọc',
      img: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Phạm Hữu Tài',
      img: 'https://randomuser.me/api/portraits/men/68.jpg'
    },
    {
      id: 4,
      name: 'Lê Thu Hà',
      img: 'https://randomuser.me/api/portraits/women/25.jpg'
    },
    {
      id: 5,
      name: 'Đỗ Văn Duy',
      img: 'https://randomuser.me/api/portraits/men/56.jpg'
    },
    {
      id: 6,
      name: 'Võ Thị Kim Yến',
      img: 'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
      id: 7,
      name: 'Ngô Đức Hoàng',
      img: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      id: 8,
      name: 'Phan Mỹ Linh',
      img: 'https://randomuser.me/api/portraits/women/41.jpg'
    },
    {
      id: 9,
      name: 'Lý Hữu Phước',
      img: 'https://randomuser.me/api/portraits/men/24.jpg'
    },
    {
      id: 10,
      name: 'Đinh Bảo Trâm',
      img: 'https://randomuser.me/api/portraits/women/9.jpg'
    },
    {
      id: 11,
      name: 'Nguyễn Quang Huy',
      img: 'https://randomuser.me/api/portraits/men/80.jpg'
    },
    {
      id: 12,
      name: 'Tạ Thị Hồng Nhung',
      img: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    {
      id: 13,
      name: 'Phùng Văn Khánh',
      img: 'https://randomuser.me/api/portraits/men/14.jpg'
    },
    {
      id: 14,
      name: 'Hoàng Thị Minh Tú',
      img: 'https://randomuser.me/api/portraits/women/50.jpg'
    },
    {
      id: 15,
      name: 'Trịnh Quốc Thái',
      img: 'https://randomuser.me/api/portraits/men/91.jpg'
    },
    {
      id: 13,
      name: 'Phùng Văn Khánh',
      img: 'https://randomuser.me/api/portraits/men/14.jpg'
    },
    {
      id: 14,
      name: 'Hoàng Thị Minh Tú',
      img: 'https://randomuser.me/api/portraits/women/50.jpg'
    },
    {
      id: 15,
      name: 'Trịnh Quốc Thái',
      img: 'https://randomuser.me/api/portraits/men/91.jpg'
    },
    {
      id: 13,
      name: 'Phùng Văn Khánh',
      img: 'https://randomuser.me/api/portraits/men/14.jpg'
    },
    {
      id: 14,
      name: 'Hoàng Thị Minh Tú',
      img: 'https://randomuser.me/api/portraits/women/50.jpg'
    },
    {
      id: 15,
      name: 'Trịnh Quốc Thái',
      img: 'https://randomuser.me/api/portraits/men/91.jpg'
    }
  ]

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
          className={`mt-[170px] lg:mt-[10px] h-[350px] w-full transition-all duration-500 overflow-hidden ${isOpenModal ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <label htmlFor="" className="text-white font-bold text-lg mb-2">
            Những người bạn có thể biết
          </label>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={8}
            slidesPerView={7}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            observer={true}
            observeParents={true}
            className="h-[290px] mt-2"
          >
            {friends.map((p) => (
              <SwiperSlide
                key={p.id}
                className="!w-[180px] h-[350px] border-2 rounded-xl border-gray-500"
              >
                <img src={p.img} className="w-[100%] h-[150px] rounded-t-xl" />
                <div className="flex flex-col gap-2">
                  <span className="text-white font-bold mt-1 ms-3">{p.name}</span>
                  <span className="text-sm text-white mt-1 ms-3">X bạn chung</span>
                  <button
                    type="button"
                    className="w-[calc(100%-20px)] mx-auto mt-1 bg-blue-400 h-[30px] rounded-3xl flex flex-row items-center justify-center gap-1"
                  >
                    <IoIosPersonAdd />
                    Thêm bạn bè
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className={`
            flex
            flex-col lg:flex-row
            h-[150px] mt-2
            bg-red-300 w-full 
            transition-all 
            duration-500 
            overflow-hidden 
            max-h-96 opacity-100

            `}
        >
          <div
            className="
            w-[100%] lg:w-[40%] 
            h-[300px] lg:h-[200px]
            bg-amber-500"
          ></div>
          <div
            className="
              w-[100%] lg:w-[60%] 
              h-[300px] lg:h-[200px]
            bg-gray-500"
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Me
