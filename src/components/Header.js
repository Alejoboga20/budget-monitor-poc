import React from 'react';

export const Header = ({ headerTitle }) => {
  return (
    <>
      <header>
        <h1>{headerTitle}</h1>
      </header>
      <hr />
    </>
  );
};
