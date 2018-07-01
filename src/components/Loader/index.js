// @flow
import * as React from 'react';
import './styles.css';

type Props = {
  className?: string
};

const Loader = (props: Props) => {
  return (
    <div className={props.className || 'loader'}>
      <div className="loader-spinning-wheel" />
    </div>
  );
};
export default Loader;
