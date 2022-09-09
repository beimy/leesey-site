import React, {FC, useRef, useState, useEffect} from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import useWindowDimensions from "../../hooks/useWindowDimensions";
// import { mapMarkerDB } from "../../assets/mapMarkerDB.ts";

const mapMarkerDB = [
    {position: {lat: 34.93670841506753, lng: -84.56223548969238} },
    {position: {lat: 34.916481574201896, lng: -84.27938461303711} },
    {position: {lat: 34.91696427121348, lng: -84.27197086188276} },
    {position: {lat: 34.973578003562544, lng: -84.29302969518123} },
];

const MapComp: FC<{}> = ({}) => {
    const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = useState(3); // initial zoom
    const [markerData, setMarkerData] = useState(mapMarkerDB);
    const [markers, setMarkers] = useState<Marker[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [center, setCenter] = useState<google.maps.LatLngLiteral>({
        lat: 34.87061115856553,
        lng: -84.32288786268238,
    });
    const {height, width} = useWindowDimensions();

    useEffect(() => {
        generateMarkersFromDB();
    }, [isLoading]);

    const onClick = (e: google.maps.MapMouseEvent) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng!]);
        console.log(e.latLng?.lat(), e.latLng?.lng())
    };

    function generateMarkersFromDB() {
        markerData.map((marker) => {
            let currentMarker: Marker = createMarker(marker.position.lat, marker.position.lng);
            setMarkers([...markers, currentMarker!]);
        });
        setLoading(false);
    }

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

    if(isLoading) {
        return (
            <div>Loading</div>
        )
    }

    return (
       <LoadScript
            googleMapsApiKey='AIzaSyDcWPpWpMYL2iXw4cZbxcpngA25ac-YnBw'
       >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
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

