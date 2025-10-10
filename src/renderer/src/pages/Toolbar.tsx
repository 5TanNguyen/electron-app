import { CalendarApi } from '@fullcalendar/core';
import { Button, ButtonGroup } from '@mui/material';

export type TCalendarHeader = {
  calendarApi: CalendarApi;
};

export const Toolbar = ({ calendarApi, ...rest }) => {
  console.log({ rest });

  const handleChangePeriod = (period) => {
    calendarApi.changeView(period);
  };

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={() => handleChangePeriod('dayGridMonth')}>month</Button>
      <Button onClick={() => handleChangePeriod('timeGridWeek')}>week</Button>
      <Button onClick={() => handleChangePeriod('timeGridDay')}>day</Button>
    </ButtonGroup>
  );
};
