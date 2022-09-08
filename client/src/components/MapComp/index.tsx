import React, {FC, useRef, useState, useEffect} from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const MapComp: FC<{}> = ({}) => {
    const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
    const [zoom, setZoom] = useState(3); // initial zoom
    const [center, setCenter] = useState<google.maps.LatLngLiteral>({
        lat: 1,
        lng: 1,
    });

    const onClick = (e: google.maps.MapMouseEvent) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng!]);
    };

    const onIdle = (m: google.maps.Map) => {
        console.log("onIdle");
        setZoom(m.getZoom()!);
        setCenter(m.getCenter()!.toJSON());
    };

    const containerStyle = {
        width: '100%',
        height: '100%'
      };

    return (
       <LoadScript
            googleMapsApiKey='AIzaSyDcWPpWpMYL2iXw4cZbxcpngA25ac-YnBw'
       >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        ></GoogleMap>
       </LoadScript>
    );
};

// interface MapProps extends google.maps.MapOptions {
//     style: {[key: string]: string};
//     onClick?: (e: google.maps.MapMouseEvent) => void;
//     onIdle?: (map: google.maps.Map) => void;
//     children?: React.ReactNode;
// };

// const Map: FC<MapProps> = ({onClick, onIdle, children, style, ...options}) => {
//     const ref = useRef<HTMLDivElement>(null);
//     const [map, setMap] = useState<google.maps.Map>();

//     useEffect(() => {
//         if (ref.current && !map) {
//           setMap(new window.google.maps.Map(ref.current, {}));
//         }
//     }, [ref, map]);

//     useEffect(() => {
//         if (map) {
//           ["click", "idle"].forEach((eventName) =>
//             google.maps.event.clearListeners(map, eventName)
//           );
    
//           if (onClick) {
//             map.addListener("click", onClick);
//           }
    
//           if (onIdle) {
//             map.addListener("idle", () => onIdle(map));
//           }
//         }
//       }, [map, onClick, onIdle]);


//     return (
//         <div id="map-div" ref={ref} style={style}/>
        
//     );
    
    
// };


export default MapComp;

