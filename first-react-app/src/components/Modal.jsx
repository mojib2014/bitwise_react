import React from 'react';
import './modal.css';

export default function Modal(props) {
  return (
    <div className="modal-root">
      <button>X</button>
      <div className="container">{props.children}</div>
    </div>
  );
}
