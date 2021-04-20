import React from 'react';
import ReactDOM from 'react-dom' ;
import  { motion } from 'framer-motion' ;

import './SideNav.css' ;

const SideNav = () => {
    return ReactDOM.createPortal(
        <React.Fragment>
            <motion.div className="sidenav">
                <nav>
                    <motion.li initial={{x: '-100vw', opacity: 0}} animate={{x:0, opacity:1}} transition={{type: 'spring', stiffness:50, damping: 8}}>Home</motion.li>
                    <motion.li initial={{x: '100vw', opacity: 0}} animate={{x:0, opacity:1}} transition={{type: 'spring', stiffness:50, damping: 8}}>Search</motion.li>
                    <motion.li initial={{x: '-100vw', opacity: 0}} animate={{x:0, opacity:1}} transition={{type: 'spring', stiffness:50, damping: 8}}>About us</motion.li>
                    <motion.li initial={{x: '100vw', opacity: 0}} animate={{x:0, opacity:1}} transition={{type: 'spring', stiffness:50, damping: 8}}>Contact us</motion.li>
                </nav> 
            </motion.div>
        </React.Fragment>,
        document.querySelector('#sidenav')
    );
}

export default SideNav ;