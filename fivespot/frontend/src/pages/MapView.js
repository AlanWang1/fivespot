import React, { Component } from 'react';
import Header from '../components/header/Header';
import Map from '../components/map/Map';
import MapMarker from '../components/map/MapMarker';
export class MapView extends Component {
  
    render() {
        return (


                <div>
                    <Header />

                    <div className="hero is-fullheight-with-navbar">

                        <div className="columns">
                            <div className="column is-3 ">

                                <p className="title is-1 "> Tour Title</p>

                                <div className="box">
                                    <Map/>
                                    <MapMarker/>
                                    <p className="title is-4"> First Spot</p>
                                    <p>Description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                </div>
                                
                                
                                
                
                
                            </div>
                        </div>
                    </div>
            
                </div>

     
           
        );
    }
}

export default MapView
