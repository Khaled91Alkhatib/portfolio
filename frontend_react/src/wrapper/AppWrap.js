import React from 'react';
import { NavigationDots, SocialMedia } from '../components';


// Here we are doing higher order components (HOC)
const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}> {/* We are using the id to know which section are we in */}
      <SocialMedia />
      <div className='app__wrapper app__flex'>
        <Component />
        <div className='copyright'>
          <p className='p-text'>@2022 KHALED</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;