import React from 'react';

const List = (props) => {
    const {strMeal}=props.name.meal
    return (
        <div>
            <h4>{strMeal}</h4>
        </div>
    );
};

export default List;