import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './../pages/home';
import Contact from './../pages/contact';
import About from './../pages/about';
import './../assets/css/nav.css';

const Nav = () => {
	const
		[ac, setAc] = React.useState(''),
		openAC = () => setAc('aced'),
		closeAC = () => setAc('');


	const ActualNav = () => {
		return (<>
			<div className={'ac s_jcontent-center s_aitems-center ' + ac}>
				<button onClick={closeAC} id='ac-close-btn' type='button'><i className='fas fa-times'></i></button>
				<div className='ac-hol'>
					<ul>
						{ /* <li><Link onClick={closeAC} to='/'>Home</Link></li> */}
						<li><Link onClick={closeAC} to='/'>Bio</Link></li>
						<li><Link onClick={closeAC} to='/contact'>Contact</Link></li>
					</ul>
				</div>
			</div>
			<button onClick={openAC} id='ac-open-btn' type='button'><i className='fas fa-bars'></i></button>
		</>);
	};

	return (
		<BrowserRouter>
			<nav id='p-nav'>
				<div className='nav-wrap s_container s_d-flex s_aitems-center'>
					<div>
						<h1 className='clr1'><Link to='/'>Iggs_Grey</Link></h1>
					</div>
				</div>
			</nav>

			<ActualNav />

			<Switch>

				<Route exact path='/contact' component={Contact} />

				<Route exact path='/' component={About} />

				{ /* <Route exact path='/' component={Home} /> */}

			</Switch>
		</BrowserRouter>

	);
};


export default Nav;