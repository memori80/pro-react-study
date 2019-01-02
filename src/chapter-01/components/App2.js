import React from 'react';

class App2 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName: 'firstname',
			lastName: 'lastname'
		}
	}

	formatName(user) {
		return user.firstName + ' ' + user.lastName;
	}

	render() {
		let user = {
			firstName: 'chung',
			lastName: 'junyoung'
		}

		return (
			<div className="greeting">
				<h1>hello {this.formatName(user)}</h1>
				<h2>Good to see you</h2>
				<h2>your last name {this.state.lastName}</h2>
				<input type="search" value={this.state.lastName} onChange={this.handleChange.bind(this)} />
			</div>
		)
	}

	handleChange(event) {
		this.setState(
			{lastName: event.target.value}
		)
	}
}

export default App2;