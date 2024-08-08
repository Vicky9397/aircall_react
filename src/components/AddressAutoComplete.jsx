import React, { useEffect, useState } from 'react';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';

const libraries = ['places'];

const AddressAutoComplete = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCBNfCvecx8sq_3_KrTgO78jYHmVv9wV8c', // Replace 'YOUR_API_KEY' with your actual API key
    libraries,
  });

  const [autocomplete, setAutocomplete] = useState(null);
  const [address, setAddress] = useState('');

  const onLoad = (autoC) => setAutocomplete(autoC);
  useEffect(()=>{
    console.log(address)
  })
  
  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      setAddress(place.formatted_address);
      console.log(place);
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <input
          type="text"
          placeholder="Enter an address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Autocomplete>
    </div>
  );
};

export default AddressAutoComplete;
