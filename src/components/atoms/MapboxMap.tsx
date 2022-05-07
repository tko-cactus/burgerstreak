import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState, VFC } from "react";

export const MapboxMap: VFC = () => {
  // const token =
  //   "pk.eyJ1IjoidG9reWFtYWciLCJhIjoiY2wydmIweXB3MGE4aTNicGZxZWVvM3Z5MyJ9.s9H0rAymEJtdW4IWSuxsWQ";
  mapboxgl.accessToken = `${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`;
  // mapboxgl.accessToken = token;
  console.log(mapboxgl.accessToken);

  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return <div ref={mapContainer} className="map-container" />;
  // return (
  //   <>
  //     <p>mapboxmap</p>
  //   </>
  // );
};
