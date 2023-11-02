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
      lat: -24.9616897,
      lng: -53.5081189,
      label: "Lixeira de Eletrônicos",
      describe: "Bloco A, ao lado da máquina de café"
    },
  ]

  const [selectedMarker, setSelectedMarker] = useState(null);
  const image = "https://i.imgur.com/CHfXffr.jpg";
  const icon = "https://i.imgur.com/G5KXCFd.png";
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
              icon={icon}
              key={index}
              si
              position={{
                lat: parseFloat(location.lat),
                lng: parseFloat(location.lng),
              }}
              options={{
                label: {
                  text: location.label,
                  className: "mt-16 font-bold underline",
                  color: "blue",
                  fontSize: "20px",
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
              <div className="flex flex-col items-center">
                <div className="flex flex-col gap-y-1 items-center">
                  <h3 className="font-bold">{selectedMarker.label}</h3>
                  <p>{selectedMarker.describe}</p>  
                </div>
                <img className="h-24 w-24" src={image} alt="Localização da lixeira"/>
                <a
                  href={`https://www.google.com/maps/dir/${selectedMarker.lat},${selectedMarker.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-red-600 font-bold underline hover:text-blue-400"
                >
                  Ir até a lixeira
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