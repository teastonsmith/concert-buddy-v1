import React from 'react';
import './App.css';

import Header from './Components/Stateless/Header';
import Input from './Components/Stateful/Input';
import Calendar from './Components/Stateful/Calendar';

export default function App() {
	return (
		<div className='App'>
			<Header />
			<Input />
			<Calendar />
		</div>
	);
}
