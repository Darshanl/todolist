import React from 'react';
import ToDosItem from '../ToDosItem/ToDosItem';
import PropTypes from 'prop-types';

const ToDos = ({done,todoslist,chChange,delTodo}) => {

    return(
        <div>
            {
                todoslist.map((user,i) => {
                    return (
                        <ToDosItem 
                            key={i} 
                            title={user.title}
                            id={user.val}
                            chChange={chChange}
                            delTodo={delTodo}
                            user={user}
                            done={done}
                        />
                    )
                })
            }
        </div>
    );

}

ToDos.propTypes = {
    todoslist: PropTypes.array.isRequired
}



export default ToDos; 