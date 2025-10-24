import { CiUser, CiHome, CiAlignBottom, CiCalendar } from 'react-icons/ci'
import { MdEdit } from 'react-icons/md'

function Me() {
  return (
    <div className="w-full bg-blue-100 h-[calc(100vh-120px)] flex justify-center">
      <div
        className="
      relative
      w-full lg:w-[65%] 
      h-[420px] bg-blue-200 "
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
            <div className="flex flex-row gap-2
             justify-center
             lg:justify-end">
              <button
                type="button"
                className="bg-blue-500 rounded-md py-1 px-2 flex flex-row items-center text-white font-bold"
              >
                <MdEdit className="me-1" />
                Công cụ chuyên nghiệp
              </button>

              <button
                type="button"
                className="bg-gray-400 rounded-md py-1 px-2 flex flex-row items-center text-white font-bold"
              >
                <MdEdit className="me-1" />
                Chỉnh sửa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Me
