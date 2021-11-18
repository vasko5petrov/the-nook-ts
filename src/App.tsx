import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from 'store/action-creators/ui';
import { RootStore } from 'store/modules';
import logo from './logo.svg';
import './App.css';

function App() {
	const dispatch = useDispatch();
    const { darkMode, notifications } = useSelector((store: RootStore) => store.ui);
	const { setDarkMode, addNotification, removeNotification } = bindActionCreators(uiActions, dispatch);
    const toggleTheme = () => setDarkMode(!darkMode);
    const showNotification = () => {
        addNotification({
            type: 'INFO',
            message: 'Verification link was sent to your email. Link expires after 12 hours!',
            expiration: 16000
        });
    }

	return (
		<div className="App">
			<header className="App-header">
            	<button onClick={toggleTheme}>Toggle dark mode</button>
            	<button onClick={showNotification}>Notify</button>
				{notifications.map(({id}) => (
					<button onClick={() => removeNotification(id || '')}>Close notification #{id}</button>
				))}
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
