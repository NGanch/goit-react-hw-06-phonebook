import { useDispatch, useSelector } from 'react-redux';
import { FilterLabel, FilterInput } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { updateFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
const filter = useSelector(selectFilter); 
    const changeFilter = evt => {
 dispatch(updateFilter(evt.target.value))
  };
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
}; 