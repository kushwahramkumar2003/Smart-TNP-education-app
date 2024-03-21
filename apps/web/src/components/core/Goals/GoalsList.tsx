const GoalsList = () => {
  return (
    <div className="flex flex-col lg:px-8 md:px-6 p-2">
      <FilterDataOptions />
    </div>
  );
};

const FilterDataOptions = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-row gap-2 items-center">
        <p>Filter By:</p>
        <select name="filter" id="filter" className="rounded-lg p-2 bg-white">
          <option value="all">All</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <p>Sort By:</p>
        <select name="sort" id="sort" className="rounded-lg p-2 bg-white">
          <option value="all">All</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
          <option value="others">Others</option>
        </select>
      </div>
    </div>
  );
};
export default GoalsList;
