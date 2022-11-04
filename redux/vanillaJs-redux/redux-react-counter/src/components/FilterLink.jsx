import React from 'react';

export default function FilterLink({ onClick, children }) {
  return (
    <a href="#" onClick={onClick}>
      {children}
    </a>
  );
}
