import React, {Component} from 'react';
import './App.css';
import AddToList from '../../component/AddToList/AddToList';
import ToDos from '../../component/ToDos/ToDos';
import { DB_config} from '../../config/config';
import firebase from 'firebase/app';
import 'firebase/database'

class App extends Component{
    constructor(props){
        super(props);

        this.app = firebase.initializeApp(DB_config);
        this.database = this.app.database().ref().child('notes')

        this.state = {
            todoslist:[],
            searchField:'',
        }
    }
    ///input todo title ////////
    ontextChange = (e) => {
        this.setState({searchField:e.target.value})
    }

    componentWillMount(){
        const prevNotes = this.state.todoslist;

        this.database.on('child_added', snap => {
            prevNotes.push({
                id:snap.key,
                title:snap.val().searchField,
                completed:false
            })
            this.setState({todoslist:prevNotes})
        })

        this.database.on('child_removed', snap => {
            for(let i=0; i<prevNotes.length;i++){
                if(prevNotes[i].id === snap.key){
                    prevNotes.splice(i,1);
                }
            }
            this.setState({todoslist:prevNotes})
        })
    }

    keyPressed = (e) => {
        if(e.key === 'Enter'){
            if(this.state.searchField.length > 0){
                this.database.push().set({searchField:this.state.searchField})
                this.setState({searchField:''})
            }
        }
    }

    ////////Add Todo button //////////////////

    addChange = () => {
        if(this.state.searchField.length > 0){
            this.database.push().set({searchField:this.state.searchField})
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
        this.database.child(id).remove();
    }

    render(){
        
        return(
            <div className="tc">
                <h1 className="bg-light-red f1 pa2 lh-copy">To-do List</h1>
                <div className="" style={{maxWidth:'90%', margin:'auto'}}>
                    <AddToList 
                        searchField={this.state.searchField} 
                        textChange={this.ontextChange} 
                        addChange={this.addChange} 
                        keyPressed={this.keyPressed}
                    />
                </div>
                <div style={{width:'500px', maxWidth:'90%', margin:'auto'}}>
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