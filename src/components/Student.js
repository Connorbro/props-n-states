import React from 'react';

const Student = (props) => {
    return(
    <div>
        <h1>
            My name is {props.name} and my age is {props.age}
        </h1>
    </div>
    )
}
export default Student;
