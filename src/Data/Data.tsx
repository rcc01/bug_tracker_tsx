import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import EuroIcon from '@mui/icons-material/Euro';
import MoneyIcon from '@mui/icons-material/Money';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

export const SidebarData = [
  {
    icon: HomeIcon,
    heading: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: InventoryIcon,
    heading: 'Orders',
    path: '/orders',
  },
  {
    icon: PeopleAltIcon,
    heading: 'Customers',
    path: '/customers',
  },
  {
    icon: ListAltIcon,
    heading: 'Products',
    path: '/products',
  },
  {
    icon: StackedLineChartIcon,
    heading: 'Analytics',
    path: '/analytics',
  },
];

export const cardsData = [
  {
    id: 1,
    title: 'Sales',
    color: {
      backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5',
    },
    barValue: 57,
    value: '25,970',
    png: EuroIcon,
    series: [
      {
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    id: 2,
    title: 'Revenue',
    color: {
      backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7',
    },
    barValue: 80,
    value: '14,270',
    png: MoneyIcon,
    series: [
      {
        name: 'Revenue',
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    id: 3,
    title: 'Expenses',
    color: {
      backGround:
        'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)',
      boxShadow: '0px 10px 20px 0px #F9D59B',
    },
    barValue: 60,
    value: '4,270',
    png: ConfirmationNumberIcon,
    series: [
      {
        name: 'Expenses',
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];
