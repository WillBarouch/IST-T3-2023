"use client";
import React, { useEffect } from 'react';
// @ts-ignore
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

// Set your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGRpbGwxMzExIiwiYSI6ImNranBkdHVmZTB4b2kycHBlb2lkcnFkeTQifQ.gW4hSXXUo4AdSYF3OUZMNA';

const Map = () => {
  useEffect(() => {
    // Create a new map instance
    const map = new mapboxgl.Map({
      container: 'map', // HTML element ID where you want the map
      style: 'mapbox://styles/mapbox/streets-v11', // Map style URL
      center: [151.27658639919747,-33.85513039298424], // Initial center longitude and latitude
      zoom: 13 // Initial zoom level
    })
    map.on('load', () => {
      map.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [
                151.27599078690673,
                -33.86153312067332
              ],
              [
                151.27589798848936,
                -33.86024238008482
              ],
              [
                151.2751324015548,
                -33.8597414904224
              ],
              [
                151.2749004055123,
                -33.859221332663516
              ],
              [
                151.2737636249101,
                -33.859221332663516
              ],
              [
                151.2743900142213,
                -33.85900941563103
              ],
              [
                151.27557319403326,
                -33.85885529382271
              ],
              [
                151.2761763837397,
                -33.859067211236855
              ],
              [
                151.2768259726558,
                -33.85897088520464
              ],
              [
                151.27710436790414,
                -33.85870117173545
              ],
              [
                151.27740596275737,
                -33.85715993557167
              ],
              [
                151.27710436790414,
                -33.85633150964073
              ],
              [
                151.2771739667167,
                -33.85573426735679
              ],
              [
                151.27740596275737,
                -33.85536821356999
              ],
              [
                151.27782355563284,
                -33.85573426735679
              ],
              [
                151.27784675523583,
                -33.85637004125796
              ],
              [
                151.277962753258,
                -33.85656269908095
              ],
              [
                151.2783115372116,
                -33.85661893942705
              ],
              [
                151.2786320651195,
                -33.85693597367901
              ],
              [
                151.27886273509466,
                -33.857016159688904
              ],
              [
                151.2792167866848,
                -33.85684242323929
              ],
              [
                151.2795440161857,
                -33.85689142586346
              ],
              [
                151.27989806777583,
                -33.85706961698705
              ],
              [
                151.2799678052088,
                -33.857421543363024
              ],
              [
                151.28004827147993,
                -33.8575373669164
              ],
              [
                151.27855659113902,
                -33.85882156871259
              ],
              [
                151.27825618372907,
                -33.85939176611097
              ],
              [
                151.2778484879588,
                -33.85955213344381
              ],
              [
                151.27697945223815,
                -33.859529860221315
              ],
              [
                151.27628744231248,
                -33.859498677699676
              ],
              [
                151.27628207789434,
                -33.859204670509406
              ],
              [
                151.2756437121488,
                -33.858995301135955
              ],
              [
                151.27557612712093,
                -33.85914676308641
              ],
              [
                151.27645589167798,
                -33.85945858907301
              ],
              [
                151.27700306231588,
                -33.85948977160927
              ],
              [
                151.27721227462013,
                -33.86147206660165
              ],
              [
                151.2771210795126,
                -33.86157452104732
              ],
              [
                151.27609111125145,
                -33.86148543023236
              ],
              [
                151.2759838228912,
                -33.86153443019225
              ]
            ]
          }
        }
      });
      map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#888',
          'line-width': 3
        }
      });
    })
    // Clean up the map on component unmount
    return () => map.remove();
  }, []);

  return (
        <div id="map" className={"w-full h-full"} />
  );

};

export default Map;
