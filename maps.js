<script>
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    function showPosition(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      initMap(lat, lon);
      findNearbyGyms(lat, lon);
    }
    function showError(error) {
      alert("Geolocation error: " + error.message);
    }
    function initMap(lat, lon) {
      let map = L.map('map').setView([lat, lon], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      L.marker([lat, lon]).addTo(map).bindPopup('Você está aqui').openPopup();
    }
    function findNearbyGyms(lat, lon) {
      let overpassUrl = "https://overpass-api.de/api/interpreter?data=[out:json];node[leisure=fitness_centre](around:2000," + lat + "," + lon + ");out;";
      fetch(overpassUrl)
        .then(response => response.json())
        .then(data => {
          let gyms = data.elements;
          gyms.forEach(gym => {
            L.marker([gym.lat, gym.lon]).addTo(map).bindPopup(gym.tags.name || "Gym").openPopup();
          });
        })
        .catch(error => {
          alert("Error querying Overpass API: " + error.message);
        });
    }
  </script>