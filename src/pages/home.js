import React from 'react';
import './../assets/css/home.css';
import heroVideo from './../assets/video/hd.mp4';

// contact form - https://html5up.net/solid-state


const Home = () => (
	<div className='hd s_d-flex s_flex-r'>
		<div className='hd-sep'></div>
		<div className='hdl s_container s_d-flex s_aitems-center'>
			<div>
				<h1>John Grey!</h1>
				<h1>I am (a) <span className='sf'>Developer.</span></h1>
				<p>Front-end focussed <span>full stack developer</span>.</p>
				<p>PHP | Javascript | Rust</p>
				<div className='s_d-flex s_jcontent-space-around' style={{ flexWrap: 'wrap' }}>
					<a className="u-btn iconbtn rounded-btn bg1" title="Find me on Github" target="_blank" rel='noopener noreferrer' href="https://github.com/IggsGrey">
						<i className='fab fa-github'></i>
					</a>
					<a className="u-btn iconbtn rounded-btn bg1" title="Find me on Instagram" target="_blank" rel='noopener noreferrer' href="//https://www.instagram.com/devx.gh/">
						<i className='fab fa-instagram'></i>
					</a>
					<a className="u-btn iconbtn rounded-btn bg1" title="Find me on Twitter" target="_blank" rel='noopener noreferrer' href="https://twitter.com/devx_gh">
						<i className='fab fa-twitter'></i>
					</a>
					{ /*
						<a className="u-btn iconbtn rounded-btn bg1" title="Find me on Stack-overflow" target="_blank" rel='noopener noreferrer' href="https://stackoverflow.com/users/10127798/jay-grey">
						<i className='fab fa-stack-overflow'></i>
					</a>
					<a className="u-btn iconbtn rounded-btn bg1" title="Find me on Dribbble" target="_blank" rel='noopener noreferrer' href="https://dribbble.com/greyjnr">
					<i className='fab fa-dribbble'></i>
					</a>
					<a className="u-btn iconbtn rounded-btn bg1" title="Find me on Behance" target="_blank" rel='noopener noreferrer' href="https://www.behance.net/jaygreyjgc035">
					<i className='fab fa-behance'></i>
					</a>
					<a className="u-btn iconbtn rounded-btn bg1" title="Find me on Google+" target="_blank" rel='noopener noreferrer' href="#">
					<i className='fab fa-google-plus'></i>
					</a>
					<a className="u-btn iconbtn rounded-btn bg1" title="Find me on Slack" target="_blank" rel='noopener noreferrer' href="#">
					<i className='fab fa-slack'></i>
					</a>
*/ }
					<a className="u-btn iconbtn rounded-btn bg1" title="Find me on Pinterest" target="_blank" rel='noopener noreferrer' href="https://www.pinterest.com/grey2957/">
						<i className='fab fa-pinterest'></i>
					</a>
					<a className="u-btn iconbtn rounded-btn bg1" title="Find me on Reddit" target="_blank" rel='noopener noreferrer' href="https://www.reddit.com/user/scar_reX/">
						<i className='fab fa-reddit'></i>
					</a>
					<a className="u-btn iconbtn rounded-btn bg1" title="Find me on Telegram" target="_blank" rel='noopener noreferrer' href="https://t.me/iggsgrey">
						<i className='fab fa-telegram'></i>
					</a>
					<a className="u-btn iconbtn rounded-btn bg1" title="scarrexx#5134" target="_blank" rel='noopener noreferrer' href="scarrexx#5134">
						<i className='fab fa-discord'></i>
					</a>
				</div>
			</div>
			{ /* <div className='hd-wave'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,96C384,75,480,85,576,90.7C672,96,768,96,864,101.3C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
			</div> */ }
		</div>
		<div className='hdr'>
			<video autoPlay={true} muted loop id="hd-vid">
				<source src={heroVideo} type="video/mp4" />
			</video>
		</div>
	</div>

);


export default Home;