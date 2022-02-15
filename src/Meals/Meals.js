import React, {Fragment} from "react";
import AvailableMeals from "./AvailableMeals.js";
import Summary from "./MealsSummary.js";

const Meals = () => {
    return(
        <Fragment>
            <Summary />
            <AvailableMeals />
        </Fragment>
    )
};
export default Meals;
