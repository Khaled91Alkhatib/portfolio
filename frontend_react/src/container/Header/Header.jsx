import React from 'react';

import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import "./Header.scss";
import pdf from '../../assets/khaledalkhatib.pdf'


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

const Header = () => {
  return (
    <div className='app__header app__flex'>

      <motion.div // This is used to show the name and hello in motion
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Khaled</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Frontend Web Developer</p>
            <p className='p-text'>I bring ideas to life in the browser</p>
          </div>
          <div className='tag-cmp app__flex'>
          <p className='p-text'>Check out my <a href={pdf} target="_blank" rel="noopener noreferrer"><text className='resume'>RESUME</text></a></p>
          </div>

        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.8, delayChildren: 0.8 }} // delay means that the elements inside this tag will wait until this tag shows up
        className='app__header-img'
      >
        <img src={images.profile} alt="profile-bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile-circle"
          className='overlay-circle'
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.react, images.html, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default AppWrap(Header, 'home');