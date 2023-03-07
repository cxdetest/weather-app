import React, { useRef, useState } from 'react';

const Form = ({ setLocation }) => {
  const [value, setValue] = useState('');
  const node = useRef(null);

  function handleForm(e) {
    e.preventDefault();
    setLocation(value);
    node.current.reset();
  }

  return (
    <form ref={node} onSubmit={handleForm}>
      <input
        type='text'
        name='location'
        onChange={(e) => setValue(e.target.value)}
        autoComplete='off'
        maxLength={50}
      />
      <button type='submit' onClick={handleForm}>
        Search
      </button>
    </form>
  );
};

export default Form;
