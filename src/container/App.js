import React, {Component} from 'react';
import './App.css';
import AddToList from '../component/AddToList';
import ToDos from '../component/ToDos';

class App extends Component{
    constructor(){
        super();
        this.state = {
            todoslist:[],
            searchField:'',
        }
    }
    ///input todo title ////////
    ontextChange = (e) => {
        this.setState({searchField:e.target.value})
    }

    keyPressed = (e) => {
        if(e.key === 'Enter'){
            let val = (this.state.todoslist.length)
            const newTodo = {
                id:val,
                title:this.state.searchField,
                completed:false
            }
            if(this.state.searchField.length > 0){
                this.setState({todoslist:[...this.state.todoslist,newTodo]})
                this.setState({searchField:''})
                e.target.value = ''
            }
        }
    }

    ////////Add Todo button //////////////////

    addChange = () => {
        let val = (this.state.todoslist.length)
        const newTodo = {
            id:val,
            title:this.state.searchField,
            completed:false,
        }
        if(this.state.searchField.length > 0){
            this.setState({todoslist:[...this.state.todoslist,newTodo]})
            this.setState({searchField:''})
        }
    }

    //CheckBox Toggle //////////////////

    checkChange = (id) => {
        this.setState({todoslist:this.state.todoslist.map((todo,i) => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo
        })})
    }

    /////////////////Delete Todo///////////////////

    delTodo = (id) => {
        this.setState({todoslist:[...this.state.todoslist.filter(todo => {
            return todo.id !== id
        })]})
    }

    render(){
        
        return(
            <div className="tc">
                <h1 className="bg-light-red f1 pa2 lh-copy">To-do List</h1>
                <div className="bg-washed-blue" style={{width:'50%', margin:'auto'}}>
                    <AddToList 
                        searchField={this.state.searchField} 
                        textChange={this.ontextChange} 
                        addChange={this.addChange} 
                        keyPressed={this.keyPressed}
                    />
                </div>
                <div style={{width:'50%', margin:'auto'}}>
                    <ToDos
                        delTodo={this.delTodo} 
                        done={this.done} 
                        todoslist={this.state.todoslist} 
                        chChange={this.checkChange}
                    />
                </div>
            </div>
        )
    }
}

export default App;