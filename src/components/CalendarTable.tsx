import { useCallback, useState } from 'react';
import FullCalendar, {
  DateSelectArg,
  EventApi,
  EventClickArg,
} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './events-utils';
import '../styles/styles.css';

const CalendarTable = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const handleEvents = useCallback(
    (events: EventApi[]) => setCurrentEvents(events),
    []
  );
  const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
    let title = prompt('Add New Event:')?.trim();
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }, []);
  const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    if (window.confirm(`Delete "${clickInfo.event.title}" Event?`)) {
      clickInfo.event.remove();
    }
  }, []);
  return (
    <div className='demo-app'>
      <div className='demo-app-main'>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          selectable={true}
          editable={true}
          initialEvents={INITIAL_EVENTS}
          locales={allLocales}
          locale='en'
          eventsSet={handleEvents}
          select={handleDateSelect}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};

export default CalendarTable;
