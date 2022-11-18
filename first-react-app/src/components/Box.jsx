import React from 'react';

export default function Box({ className, ...rest }) {
  // props { name: 'John', children:  }
  return <div {...rest} className={`box box-${className}`} />;
}
