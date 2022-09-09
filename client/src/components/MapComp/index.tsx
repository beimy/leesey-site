import React, {FC, useRef, useState, useEffect} from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import useWindowDimensions from "../../hooks/useWindowDimensions";

const MapComp: FC<{}> = ({}) => {
    const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = useState(3); // initial zoom
    const [markers, setMarkers] = useState<Marker[]>([]);
    const [center, setCenter] = useState<google.maps.LatLngLiteral>({
        lat: 28.52930297106838,
        lng: -81.38710871860822,
    });
    const {height, width} = useWindowDimensions();

    const onClick = (e: google.maps.MapMouseEvent) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng!]);
        console.log(e.latLng?.lat(), e.latLng?.lng())
    };

    const createMarker = (lat, lng) => {
        const position = {lat: lat, lng: lng};
        return new Marker({position: position})
    };

    const onDblClick = (e: google.maps.MapMouseEvent) => {
        const newMarker = createMarker(e.latLng?.lat(), e.latLng?.lng());
        setMarkers([...markers, newMarker!]);
        console.log(markers)
    };

    const onIdle = (m: google.maps.Map) => {
        console.log("onIdle");
        setZoom(m.getZoom()!);
        setCenter(m.getCenter()!.toJSON());
    };

    const containerStyle = {
        width: `${width}px`,
        height: `${height}px`
    };

    const onLoad = marker => {
        console.log('marker: ', marker)
    };

    return (
       <LoadScript
            googleMapsApiKey='AIzaSyDcWPpWpMYL2iXw4cZbxcpngA25ac-YnBw'
       >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onClick={onClick}
            onDblClick={onDblClick}
        >
        {markers.map((marker: Marker, index) => (
            <Marker
                key={index}
                onLoad={onLoad}
                position={marker.props.position}
            />
        ))}
        </GoogleMap>
       </LoadScript>
    );
};



export default MapComp;

