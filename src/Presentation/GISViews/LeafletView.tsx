import * as React from "react";
import { Component } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
// postCSS import of Leaflet's CSS
import 'leaflet/dist/leaflet.css';




export class LeafletView extends React.Component {

    componentDidMount(): void {

    }

    render(): React.ReactNode {
        return <MapContainer style={{width: '100vw', height: '200px'}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
            </MapContainer>
        
    }

}
