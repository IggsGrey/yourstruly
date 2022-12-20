import React from 'react';

const
	Typer = ({ text, delay = 0 }) => {
		let
			letterCount = 0,
			textArray = text.split(''),
			[ elemText, setElemText ] = React.useState('');
		React.useEffect(() => { setElemText(''); }, []);


		React.useEffect(() => {
			setElemText('');
			setTimeout(() => {
				let
					countTo = setInterval(() => {
						setElemText(nowText => nowText + textArray[letterCount]);
						letterCount++;
						// textArray[letterCount]
	
						if(letterCount == textArray.length) { clearInterval(countTo); }
					}, 100);
			}, parseInt(delay));
		}, []);

		return ( elemText );
	};

export default Typer;