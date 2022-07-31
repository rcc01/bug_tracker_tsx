import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css';
import CloseIcon from '@mui/icons-material/Close';

//prototype for const - it can include functions(): type
interface CardProps {
  title: string;
  color: {
    backGround: string;
    boxShadow: string;
  };
  barValue: number;
  value: string;
  png: any;
  series: {
    name: string;
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
  const Png = cardProps.png;
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
        <CircularProgressbar
          value={cardProps.barValue}
          text={`${cardProps.barValue}% `}
        />
        <span>{cardProps.title}</span>
      </div>
      <div className='detail'>
        <Png />
        <span>${cardProps.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
};

// ExpandedCard

const ExpandedCard = ({ cardProps, setExpanded }: SpecialisedCardProps) => {
  // Create root and chart

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
      <div className='chartContainer'></div>
      <span>Last 24 hours</span>
    </motion.div>
  );
};

export default Card;
