import React from 'react';
import { Button } from 'react-bootstrap';
import './Pagination.css';

const Pagination = props => {
    const buttonClickhandler = (event) => {
        event.preventDefault()
        props.getCharacterList(event.target.href);
    }

    return (
        <div className="floater-R">
            {props.info && <b className="sum-number">Total Records : {props.info.count}</b>}
            {props.info.prev &&
                <Button type="button" href={props.info.prev}
                    onClick={(event) => buttonClickhandler(event)}
                    variant="info">{'<'}Prev Page</Button>}{' '}
            {props.info.next &&
                <Button type="button" href={props.info.next}
                    onClick={(event) => buttonClickhandler(event)}
                    variant="info">Next Page{'>'}</Button>}
        </div>
    );
}

export default Pagination;
