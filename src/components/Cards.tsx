import '../styles/styles.css';
import Card from './Card/Card';
import { useEffect, useState } from 'react';
import { RowDataTicket } from './TicketsTable/TicketsTable';
import axios from 'axios';
import apiUrls from '../constants/apiUrls';
import Container from 'react-bootstrap/Container';

export interface CardsProps {
  children?: React.ReactNode;
}

const priorities = ['Immediate', 'High', 'Medium', 'Low'];

const types = ['Issue', 'Bug', 'Feature'];

const statuses = ['New', 'In Progress', 'Resolved'];

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    (groups[key(item)] ||= []).push(item);
    return groups;
  }, {} as Record<K, T[]>);

const cards = [
  {
    title: 'Tickets by Priority',
    groupBy: (element: RowDataTicket) => {
      return element.priority;
    },
    addZeroPercentGroups: (groups: [string, RowDataTicket[]][]) => {
      priorities.forEach((priority: string) => {
        if (
          groups.find((group: [string, RowDataTicket[]]) => {
            return group[0] === priority;
          }) === undefined
        ) {
          groups.push([priority, []]);
        }
      });
    },
    color: {
      backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5',
    },
  },
  {
    title: 'Tickets by Type',
    groupBy: (element: RowDataTicket) => {
      return element.type;
    },
    addZeroPercentGroups: (groups: [string, RowDataTicket[]][]) => {
      types.forEach((type: string) => {
        if (
          groups.find((group: [string, RowDataTicket[]]) => {
            return group[0] === type;
          }) === undefined
        ) {
          groups.push([type, []]);
        }
      });
    },
    color: {
      backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7',
    },
  },
  {
    title: 'Tickets by Status',
    groupBy: (element: RowDataTicket) => {
      return element.status;
    },
    addZeroPercentGroups: (groups: [string, RowDataTicket[]][]) => {
      statuses.forEach((status: string) => {
        if (
          groups.find((group: [string, RowDataTicket[]]) => {
            return group[0] === status;
          }) === undefined
        ) {
          groups.push([status, []]);
        }
      });
    },
    color: {
      backGround:
        'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)',
      boxShadow: '0px 10px 20px 0px #F9D59B',
    },
  },
];

const Cards = () => {
  const [rowDataTicket, setRowDataTicket] = useState<RowDataTicket[] | null>(
    null
  );

  useEffect(() => {
    axios
      .get<RowDataTicket[]>(apiUrls.tickets.GET)
      .then((result) => setRowDataTicket(result.data));
  }, []);

  if (rowDataTicket === null) {
    return <>hola</>; // TODO: This can be a loader instead, the point is that we do not have data so we cannot render anything.
  }

  return (
    <div className='cards'>
      {cards.map((card, id) => {
        // Grouping
        const groups = Object.entries(groupBy(rowDataTicket, card.groupBy));
        // Adding groups without items
        card.addZeroPercentGroups(groups);
        // Calculating the group size for the chart.
        const labels: string[] = [];
        const compactSeries: number[] = [];
        groups.forEach((group: [string, RowDataTicket[]]) => {
          labels.push(group[0]);
          compactSeries.push(group[1].length);
        });
        return (
          <div className='parentContainer' key={id}>
            <Card
              title={card.title}
              labels={labels}
              color={card.color}
              compactSeries={compactSeries}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
