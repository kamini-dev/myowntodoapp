import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';


library.add(faTrash);
class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      items:[],
      currentItem: {
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }
  handleInput = (event) => {
    this.setState({
      currentItem:{
        text: event.target.value,
        key: Date.now()
      }
    })
  }
  addItem = (event) => {
      event.preventDefault();
      const newItem = this.state.currentItem;
      console.log(newItem);
      if(newItem !=="") {
        const newItems = [...this.state.items, newItem];
        this.setState({
          items: newItems,
          currentItem: {
            text: "",
            key: ""
          }
        })
      }
  }
   deleteItem(key){
    const filteredItems = this.state.items.filter(
      item =>item.key!==key);
      this.setState ({items:filteredItems
   })
  }
    render() {
      return (
           <div className="App">
           <header>
            <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            /> 
            <button type="submit">Add</button>
            </form>
           </header>
           <ListItems items={this.state.items}
           deleteItem = {this.deleteItem}></ListItems>
           </div>
      );
    }
}

export default App;
