import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchInput } from '../../redux/store';
import { useSelector } from 'react-redux';
import { searchInputValue } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();

  const currentSearchInputValue = useSelector(searchInputValue);

  const [searchInput, setSearchInput] = useState(currentSearchInputValue);

  const handleSubmit = e => {
    e.preventDefault();  
    dispatch(updateSearchInput(searchInput))
  }

  return (
      <form className={styles.searchForm} onSubmit={handleSubmit}> 
      <TextInput placeholder="Search..." onChange={e => setSearchInput(e.target.value)} value={searchInput}/>
          <Button>
              <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;