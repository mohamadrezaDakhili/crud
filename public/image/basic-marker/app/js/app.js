$(document).ready(function () {
  var app = new Mapp({
    element: "#app",
    presets: {
      latlng: {
        lat: 32,
        lng: 52,
      },
      zoom: 6,
    },
    apiKey:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNjNzk2ZDgyM2Q4NGI5MDczYTVhMzk1YWI0YWU2MTZlMjE1MWExZDMyZmFmMjhiMmUyZjNlMDFkNzRmZTRhZWQ4YjhmMmZiNGY5NzFkZmIzIn0.eyJhdWQiOiI5NTI5IiwianRpIjoiM2M3OTZkODIzZDg0YjkwNzNhNWEzOTVhYjRhZTYxNmUyMTUxYTFkMzJmYWYyOGIyZTJmM2UwMWQ3NGZlNGFlZDhiOGYyZmI0Zjk3MWRmYjMiLCJpYXQiOjE1OTE0NDUzMjksIm5iZiI6MTU5MTQ0NTMyOSwiZXhwIjoxNTk0MDM3MzI5LCJzdWIiOiIiLCJzY29wZXMiOlsiYmFzaWMiXX0.r6d7NdhY0jwA_39wrChHvjQbnLTpseQU1GjpOcOnR3YWbrxBTGxCyS6Fm9fa3SEnXPdx46W1XwX_lwBddTS5h2B40vCHeyqV9SdI5mV6xI1NFJ0iGNJJz_7SusuPAKDy41xZuJywvihLLW5aUTk9wpmNuXiOY8gM8MOsnK__YSbVLp2Kle301sP7t5dnL5SNLFjQSdcDz6eOE6Sw_kEwOLo6aYpGBlUrYuBsuMvZI--3tAFFbdppbt-TjnzurV6h0lOC18Nm4WFZFOXwRzD5NgqwjBlbOVGeRPWNQWOLruEluoHNV-JQ3cKDRsoiGtxntKFmOWyVzHYc9lecAhzf_g",
  });

  app.addLayers();

  app.addMarker({
    name: "basic-marker",
    latlng: {
      lat: 37.375,
      lng: 49.759,
    },
    popup: {
      title: {
        html: "Basic Marker Title",
      },
      description: {
        html: "Basic marker description",
      },
      open: true,
    },
  });
});
