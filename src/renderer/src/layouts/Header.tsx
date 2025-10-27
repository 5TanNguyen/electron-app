import { CiUser, CiHome, CiAlignBottom, CiCalendar } from 'react-icons/ci'
import { LuListTodo } from 'react-icons/lu'
import { Link } from 'react-router'

function Header() {
  return (
    <header className="bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex">
              <img
                className="w-auto h-8 lg:h-10"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                alt=""
              />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>

            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:mx-auto lg:space-x-10">
            <Link
              to="/"
              className="text-xl font-bold text-black h-[100px] w-[100px] flex flex-col justify-center items-center gap-2"
            >
              <small>Home</small>
            </Link>

            <Link
              to="/hello"
              className="text-xl font-bold text-black h-[100px] w-[100px] flex flex-col justify-center items-center gap-2"
            >
              <small>Expense</small>
              {/* Chi tiêu */}
            </Link>
            <a
              className="text-xl font-bold text-black h-[100px] w-[100px] flex flex-col justify-center items-center gap-2"
              href="/toi"
            >
              <small>Me</small>
            </a>
            <a
              className="text-xl font-bold text-black h-[100px] w-[100px] flex flex-col justify-center items-center gap-2"
              href=""
            >
              <small>Todo</small>
              {/* Việc cần làm */}
            </a>
            <Link
              to="/calendar"
              className="text-xl font-bold text-black h-[100px] w-[100px] flex flex-col justify-center items-center gap-2"
            >
              <small>Calendar</small>
              {/* Lịch */}
            </Link>
          </div>

          <a
            href="#"
            title=""
            className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            {' '}
            GO{' '}
          </a>
        </nav>

        <nav className="lg:hidden absolute left-0 bottom-0 bg-amber-100 h-[100px] w-full">
          <div className="flex item-center justify-between gap-1 px-32">
            <Link
              to="/"
              className="text-4xl font-bold text-black h-[100px] w-[100px] flex flex-col justify-center items-center gap-2"
            >
              <CiHome />
              <small>Home</small>
            </Link>

            <Link
              to="/hello"
              className="text-4xl font-bold text-black h-[100px] w-[100px] flex flex-col justify-center items-center gap-2"
            >
              <CiAlignBottom />
              <small>Expense</small>
              {/* Chi tiêu */}
            </Link>
            <a
              className="text-4xl font-bold text-black h-[100px] w-[100px] flex flex-col justify-center items-center gap-2"
              href=""
            >
              <CiUser />
              <small>Me</small>
            </a>
            <a
              className="text-4xl font-bold text-black h-[100px] w-[100px] flex flex-col justify-center items-center gap-2"
              href=""
            >
              <LuListTodo />
              <small>Todo</small>
              {/* Việc cần làm */}
            </a>
            <Link
              to="/calendar"
              className="text-4xl font-bold text-black h-[100px] w-[100px] flex flex-col justify-center items-center gap-2"
            >
              <CiCalendar />
              <small>Calendar</small>
              {/* Lịch */}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
