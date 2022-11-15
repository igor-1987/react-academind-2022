import './ExpenseFilter.css';

const ExpenseFilter = ({ onSelectChange, years, selected }) => {
  
  const changeSelectHandler = event => (
    onSelectChange(event.target.value)
  );

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select 
          value={selected} 
          onChange={changeSelectHandler}
        >
          {years.map(year => (
            <option 
              key={year} 
              value={year}
            >
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;