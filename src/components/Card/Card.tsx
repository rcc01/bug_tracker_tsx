import { AnimatePresence, motion } from 'framer-motion';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts';
import '../../styles/styles.css';

interface CardProps {
  title: string;
  labels: string[];
  color: {
    backGround: string;
    boxShadow: string;
  };
  compactSeries: number[];
}

const Card = (props: CardProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className='CompactCard'
        style={{
          background: props.color.backGround,
          boxShadow: props.color.boxShadow,
        }}
        whileHover={{ scale: 1.045 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className='radialBar'>
          <Chart
            type='pie'
            width={280}
            height={129}
            series={props.compactSeries}
            options={{
              labels: props.labels,
            }}
          />
          <span style={{ marginTop: '6px' }}>{props.title}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Card;
