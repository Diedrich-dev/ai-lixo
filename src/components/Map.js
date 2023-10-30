import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";

function Map() {
  const googleMapsAPIKey = process.env.REACT_APP_CHAVE_API_MAPS;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsAPIKey,
  });
  
  const locations = [
    {
      lat: -24.96152041230841,
      lng: -53.50744425857699,
      label: "Univel",
    },
    {
      lat: -24.962599185584367,
      lng: -53.50981656391458,
      label: "Centro veterinario",
    }
  ]

  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <div className="h-full w-full">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%", borderRadius: "1rem", border: "2px solid #0CD761"}}
          center={{
            lat: -24.96152041230841,
            lng: -53.50744425857699,
          }}
          zoom={15}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={{
                lat: parseFloat(location.lat),
                lng: parseFloat(location.lng),
              }}
              options={{
                label: {
                  text: location.label,
                  className: "mt-16 font-bold",
                },
              }}
              onClick={() => setSelectedMarker(location)}
            />
          ))}
          {selectedMarker && (
            <InfoWindow
              position={{
                lat: parseFloat(selectedMarker.lat),
                lng: parseFloat(selectedMarker.lng),
              }}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div>
                <h3>{selectedMarker.label}</h3>
                <p>Descrição</p>
                <a
                  href={`https://www.google.com/maps/dir/${selectedMarker.lat},${selectedMarker.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir até o centro
                </a>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </div>
  );
}

export default Map;