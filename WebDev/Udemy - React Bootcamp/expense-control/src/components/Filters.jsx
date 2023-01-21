import { useState, useEffect } from "react";

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filters shadow container">
      <form action="">
        <div className="field">
          <label htmlFor="">Filter</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value=""> -- All Categories -- </option>
            <option value="entertainment"> Entertainment </option>
            <option value="food"> Food </option>
            <option value="health"> Health </option>
            <option value="home"> Home </option>
            <option value="other"> Other </option>
            <option value="savings"> Savings </option>
            <option value="subscriptions"> Subscriptions </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
