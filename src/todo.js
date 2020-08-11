import React, {Component} from 'react';
import './App.css';
class Todo extends Component{
	constructor(props)
	{
		super(props);
		this.state={
			item: "",
			todoItem:[]
		}
		this.onChangeHandler=this.onChangeHandler.bind(this)
		this.addData=this.addData.bind(this)
		this.delete=this.delete.bind(this)


	}
	onChangeHandler(event){
		var inputval=event.target.value;
		
		this.setState({
			item:inputval
		})
	}
	addData()
	{
		var inputval=this.state.item
		var todoItemlocal=this.state.todoItem
		todoItemlocal.push(inputval)
		this.setState({
			todoItem:todoItemlocal,
			item:""
		})

		console.log(this.state.todoItem)
	}
	delete(event)
	{
		var id=event.target.id
		var todoItemlocal=this.state.todoItem
		todoItemlocal.splice(id,1)
		console.log(id)
		this.setState({
			todoItem:todoItemlocal
		})

	}

	

	render(){

		var itemList=this.state.todoItem.map((e,i)=>
			<li key={i}>{e}<span onClick={this.delete} id={i}>X</span></li>
			)
		return (<div>

			<div className="header">Todo App </div>

			<div className="body"> 
			<ul>
			<li>{itemList}</li>
			</ul>
			</div>

			<div className="footer">
			<input type="text" value={this.state.item} onChange={this.onChangeHandler}/>
			<button onClick={this.addData}> + </button>
			</div>

			</div>);
	}
}
export default Todo;