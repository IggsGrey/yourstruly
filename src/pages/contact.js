import React from 'react';
import { fromEvent } from 'rxjs';
import Typer from './../modules/typer';
import './../assets/css/contact.css';



const
	Contact = () => {

		const
			[timedout, setTimedOut] = React.useState('');

		React.useEffect(() => {
			setTimeout(() => setTimedOut('timedout'), 6200);
		});

		return (<>
			<div className='contact s_container s_d-flex s_jcontent-center bg5 center-text'>
				<div className='con-hol'>
					<div className='con-hd'>
						<h2 className='clr2'>
							<Typer text='Wanna Talk?' delay='1000' />
						</h2>
						<p>
							<Typer text='Reach me via the following...' delay='2700' />
						</p>
					</div>
					<ul className={'con-bd grid ' + timedout}>
						<li className='s12 m6 pad'>
							<em className='s_d-block'>EMAIL</em>
							<a href='mailto:jaygrey.jg@gmail.com'>jaygrey.jg@gmail.com</a>
						</li>
						<li className='s12 m6 pad'>
							<em className='s_d-block'>PHONE</em>
							<a href='tel:+233271600543'>+233271600543</a>
						</li>
						<li className='s12 m6 pad'>
							<em className='s_d-block'>DISCORD</em>
							<a href='#'>scarrexx#5134</a>
						</li>
						<li className='s12 m6 pad'>
							<em className='s_d-block'>TWITTER (not very active)</em>
							<a href='https://twitter.com/devx_gh'>devx_gh</a>
						</li>
					</ul>
				</div>
			</div>
		</>);
	};



export default Contact;