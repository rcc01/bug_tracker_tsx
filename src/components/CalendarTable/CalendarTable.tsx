import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const locales = {
  'en-GB': require('date-fns/locale/en-GB'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: 'Big Meeting',
    allDay: true,
    start: new Date(2022, 7, 1),
    end: new Date(2022, 7, 1),
  },
  {
    title: 'Holidays',
    start: new Date(2022, 7, 8),
    end: new Date(2022, 7, 12),
  },
  {
    title: 'Conference',
    start: new Date(2022, 7, 22),
    end: new Date(2022, 7, 22),
  },
];

const CalendarTable = () => {
  const [newEvent, setNewEvent] = useState<{
    title: any;
    start: any;
    end: any;
  }>({ title: '', start: '', end: '' });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Add New Event</h3>
      <div style={{ display: 'inline-flex', gap: '20px' }}>
        <input
          style={{
            padding: '8 !important',
            margin: '10px 15px 25px 30px !important',
            borderRadius: '5px',
            border: '1px solid gray',
          }}
          type='text'
          placeholder='Add Title'
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText='Start Date'
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText='End Date'
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
      </div>
      <div>
        <button
          style={{
            marginTop: '16px',
            padding: '8px !important',
            width: '13%!important',
          }}
          onClick={handleAddEvent}
        >
          Add Event
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500, margin: '40px' }}
      />
    </div>
  );
};

export default CalendarTable;
