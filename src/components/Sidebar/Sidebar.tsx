import React, { useState } from "react"
import "./Sidebar.css"
import MenuIcon from '@mui/icons-material/Menu';
import mainLogo from "../../Images/logo.png"
import { motion } from "framer-motion"
import { SidebarData } from "../../Data/Data";


const Sidebar: React.FC = () => {

  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };



  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "55%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        I'm the sidebar

        <MenuIcon />

      </div>

      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="logo">
          <img
            src={mainLogo}
            alt=""
            style={{ width: "3rem", height: "3rem" }}
          />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}

          <div className="menuItem"></div>
        </div>
      </motion.div>




    </>

  )
}


export { Sidebar }



