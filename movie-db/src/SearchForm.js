import { useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  const inputEl = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <h2>search movies</h2>
      <input
        ref={inputEl}
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
