import React, {Component} from 'react';

class Clock extends Component{
	state = {
		now : new Date(),
		count :0,
	}



	componentDidMount(){
		console.log('componentDidMount')

		setInterval(()=>{
			this.setState({count: ++this.state.count})
		},1000)

		this.timer = setInterval(()=>{
			this.setState({now: new Date()})
		},1000)
	}

	componentWillUnmount(){
		console.log('componentDidMount')
		clearInterval(this.timer)

	}

	render(){
		return (
			<div>
				
				<div>
				{this.state.now.toLocaleString()}
				</div>
			</div>
			)
	}
}

export default Clock