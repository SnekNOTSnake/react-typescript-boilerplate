import React, { ReactElement as RE } from 'react';
import log from 'Utils/helpers';
import '../styles/App-style.css';

const App = (): RE => {
	React.useEffect(() => {
		log<string>('I am logger, called from App.js');
	}, []);

	return (
		<div className="App">
			<div className="container">
				<h2>App Component</h2>
				<h3>Try changing the code to see the magic!</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
					asperiores! Eveniet, itaque perferendis! Adipisci qui accusamus
					assumenda quos iste! Eligendi eos quam commodi eaque dolor labore
					incidunt soluta tempore similique.
				</p>
			</div>
		</div>
	);
};

export default App;
