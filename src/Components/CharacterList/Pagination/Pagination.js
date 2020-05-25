import React from 'react';
import { Button } from 'react-bootstrap';
import './Pagination.css';

const Pagination = props => {
    //function to get next or previous set of character list using API call
    const buttonClickhandler = (event) => {
        event.preventDefault()
        props.getCharacterList(event.target.href);
    }

    return (
        <div sm={12}>
            <div sm={6}>
                {props.info &&
                    <b className="sum-number">Total Records : {props.info.count}</b>}
            </div>
            <div sm={6}>
                {props.info.prev &&
                    <Button type="button" href={props.info.prev}
                        onClick={(event) => buttonClickhandler(event)}
                        variant="info">{'<'}Prev Page</Button>}{' '}
                {props.info.next &&
                    <Button type="button" href={props.info.next}
                        onClick={(event) => buttonClickhandler(event)}
                        variant="info">Next Page{'>'}</Button>}
            </div>
        </div>
    );
}

export default Pagination;
