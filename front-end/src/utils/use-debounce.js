import React from 'react';

export const debounce = (func, wait) => {

  console.log(func);
  console.log(wait);
  let timeout;

  return function(...args) {
    const context = this;

    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};