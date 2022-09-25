import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css';
import Chart from 'react-apexcharts';
import CloseIcon from '@mui/icons-material/Close';
import { ApexOptions } from 'apexcharts';
import { cardsData } from '../../Data/Data';

//prototype for const - it can include functions(): type
export interface CardProps {
  title: string;
  labels: string[];
  color: {
    backGround: string;
    boxShadow: string;
  };
  compactSeries: number[];
  series: {
    data: number[];
  }[];
}

interface SpecialisedCardProps {
  cardProps: CardProps;
  setExpanded: () => void;
}

const Card = (props: CardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {expanded ? (
          <ExpandedCard
            cardProps={props}
            setExpanded={() => setExpanded(false)}
          />
        ) : (
          <CompactCard
            cardProps={props}
            setExpanded={() => setExpanded(true)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

// CompactCard
// destructuring from SpecialisedCardProps
const CompactCard = ({ cardProps, setExpanded }: SpecialisedCardProps) => {
  return (
    <motion.div
      className='CompactCard'
      style={{
        background: cardProps.color.backGround,
        boxShadow: cardProps.color.boxShadow,
      }}
      onClick={setExpanded}
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className='radialBar'>
        <Chart
          type='pie'
          width={280}
          height={129}
          series={cardProps.compactSeries}
          options={{
            labels: cardProps.labels,
          }}
        />
        <span style={{ marginTop: '6px' }}>{cardProps.title}</span>
      </div>
    </motion.div>
  );
};

// ExpandedCard

const ExpandedCard = ({ cardProps, setExpanded }: SpecialisedCardProps) => {
  // Create root and chart
  const apexOptions: ApexOptions = {
    chart: {
      type: 'area',
      height: 'auto',
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35,
      },
    },
    fill: {
      colors: ['#fff'],
      type: 'gradient',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      colors: ['white'],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
  };

  return (
    <motion.div
      className='ExpandedCard'
      style={{
        background: cardProps.color.backGround,
        boxShadow: cardProps.color.boxShadow,
      }}
    >
      <div
        style={{
          alignSelf: 'flex-end',
          cursor: 'pointer',
          color: 'white',
        }}
      >
        <CloseIcon onClick={setExpanded} />
      </div>

      <span>{cardProps.title}</span>
      <div className='chartContainer'>
        <Chart
          style={{ minHeight: '100.037px !important' }}
          series={cardProps.series}
          type='area'
          options={apexOptions}
        />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};

export default Card;
