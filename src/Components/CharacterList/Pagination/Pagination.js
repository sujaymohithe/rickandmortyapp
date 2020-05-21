import React from 'react';
import { Button } from 'react-bootstrap';
import './Pagination.css';

const Pagination = (props) => {
    const buttonClickhandler = (e) => {
        props.getCharacterList(e.target.accessKey);
    }

    return (
        <div className="floater-R">
            {props.info.count && <b className="sum-number">Total Records : {props.info.count}</b>}
            {props.info.prev &&
                <Button type="button" accessKey={props.info.prev}
                    onClick={(event) => buttonClickhandler(event)}
                    variant="info">{'<'}Prev Page</Button>}{' '}
            {props.info.next &&
                <Button type="button" accessKey={props.info.next}
                    onClick={(event) => buttonClickhandler(event)}
                    variant="info">Next Page{'>'}</Button>}
        </div>
    );
}

export default Pagination;
