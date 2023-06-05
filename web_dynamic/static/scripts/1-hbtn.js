$(document).ready(function() {
  // Variable to store the selected amenities
  var selectedAmenities = [];

  // Function to update the h4 tag with the list of selected amenities
  function updateSelectedAmenities() {
    var selectedAmenitiesList = selectedAmenities.join(", ");
    $(".amenities h4").text(selectedAmenitiesList);
  }

  // Event listener for changes on each input checkbox tag
  $(".amenities li input[type='checkbox']").change(function() {
    var amenityId = $(this).data("id");
    var amenityName = $(this).data("name");

    if ($(this).is(":checked")) {
      // Add the Amenity ID to the selectedAmenities array
      selectedAmenities.push(amenityId);
    } else {
      // Remove the Amenity ID from the selectedAmenities array
      var index = selectedAmenities.indexOf(amenityId);
      if (index !== -1) {
        selectedAmenities.splice(index, 1);
      }
    }

    // Update the h4 tag with the updated list of selected amenities
    updateSelectedAmenities();
  });
});

