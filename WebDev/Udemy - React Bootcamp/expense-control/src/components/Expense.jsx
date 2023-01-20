import { formatDate } from "../helpers";

import EntertainmentIcon from "../img/entertainment_icon.svg"
import FoodIcon from "../img/food_icon.svg"
import HealthIcon from "../img/health_icon.svg"
import HomeIcon from "../img/home_icon.svg"
import OtherIcon from "../img/other_icon.svg"
import SavingsIcon from "../img/savings_icon.svg"
import SubscriptionIcon from "../img/subscription_icon.svg"

const iconsDictionary = {
    entertainment: EntertainmentIcon,
    food: FoodIcon,
    health: HealthIcon,
    home: HomeIcon,
    other: OtherIcon,
    savings: SavingsIcon,
    subscriptions: SubscriptionIcon
}

const Expense = ({ expense }) => {
  const { category, name, amount, id, date } = expense;
  return (
    <div className="expense shadow">
      <div className="content-expense">
        <img src={iconsDictionary[category]} alt="Icon" />
        <div className="description-expense">
          <p className="category">{category}</p>
          <p className="name-expense">{name}</p>
          <p className="date-expense">
            Added on: {""}
            <span>{formatDate(date)}</span>
          </p>
        </div>
      </div>
        <p className="amount-spent">${amount}</p>
    </div>
  );
};

export default Expense;
