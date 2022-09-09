interface MarkerData {
    key?: number,
    id: number,
    onLoad?: Function,
    position: {lat: number, lng: number}
};

const onLoad = marker => {
    console.log('marker: ', marker)
};

export const mapMarkerDB: MarkerData[] = [
    { id: 1, position: {lat: 34.93670841506753, lng: -84.56223548969238} },
    { id: 2, position: {lat: 34.916481574201896, lng: -84.27938461303711} },
    { id: 3, position: {lat: 34.91696427121348, lng: -84.27197086188276} },
    { id: 4, position: {lat: 34.973578003562544, lng: -84.29302969518123} },
];

