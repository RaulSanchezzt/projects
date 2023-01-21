import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatDate } from "../helpers";

import EntertainmentIcon from "../img/entertainment_icon.svg";
import FoodIcon from "../img/food_icon.svg";
import HealthIcon from "../img/health_icon.svg";
import HomeIcon from "../img/home_icon.svg";
import OtherIcon from "../img/other_icon.svg";
import SavingsIcon from "../img/savings_icon.svg";
import SubscriptionIcon from "../img/subscription_icon.svg";

const iconsDictionary = {
  entertainment: EntertainmentIcon,
  food: FoodIcon,
  health: HealthIcon,
  home: HomeIcon,
  other: OtherIcon,
  savings: SavingsIcon,
  subscriptions: SubscriptionIcon,
};

const Expense = ({ expense, setEditExpense, deleteExpense }) => {
  const { category, name, amount, id, date } = expense;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpense(expense)}>Edit</SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
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
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;
