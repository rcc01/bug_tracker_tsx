import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import ListAltIcon from '@mui/icons-material/ListAlt';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

export const SidebarData = [
  {
    icon: HomeIcon,
    heading: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: InventoryIcon,
    heading: 'Tickets',
    path: '/tickets',
  },
  {
    icon: ListAltIcon,
    heading: 'Calendar',
    path: '/calendar',
  },
  {
    icon: PeopleAltIcon,
    heading: 'Employees',
    path: '/employees',
  },
  {
    icon: LogoutIcon,
    heading: 'Logout',
    path: '/',
  },
];

export const cardsData = [
  {
    id: 1,
    title: 'Tickets by Priority',
    labels: ['Immediate', 'High', 'Medium', 'Low'],
    color: {
      backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5',
    },
    compactSeries: [10, 20, 30, 40],
    series: [
      {
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    id: 2,
    title: 'Tickets by Type',
    labels: ['Issue', 'Bug', 'Feature Request'],
    color: {
      backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7',
    },
    compactSeries: [8, 23, 35],
    series: [
      {
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    id: 3,
    title: 'Tickets by Status',
    labels: ['Resolved', 'New', 'In Progress'],
    color: {
      backGround:
        'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)',
      boxShadow: '0px 10px 20px 0px #F9D59B',
    },
    compactSeries: [12, 7, 16],
    series: [
      {
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const UpdatesData = [
  {
    img: img1,
    name: 'Andrew Thomas',
    noti: 'has joined the team on 25-08-2022 as a Software Engineer.',
    time: '25 seconds ago',
  },
  {
    img: img2,
    name: 'Lulu Nicholson',
    noti: 'has created new Tickets for the X Project.',
    time: '30 minutes ago',
  },
  {
    img: img3,
    name: 'Emerson Stanley',
    noti: 'has set up an online meeting on 5th September at 10 am CET time.',
    time: '2 hours ago',
  },
];

import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
