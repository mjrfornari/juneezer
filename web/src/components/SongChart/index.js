import React from 'react';
import { Link } from 'react-router-dom'

import './main.css';

function SongChart({ id }) {
  return (
	<div id={id} className="SongChart">
		<div className="MusicImage">
			<img src='https://e-cdns-images.dzcdn.net/images/cover/0fc88204356bfe7c219f869955fc0645/264x264-000000-80-0-0.jpg'/>
		</div>
		<div className="MusicInfo">
			<strong>The Drug In Me Is Reimagined</strong>
			<p>por Falling in Reverse</p>
		</div>
	</div>
  );
}

export default SongChart;
