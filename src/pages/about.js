import React from 'react';
import Typer from './../modules/typer';
import './../assets/css/about.css';
import grey from './../assets/img/xrx1.png';



const Bio = () => (
	<div className='bio s_d-flex s_jcontent-center s_aitems-flex-end s_container bg5'>
		<div className='grid' style={{ maxWidth: '100%', height: '100%' }}>
			<h2 className='s12 center-text'><span className='sf'>W</span>ho<span className='clr3'>&#39;</span>s <span className='sf'>M</span>e<span className='clr3'>?</span></h2>
			<div className='s12 m6 s_d-flex s_jcontent-center s_aitems-center'>
				<img src={grey} alt='GREY' />
			</div>
			<div className='s12 m6 s_d-flex s_jcontent-center s_aitems-center'>
				<code>
					<div>
						<span className='s_d-block devx-text'><Typer text='const' /></span>
						<span className='info-text'><Typer text='Grey: Record<..> = ' delay='800' /></span>
						<span className='white-text'><Typer text='{' delay='2300' /></span>
						<div className='s_d-block pad-left'>
							<span className='loify-text'><Typer text='name' delay='2600' /></span>
							<span className='info-text'><Typer text=': ' delay='3100' /></span>
							<span className='success-text'><Typer text="'J. Ignatius Aggrey'" delay='3200' /></span>
							<span className='white-text'><Typer text=',' delay='5400' /></span>
						</div>
						<div className='s_d-block pad-left'>
							<span className='loify-text'><Typer text='age' delay='5500' /></span>
							<span className='info-text'><Typer text=': ' delay='5900' /></span>
							<span className='devx-text'><Typer text={(new Date().getFullYear() - 1998).toString()} delay='6200' /></span>
							<span className='white-text'><Typer text=',' delay='6400' /></span>
						</div>
						<div className='s_d-block pad-left'>
							<span className='loify-text'><Typer text='skills' delay='6500' /></span>
							<span className='info-text'><Typer text=': ' delay='7000' /></span>
							<span className='white-text'><Typer text='[ ' delay='7200' /></span>
							<span className='success-text'><Typer text="'Design'" delay='7400' /></span>
							<span className='white-text'><Typer text=', ' delay='8400' /></span>
							<span className='success-text'><Typer text="'Development'" delay='8600' /></span>
							<span className='white-text'><Typer text=', ' delay='9900' /></span>
							<span className='success-text'><Typer text="'Page Speed Ops'" delay='10100' /></span>
							<span className='white-text'><Typer text=", " delay='12000' /></span>
							<span className='success-text'><Typer text="'Bot Development'" delay='12200' /></span>
							<span className='white-text'><Typer text=", " delay='14200' /></span>
							<span className='success-text'><Typer text="'SVG'" delay='14300' /></span>
							<span className='white-text'><Typer text=", " delay='15000' /></span>
							<span className='success-text'><Typer text="'Websocket Development'" delay='15100' /></span>
							<span className='white-text'><Typer text=", " delay='17800' /></span>
							<span className='success-text'><Typer text="'Rustacean'" delay='17900' /></span>
							<span className='white-text'><Typer text=", " delay='19500' /></span>
							<span className='success-text'><Typer text="'Batch Scripts'" delay='19600' /></span>
							<span className='white-text'><Typer text=", " delay='21300' /></span>
							<span className='success-text'><Typer text="'Dog Person'" delay='21400' /></span>
							<span className='white-text'><Typer text=", " delay='22600' /></span>
							<span className='success-text'><Typer text="'Chess Player'" delay='22700' /></span>
							<span className='white-text'><Typer text=", " delay='24400' /></span>
							<span className='success-text'><Typer text="'Purple Hair'" delay='24500' /></span>
							<span className='white-text'><Typer text=", " delay='26300' /></span>
							<span className='white-text'><Typer text="...Awesomeness" delay='26400' /></span>
							<span className='white-text'><Typer text=" ]" delay='28000' /></span>
						</div>
						<div className='s_d-block'>
							<span className='white-text'><Typer text="}" delay='28200' /></span>
							<span className='white-text'><Typer text="," delay='28400' /></span>
						</div>
						<span className='info-text'><Typer text="about: string = " delay='28600' /></span>
						<span className='success-text'><Typer text="`My name is " delay='30200' /></span>
						<span className='white-text'><Typer text="${ Grey?.name ?? " delay='32000' /></span>
						<span className='success-text'><Typer text="'DevX' " delay='33900' /></span>
						<span className='white-text'><Typer text="}" delay='35300' /></span>
						<span className='success-text'><Typer text=" and I love (☞ﾟヮﾟ)☞ code (⌐■_■) hehe`" delay='35500' /></span>
						<span className='white-text'><Typer text=";" delay='39300' /></span>
						<br />
						<br />
						<div className='s_d-block'>
							<span className='devx-text'><Typer text="export " delay='39500' /></span>
							<span className='loify-text'><Typer text="default " delay='40500' /></span>
							<span className='white-text'><Typer text="${ Grey, about }" delay='41700' /></span>
						</div>
					</div>
				</code>
			</div>
		</div>
	</div>
);




export default Bio;