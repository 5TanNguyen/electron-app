import * as React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Box } from '@mui/material'
import { Toolbar } from './Toolbar'
import { CalendarApi } from '@fullcalendar/core'
import axios from 'axios'
import Notiflix from 'notiflix'
import { IoMdClose, IoIosCloseCircle, IoMdCloseCircle } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'
import { BiArrowFromRight, BiArrowFromLeft } from 'react-icons/bi'
import { BsCalendar2Date } from 'react-icons/bs'
import { FaRegBookmark, FaCheckCircle } from 'react-icons/fa'
import { FaRegCircleQuestion } from 'react-icons/fa6'

type Todo = {
  id: number
  title: string
  start: string
  end: string
  completed: boolean
}

function Calendar() {
  const [todos, setTodos] = React.useState<Todo[]>(
    localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos') || '') : []
  )
  const [isOpen, setIsOpen] = React.useState(false)
  const [todoDetail, setTodoDetail] = React.useState<Todo | null>(null)

  const [state, setState] = React.useState({
    weekendsVisible: true
  })

  const calendarRef = React.useRef<FullCalendar | null>(null)
  let calendarApi: CalendarApi | undefined = calendarRef?.current?.getApi()

  const handleDateSelect = async (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: String(Date.now()),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })

      const newTodo = {
        id: Date.now(),
        title: title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        completed: false
      }

      setTodos((prev) => [...prev, newTodo])

      await axios({
        headers: {
          'DHNCT-API-KEY': '@cntt@dhnct@',
          'DHNCT-Authorization':
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJxbF9uZ3VvaV9kdW5nX2lkIjoiNjI0IiwicWxfbmd1b2lfZHVuZ19ob190ZW4iOiJUclx1MDFiMFx1MDFhMW5nIFZcdTAxMDNuIEtoXHUwMGUxbmgiLCJxbF9uZ3VvaV9kdW5nX2VtYWlsIjoidHZraGFuaEBuY3R1LmVkdS52biIsInFsX25ndW9pX2R1bmdfYXZhdGFyIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FDZzhvY0p5bUVtbkx3VUMtSTNSOV8tbFNKX0VZNXNSYzNaX3Q3dzN0Q3A3QWltYjRXYUYtRGc9czk2LWMiLCJxbF9uZ3VvaV9kdW5nX3Rva2VuIjpudWxsLCJxbF9uZ3VvaV9kdW5nX2xvYWkiOiIyIiwicWxfbmd1b2lfZHVuZ19uZ2F5X3RhbyI6IjIwMjQtMDktMTMgMTU6MDc6MzIiLCJxbF9uZ3VvaV9kdW5nX25nYXlfY2FwX25oYXQiOiIyMDI1LTEwLTEzIDEwOjI5OjE4IiwiYWN0aXZlX2ZsYWciOiIxIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDktMjUgMDg6NTE6MjQiLCJ1cGRhdGVkX2F0IjoiMjAyNS0xMC0xMyAxNDoyMDo0NyIsInFsX25ndW9pX2R1bmdfaXNfYWRtaW4iOiIxIiwicWxfbmd1b2lfZHVuZ19sYV9sYW5oX2RhbyI6IjEiLCJkb191dV90aWVuX2xhbmhfZGFvIjpudWxsLCJpZF9kb25fdmkiOiI0MCIsInFsX25ndW9pX2R1bmdfdGhlYWRpZCI6bnVsbCwibGFuX2RhbmdfbmhhcF9jdW9pIjoiMjAyNS0xMC0xMyAxMDoyOToxOCIsInFsX25ndW9pX2R1bmdfemFsb19vYV91aWQiOm51bGwsInFsX25ndW9pX2R1bmdfemFsb191aWQiOiI2MzM1OTU5MzcwOTk5MDI2MTczIiwidGVuX2Rvbl92aSI6IlRydW5nIHRcdTAwZTJtIFBUJlx1MDFhZkRQTSBETkMiLCJ0ZW5fdmlldF90YXQiOiJUVCBQVCZcdTAxYWZEUE0gRE5DIiwidGVuX2Rvbl92aV9lbiI6IkROQyBTb2Z0d2FyZSBEZXZlbG9wbWVudCAmIEFwcGxpY2F0aW9uIENlbnRlciIsIm1hX2Rvbl92aSI6bnVsbCwibG9haSI6IlRSVU5HX1RBTSIsImVtYWlsIjoidHRwaGFubWVtQG5jdHUuZWR1LnZuIiwic3RhcnRfdGltZSI6MTc2MDQxMTQ5Mi41MTczOTd9.0fDI17kTXbo-vSUUH8ePhxfPGNOAbyiGIHOcE_n8Q1Q'
        },
        url: 'http://localhost/dncoffice_api/api/v1/admin/hrm/dangkylamthem/create',
        method: 'post',
        data: {
          id_nhan_vien: 4736,
          ngay: selectInfo.startStr,
          gio_bat_dau: '17:00:00',
          gio_ket_thuc: '21:00:00',
          loai_ngay: 'Ngay_thuong',
          trang_thai: 'Cho_duyet',
          ghi_chu: title,
          so_gio: 0,
          id_he_so_ot: null,
          nguoi_tao: null,
          nguoi_sua: null,
          trang_thai_tchc: 'Cho_duyet',
          lddv_duyet_id: null,
          tchc_duyet_id: null
        }
      })
        .then(function (response) {
          console.log(response.data)
          Notiflix.Notify.success('Thêm thành công!')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  const handleEventClick = (clickInfo) => {
    setIsOpen(!isOpen)

    console.log('clickInfo', clickInfo.event)

    // const startTime = clickInfo.event.startStr.split('T')[1]?.slice(0, 8) || ''
    // const endTime = clickInfo.event.endStr?.split('T')[1]?.slice(0, 8) || ''

    setTodoDetail({
      id: Number(clickInfo.event.id),
      title: clickInfo.event.title,
      start: clickInfo.event.startStr,
      end: clickInfo.event.endStr,
      completed: false
    })
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove()
    // }
  }

  const events = React.useMemo(
    () =>
      todos.map((todo) => ({
        ...todo,
        id: String(todo.id),
        backgroundColor: todo.completed ? '#4CAF50' : '#4b69c1',
        borderColor: 'transparent',
        textColor: '#fff'
      })),
    [todos]
  )

  const handleEvents = React.useCallback((events) => {
    setState((prev) => ({ ...prev, todos: events }))
  }, [])

  React.useEffect(() => {
    getTodosAPI()
  }, [])

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const getTodosAPI = async () => {
    await axios({
      headers: {
        'DHNCT-API-KEY': '@cntt@dhnct@',
        'DHNCT-Authorization':
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJxbF9uZ3VvaV9kdW5nX2lkIjoiNjI0IiwicWxfbmd1b2lfZHVuZ19ob190ZW4iOiJUclx1MDFiMFx1MDFhMW5nIFZcdTAxMDNuIEtoXHUwMGUxbmgiLCJxbF9uZ3VvaV9kdW5nX2VtYWlsIjoidHZraGFuaEBuY3R1LmVkdS52biIsInFsX25ndW9pX2R1bmdfYXZhdGFyIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2FcL0FDZzhvY0p5bUVtbkx3VUMtSTNSOV8tbFNKX0VZNXNSYzNaX3Q3dzN0Q3A3QWltYjRXYUYtRGc9czk2LWMiLCJxbF9uZ3VvaV9kdW5nX3Rva2VuIjpudWxsLCJxbF9uZ3VvaV9kdW5nX2xvYWkiOiIyIiwicWxfbmd1b2lfZHVuZ19uZ2F5X3RhbyI6IjIwMjQtMDktMTMgMTU6MDc6MzIiLCJxbF9uZ3VvaV9kdW5nX25nYXlfY2FwX25oYXQiOiIyMDI1LTEwLTEzIDEwOjI5OjE4IiwiYWN0aXZlX2ZsYWciOiIxIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDktMjUgMDg6NTE6MjQiLCJ1cGRhdGVkX2F0IjoiMjAyNS0xMC0xMyAxNDoyMDo0NyIsInFsX25ndW9pX2R1bmdfaXNfYWRtaW4iOiIxIiwicWxfbmd1b2lfZHVuZ19sYV9sYW5oX2RhbyI6IjEiLCJkb191dV90aWVuX2xhbmhfZGFvIjpudWxsLCJpZF9kb25fdmkiOiI0MCIsInFsX25ndW9pX2R1bmdfdGhlYWRpZCI6bnVsbCwibGFuX2RhbmdfbmhhcF9jdW9pIjoiMjAyNS0xMC0xMyAxMDoyOToxOCIsInFsX25ndW9pX2R1bmdfemFsb19vYV91aWQiOm51bGwsInFsX25ndW9pX2R1bmdfemFsb191aWQiOiI2MzM1OTU5MzcwOTk5MDI2MTczIiwidGVuX2Rvbl92aSI6IlRydW5nIHRcdTAwZTJtIFBUJlx1MDFhZkRQTSBETkMiLCJ0ZW5fdmlldF90YXQiOiJUVCBQVCZcdTAxYWZEUE0gRE5DIiwidGVuX2Rvbl92aV9lbiI6IkROQyBTb2Z0d2FyZSBEZXZlbG9wbWVudCAmIEFwcGxpY2F0aW9uIENlbnRlciIsIm1hX2Rvbl92aSI6bnVsbCwibG9haSI6IlRSVU5HX1RBTSIsImVtYWlsIjoidHRwaGFubWVtQG5jdHUuZWR1LnZuIiwic3RhcnRfdGltZSI6MTc2MDQxMTQ5Mi41MTczOTd9.0fDI17kTXbo-vSUUH8ePhxfPGNOAbyiGIHOcE_n8Q1Q'
      },
      url: 'http://localhost/dncoffice_api/api/v1/admin/hrm/dangkylamthem/getByUserId/4736',
      method: 'get'
    })
      .then(function (response) {
        console.log(response.data)
        let dklt = response.data.data
        if (Array.isArray(dklt)) {
          const newTodos = dklt.map((item) => ({
            id: item.id_dang_ky_lam_them,
            title: item.ghi_chu,
            start: `${item.ngay}T${item.gio_bat_dau}`,
            end: `${item.ngay}T${item.gio_ket_thuc}`,
            completed: true
          }))
          setTodos(newTodos)

          console.log('newTodos', newTodos)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="div-fullcalendar w-3/4 mx-auto mt-10">
      <Toolbar calendarApi={calendarApi} />
      <div className="div-fullcalendar-main">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          // headerToolbar={{
          //   left: 'prev,next today',
          //   center: 'title',
          //   right: 'dayGridMonth,timeGridWeek,timeGridDay',
          // }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={state.weekendsVisible}
          events={events}
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="dklt-main fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50"
          >
            <div className="flex items-center justify-between w-full px-3 mb-4 py-2 border-b border-gray-300">
              <h2 className="text-2xl font-medium">Thông tin đăng ký tăng ca</h2>
              <button className="dklt-close" onClick={() => setIsOpen(false)}>
                <IoMdClose />
              </button>
            </div>

            <div className="w-full bg-amber-50 height-[100px] flex items-center justify-center gap-14 relative">
              <div className="flex flex-col items-center">
                <span>Đăng ký</span>
                <FaCheckCircle className="text-xl text-green-500 bg-white z-50 border-radius-full border-yellow-500" />
              </div>

              <div className="flex flex-col items-center">
                <span>Lãnh đạo</span>
                <FaRegCircleQuestion className="text-xl text-yellow-500 bg-white z-50 border-radius-full border-yellow-500" />
              </div>

              <div className="flex flex-col items-center">
                <span>TCHC</span>
                <IoMdCloseCircle className="text-2xl text-red-500 bg-white z-50 border-radius-full border-yellow-500" />
              </div>
            </div>
            <div className="w-full bg-amber-50 height-[100px] flex items-center justify-center gap-14 relative">
              <div className="absolute w-[240px] h-[3px] bg-amber-800 mb-6 ms-3 z-0"></div>
            </div>
            <div className="dklt-body px-3 h-[250px] mt-5">
              <span className="flex items-center mb-2.5">
                <FaRegBookmark className="w-[30px] text-xl me-2" />
                {todoDetail?.title}
              </span>
              <span className="flex items-center mb-2.5">
                <BsCalendar2Date className="w-[30px] text-xl me-2" />
                {todoDetail?.start.split('T')[0].split('-').reverse().join('/') || ''}
              </span>
              <span className="flex items-center mb-2.5">
                <BiArrowFromLeft className="w-[30px] text-xl me-2" />
                {todoDetail?.start.split('T')[1]?.slice(0, 8) || ''}
              </span>
              <span className="flex items-center mb-2.5">
                <BiArrowFromRight className="w-[30px] text-xl me-2" />
                {todoDetail?.end.split('T')[1]?.slice(0, 8) || ''}
              </span>

              <div className="w-full bg-amber-50 height-[100px] flex items-center justify-center gap-14 relative">
                <div className="flex flex-col items-center">
                  <span>Đăng ký</span>
                  <FaCheckCircle className="text-xl text-green-500 bg-white z-50 border-radius-full border-yellow-500" />
                </div>

                <div className="flex flex-col items-center">
                  <span>Lãnh đạo</span>
                  <FaRegCircleQuestion className="text-xl text-yellow-500 bg-white z-50 border-radius-full border-yellow-500" />
                </div>

                <div className="flex flex-col items-center">
                  <span>TCHC</span>
                  <IoMdCloseCircle className="text-2xl text-red-500 bg-white z-50 border-radius-full border-yellow-500" />
                </div>
              </div>
            </div>
            <div className="dklt-footer px-3 mt-4 flex justify-end gap-2">
              <button
                className="dklt-btn dklt-btn-primary p-2 rounded-sm bg-cyan-500  border-cyan-500 text-white"
                onClick={() => setIsOpen(false)}
              >
                Xác nhận
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function renderEventContent(eventInfo) {
  return (
    <Box bgcolor="red">
      {/* <b>{eventInfo.timeText}</b> */}
      <i>{eventInfo.event.title}</i>
    </Box>
  )
}

export default Calendar
