import { useState } from 'react';
import '../styles/styles.css';
import MenuIcon from '@mui/icons-material/Menu';
import mainLogo from '../Images/logo.png';
import { motion } from 'framer-motion';
import { SidebarData } from '../Data/Data';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%',
    },
  };
  return (
    <>
      <div
        className='bars'
        style={
          expanded ? { top: '1.45%', left: '5%' } : { top: '1.45%', left: '5%' }
        }
        onClick={() => setExpanded(!expanded)}
      >
        <MenuIcon />
      </div>

      <motion.div
        className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 2500 ? `${expanded}` : ''}
      >
        <div className='logo'>
          <img
            src={mainLogo}
            alt=''
            style={{
              width: '6rem',
              height: '3.5rem',
              paddingLeft: '30px',
            }}
          />
          <span>
            Bug <span>Tracker</span>
          </span>
        </div>

        {/* menu */}
        <div className='menu'>
          {SidebarData.map((item, index) => {
            return (
              <NavLink
                style={{ textDecoration: 'none', color: 'black' }}
                to={item.path}
                className={selected === index ? 'menuItem' : 'menuItem'}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </NavLink>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
