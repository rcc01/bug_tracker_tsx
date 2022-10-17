import { AnimatePresence, motion } from 'framer-motion';
import { UpdatesData } from '../Data/Data';
import '../styles/styles.css';

function RecentEmployees() {
  return (
    <AnimatePresence>
      <motion.div
        className='updates'
        whileHover={{ scale: 1.045 }}
        whileTap={{ scale: 0.9 }}
      >
        {UpdatesData.map((update, id) => {
          return (
            <div className='update' key={id}>
              <img src={update.img} alt='' />
              <div className='noti'>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span>{update.name}</span>
                  <span> {update.noti}</span>
                </div>
                <span>{update.time}</span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}

export default RecentEmployees;
