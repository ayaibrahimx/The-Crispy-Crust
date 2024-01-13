import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine';
import { getAddress, getUserLocation } from '../../services/geoLocation';

const restaurantLocation = [30.059082, 31.48932];

const Map = () => {
  let map;
  let routingControl;
  const [estimatedTimeInMinutes, setEstimatedTimeInMinutes] = useState(null);

  const initializeMap = async () => {
    try {
      const userLocation = await getUserLocation();
      const address = await getAddress(userLocation);

      const userMarker = L.marker([address.latitude, address.longitude]).addTo(
        map,
      );
      userMarker.bindPopup('<b>Your Location</b>').openPopup();

      routingControl = L.Routing.control({
        waypoints: [
          L.latLng(restaurantLocation[0], restaurantLocation[1]),
          L.latLng(address.latitude, address.longitude),
        ],
        routeWhileDragging: true,
        show: false,
      }).addTo(map);

      routingControl.on('routesfound', function (event) {
        const route = event.routes[0];
        const estimatedTimeInSeconds = route.summary.totalTime;
        const estimatedTimeInMinutes = Math.round(estimatedTimeInSeconds / 60);

        // Log or display the estimated time
        console.log('Estimated Time:', estimatedTimeInMinutes, 'minutes');

        // Set the estimated time in the state to make it accessible outside the event handler
        setEstimatedTimeInMinutes(estimatedTimeInMinutes);
      });

      // ... remaining code
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Create a map instance and set its initial view
    map = L.map('map').setView(restaurantLocation, 13);

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    var restaurantMarker = L.marker(restaurantLocation).addTo(map);
    restaurantMarker
      .bindPopup('<b>The Crispy Crust</b>', { permanent: true })
      .openPopup();

    // Move the initialization code inside useEffect after creating the map instance
    initializeMap();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <div
        id="map"
        style={{ height: '60vh', borderRadius: '5%', marginTop: '2rem' }}
      ></div>
      {estimatedTimeInMinutes !== null && (
        <span className="flex">
          <p className="m-auto py-4 pt-8 font-pacifico text-4xl text-orange-600">
            Your Delivery will take {estimatedTimeInMinutes} minutes
          </p>
        </span>
      )}
    </>
  );
};

export default Map;
