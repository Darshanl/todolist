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
        <div className='tl' style={{width:'90%', margin:'auto'}}>
            <p className="bg-light-gray bl bw2 mw8 center b--gray pa2 ma1" style={done()}>
                <input onChange={chChange.bind(this , id)}
                type="checkbox"
                className="mr2"
                />
                {title}
                <button className="delete b--none fasd"
                onClick={delTodo.bind(this, id)}>
                <i className="fa fa-trash" aria-hidden="true"></i></button>
            </p>
        </div>
    );
}


ToDosItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default ToDosItem; 