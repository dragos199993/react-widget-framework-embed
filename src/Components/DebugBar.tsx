import React, { FunctionComponent } from 'react';
import * as styles from '../Assets/Debugbar.module.scss';

const myStyle: any = styles;
const clickEvent: Event = new CustomEvent("clickWidget",{detail: 'something here'});

const DebugBar: FunctionComponent = () => {
  const handleClick: () => void = () => {
    window.dispatchEvent(clickEvent);
  };

  return (
    <div className={ myStyle.debugbar } onClick={ handleClick }>
      Welcome to widget framework
    </div>
  );
};

export default DebugBar;
