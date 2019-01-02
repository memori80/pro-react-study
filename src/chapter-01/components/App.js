import React, { Component } from 'react';

class App extends Component {
	render() {
		const place = "world!";
		return (
			<h1>Hello {place}</h1>
		);
	}
}

// render(<Hello />, document.getElementById('root'));
export default App;