import React from 'react';
import PropTypes from 'prop-types';
import './ToDosItem.css'

const ToDosItem = ({title,chChange,done,user,delTodo}) => {

    const{completed,id} = user;

    done = () => {
        return {
            textDecoration: completed ? 'line-through' : 'none',
            backgroundColor: completed ? '#785F69' : '#fff'
        }
    }

    return(
        <div className='tl'>
            <p className="bg-light-gray bl bw2 mw8 center b--gray pa2 ma1" style={done()}>
                <input onChange={chChange.bind(this , id)}
                type="checkbox"
                className="mr2"
                />
                {title}
                <button className="delete b--none"
                onClick={delTodo.bind(this, id)}>
                Delete</button>
            </p>
        </div>
    );
}


ToDosItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default ToDosItem; 