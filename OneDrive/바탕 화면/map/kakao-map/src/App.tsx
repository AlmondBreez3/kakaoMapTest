import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MapMarker,Map } from 'react-kakao-maps-sdk';
import SearchMap from './map';

const KakaoMap=()=>{
  return(
    <>
    <Map center={{lat:37.550115589949854,lng:126.9245979683828}} style={{ width: "500px", height: "500px" }}>
      <MapMarker position={{lat:37.550115589949854,lng:126.9245979683828}}>
        <div style={{color:'green'}}>Here</div>
      </MapMarker>
    </Map>
    </>
  )
}

function App() {
  return (
   <>
   <div>
    Help
   </div>
   <KakaoMap></KakaoMap>
   <SearchMap></SearchMap>
   </>
  );
}

export default App;
