import React, { useEffect, useState } from "react";

import links from "../../f2bLinks/";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import "./style.css";
import mapStyles from "../../mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 40.4259,
  lng: -86.9081,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function GMap() {

  const [reviews, setReviews] = useState([]);
  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }

  useEffect(() => {
    async function loadReviews() {
      let reviews = await links.getAllReviews();
      setReviews(reviews.data);
    }
    loadReviews();
  });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  });

  // const [markers, setMarkers] = React.useState([]);

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <Search panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
        // clickableIcons={false}
        options={options}
        // onClick={(event) => {
        //   console.log("state is:");
        //   console.log(reviews);
        // }}
        onLoad={onMapLoad}
      >
        {reviews.map((item) => {
          // console.log(item)
          return <Marker key={item._id} position={{lat: item.Lat, lng: item.Lng}} onClick={() => onSelect(item)} />;
        })}
        {selected.Lat && selected.Lng && 
            (
              <InfoWindow
              position={{lat: selected.Lat, lng: selected.Lng}}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <div>
                <p>{selected.Address} </p>
                <p>Mask Rating: {selected.Rating} </p>
                <p>Overall Sanitation: {selected.Sanitation} </p>
                <p>Social Distancing: {selected.Social} </p>
              </div>
            </InfoWindow>
            )
         }
      </GoogleMap>
    </div>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete({
    requestOptions: {
      location: { lat: () => 40.4259, lng: () => -86.908 },
      radius: 1000,
    },
  });

  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(event) => setValue(event.target.value)}
          disabled={!ready}
          placeholder="Search for a location"
        ></ComboboxInput>
        <ComboboxPopover>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
