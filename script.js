require(["esri/config","esri/Map", "esri/views/MapView", "esri/layers/CSVLayer", "esri/layers/FeatureLayer"], function (esriConfig, Map, MapView, FeatureLayer, CSVLayer) {

esriConfig.apiKey =  "AAPK6221ccc708944717801b1e737e84e229ARkRORCTCsMHPkG82l8m647wlPBVSru5T3Z9cJ0JjaSyfYk-s0mQw-UiHP3Xv8jT"; 

const map = new Map({
          basemap: "dark-gray" // Basemap layer service
        });

const view = new MapView({
          map: map,
          center: [-90.35, 38.65], // Longitude, latitude
          zoom: 11.5, // Zoom level
          container: "viewDiv" // Div element
        });

var url = "https://raw.githubusercontent.com/gbrunner/Advanced_Python_for_GIS_and_RS/master/Week%202/stl_crime_wgs_84.csv";      
     
 const crimeRenderer = {
        type: "simple",
        symbol: {
          color: "#BA55D3",
          type: "short-dot",
          style: "solid"
        }
 };
      
const stlcrime = new FeatureLayer({
  url: url,
  //renderer: crimeRenderer
});
      
  map.add(stlcrime);
  
 });
