import * as React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Box } from '@mui/material'
import { Toolbar } from './Toolbar'
import { CalendarApi } from '@fullcalendar/core'

type Todo = {
  id: number
  title: string
  start: string
  completed: boolean
}

function Calendar() {
  const [todos, setTodos] = React.useState<Todo[]>([
    { id: 1, title: 'Dọn dẹp bàn làm việc', start: '2025-10-13', completed: false },
    { id: 2, title: 'Viết báo cáo tuần', start: '2025-10-13T09:00:00', completed: true },
    { id: 3, title: 'Tập thể dục buổi sáng', start: '2025-10-13T06:00:00', completed: false },
    { id: 4, title: 'Gọi điện cho khách hàng', start: '2025-10-13T14:00:00', completed: false },
    { id: 5, title: 'Đọc sách Đắc Nhân Tâm', start: '2025-10-13T21:00:00', completed: true }
  ])

  const [state, setState] = React.useState({
    weekendsVisible: true,
    currentEvents: []
  })

  // const calendarRef: React.RefObject<FullCalendar> = React.useRef()
  const calendarRef = React.useRef<FullCalendar | null>(null)
  let calendarApi: CalendarApi | undefined = calendarRef?.current?.getApi()

  const handleDateSelect = (selectInfo) => {
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
    }
  }

  const handleEventClick = (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  const events = React.useMemo(
    () =>
      todos.map((todo) => ({
        ...todo,
        id: String(todo.id)
      })),
    [todos]
  )

  const handleEvents = React.useCallback((events) => {
    setState((prev) => ({ ...prev, currentEvents: events }))
  }, [])

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="demo-app">
      <Toolbar calendarApi={calendarApi} />
      <div className="demo-app-main">
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
    </div>
  )
}

function renderEventContent(eventInfo) {
  return (
    <Box bgcolor="red">
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </Box>
  )
}

export default Calendar
