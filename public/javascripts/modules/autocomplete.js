function autocomplete(input, latInput, lngInput){
if(!input) return; //skip this if there is no input on page
const dropdown = new google.maps.places.Autocomplete(input);
}

export default autocomplete;