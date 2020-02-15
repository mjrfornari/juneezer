import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Link } from 'react-router-dom'

import SongChart from '../components/SongChart'

import './styles/Home.css';

function Home() {
  return (
	<div id="Home">
		<div id="NewSongs" className="Charts">
			<h2>New Songs</h2>
			<div className="ChartsDiv">
				{/* <HorizontalScroll reverseScroll={true} className="HorizontalScroll"> */}
					<SongChart/>
					<SongChart/>
					<SongChart/>
					<SongChart/>
					<SongChart/>
					<SongChart/>
					<SongChart/>
					<SongChart/>
				{/* </HorizontalScroll> */}
			</div>
		</div>
		<div id="Recently" className="Charts">
			<h2>Recently Listened</h2>
			<div className="ChartsDiv">
				{/* <HorizontalScroll reverseScroll={true} className="HorizontalScroll"> */}
					<SongChart/>
					<SongChart/>
					<SongChart/>
					<SongChart/>
					<SongChart/>
					<SongChart/>
					<SongChart/>
					<SongChart/>
				{/* </HorizontalScroll> */}
			</div>
		</div>
	</div>
  );
}

export default Home;
