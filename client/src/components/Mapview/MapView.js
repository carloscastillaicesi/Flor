import React, { useState, useEffect, useRef, useContext } from "react";
import { Map, TileLayer, Marker, Circle } from "react-leaflet";
import { UserContext } from "../../contexts/UserContext";
import { SettingContext } from "../../contexts/SettingContext";
import { LocationContext } from "../../contexts/LocationContext";
import { Popup } from "react-leaflet";
import { useLocation, useHistory, useParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import MarkerPopup from "./MarkerPopup";
import MapUI from "./MapUI/MapUI";
import AllUsers from "./MapUI/AllUsers";
import { Icon } from "../Icons/Icon";
import { IconTwo } from "../Icons/IconTwo";
import { IconThree } from "../Icons/IconThree";
import { IconFour } from "../Icons/IconFour";
import { IconUser } from "../Icons/IconUser";
import { pulse } from "../Icons/pulse";
import { useQuery } from "react-query";
import spinner from "../../assets/spinner.svg"



const MapView = () => {


  const { _id, name, geometry, current, pic, level, userData, setCurrentLocation, setCurrentUserLocalStorage } = useContext(UserContext);

  var localStore = JSON.parse(localStorage.getItem('state'));

  _id === '' && userData(localStore);

  const fetchLocations = async () => {
    const res = await fetch(`/map/${_id === '' ? localStore._id : _id}`, {
      crossDomain: true
    })
    return res.json();
  }

  const { isLoading, isError, data } = useQuery('locations', fetchLocations);

  const [pickedUser, setpickedUser] = useState('')
  const [mapUrl, setMapUrl] = useState(true)
  const [open, setOpen] = useState(true);
  const [options, setOptions] = useState("map");
  const [posActual, setposActual] = useState(false);

  const { fullScreenMode, toggleFullscreen, setModal } = useContext(SettingContext);

  const { locations } = useContext(LocationContext);

  const location = useLocation();

  const history = useHistory();

  let { userId } = useParams();

  const mapRef = useRef(null);

  const handle = useFullScreenHandle();

  useEffect(() => {
    setModal(false);
    if (userId && userId !== "aboutme") {
      if (locations) {
        centerMapViewUserParams(userId);
      }
    }
    if (location) {
      if (location.state !== undefined) {
        if (location.state.latitude && location.state.longitude) {
          const currentLocation = {
            lat: location.state.latitude,
            lng: location.state.longitude,
          };
          setCurrentLocationFunction(currentLocation);
          history.replace({
            pathname: "/map",
            state: {},
          });
        }
      }
    }
  }, [location, history, setModal, pickedUser, userId, isLoading, locations]);


  function centerMapViewUserParams(userId) {
    setpickedUser(userId);
    centerMapViewUser();
    setTimeout(() => {
      history.push("/map");
    }, 10);

  }

  function setCurrentLocationFunction(currentLocation) {
    setCurrentLocation(currentLocation);
  }

  function centerMapView(e) {
    const { leafletElement } = mapRef.current;
    if (e) {
      leafletElement.setView(e.popup._latlng, 16);
      const point = leafletElement.project(e.target._popup._latlng);
      leafletElement.panTo(leafletElement.unproject(point), { animate: true });
    }
  }

  function centerMapViewUser() {
    const { leafletElement } = mapRef.current;
    if (pickedUser !== '') {
      var user = locations.filter((o) => o['_id'] === pickedUser)[0];
      let latlng = { lat: user.geometry[0], lng: user.geometry[1] }
      leafletElement.setView(latlng, 16);
      const point = leafletElement.project(latlng);
      leafletElement.panTo(leafletElement.unproject(point), { animate: true });
      setOpen(true);
      setOptions("map");

    }

  }

  function centerMapViewMe() {
    const { leafletElement } = mapRef.current;
    navigator.geolocation.getCurrentPosition(
      function (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        const currentLocation = { lat: latitude, lng: longitude };
        setCurrentLocation(currentLocation);
        setCurrentUserLocalStorage();
        leafletElement.setView(currentLocation, 16);
        const point = leafletElement.project(currentLocation);
        leafletElement.panTo(leafletElement.unproject(point), { animate: true });
      },

      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }

  function changeMap() {
    setMapUrl(!mapUrl);
  }


  function posActualToggle() {
    setposActual(!posActual);
  }

  function allUsersToggle() {
    if (open) {
      setOpen(false);
      setOptions("users");
    } else if (!open) {
      setOpen(true);
      setOptions("map");
      setpickedUser('');
    }
  }

  return (
    <div className="component-mapview">
      {isError ? "Se ha producido un error inesperado. Recarga la página" :
        <div>
          {isLoading ?
            <div className="homeuser-container">
              <img src={spinner} alt="" />
              <h3>Cargando...</h3>
            </div>
            :
            <FullScreen handle={handle}>
              <div className="mapview-container">
                {options === "map"
                  ? ""
                  : <AllUsers allUsersToggle={allUsersToggle} name={name} pic={pic} data={data} pickedUser={pickedUser} setpickedUser={setpickedUser} centerMapViewUser={centerMapViewUser} setOpen={setOpen} setOptions={setOptions} id={_id}></AllUsers>}

                {open
                  ?
                  <MapUI name={name} pic={pic} id={_id} fullScreenMode={fullScreenMode} mapUrl={mapUrl} changeMap={changeMap} handle={handle} toggleFullscreen={toggleFullscreen} centerMapViewMe={centerMapViewMe} allUsersToggle={allUsersToggle} setpickedUser={setpickedUser} ></MapUI>
                  :
                  ''}



                <Map ref={mapRef}
                  center={current}
                  onPopupopen={centerMapView.bind(this)}
                  zoom={13}
                  maxZoom={19}
                  minZoom={13}
                  dragging={open}
                  zoomControl={false}
                  touchZoom={open}
                  doubleClickZoom={open}
                  scrollWheelZoom={open}>

                  <TileLayer
                    url={mapUrl ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} attribution={`&copy; <a href="http://osm.org/copyright">${mapUrl ? 'ArGis' : 'OpenStreetMap'}</a> contributors`} />


                  <Marker
                    position={current}
                    icon={IconUser}
                    opacity={!pickedUser ? 100 : pickedUser === current ? 100 : 0.5}
                  >
                    <Popup autoPan={false} closeButton={false} onClose={() => setOpen(true)} onOpen={() => { setOpen(false); centerMapViewMe(this); setpickedUser(''); }}>
                      <div className={!posActual ? "mihuerta-container" : "mihuerta-container-expanded"}>
                        <div className="mihuerta-container-item" onClick={!posActual ? () => { posActualToggle(); setpickedUser(geometry) } : () => { posActualToggle() }}>
                          <img src={pic} alt="" />
                          <h2>Mi posición actual</h2>
                          <div className={!posActual ? "arrow-gallery down" : "arrow-gallery up"} />
                        </div>
                        <div onClick={posActual ? () => { centerMapViewUser(); posActualToggle() } : ""}><h3>Ir a mi huerta</h3></div>
                      </div>
                    </Popup>

                    <Circle
                      center={current}
                      fillColor="white"
                      weight={0}
                      radius={40} />
                  </Marker>


                  {data.map((data, i) => (
                    <Marker key={i}
                      position={data.geometry ? data.geometry : { lat: "0", lng: "0" }}
                      icon={data.level === 1 ? Icon : data.level === 2 ? IconTwo : data.level === 3 ? IconThree : data.level === 4 ? IconFour : Icon}
                      opacity={!pickedUser ? 100 : pickedUser === data._id ? 100 : 0.5}
                      zIndexOffset={!pickedUser ? "" : pickedUser === data._id ? 10000 : ""}>

                      <MarkerPopup
                        name={data.name}
                        level={data.level}
                        open={open}
                        pic={data.pic}
                        _id={data._id}
                        setOpen={setOpen} setOptions={setOptions} setpickedUserMapView={setpickedUser}
                      />
                    </Marker>

                  ))};

                  <Marker
                    position={geometry}
                    icon={level === 1 ? Icon : level === 2 ? IconTwo : level === 3 ? IconThree : level === 4 ? IconFour : Icon}
                    opacity={!pickedUser ? 100 : pickedUser === _id ? 100 : 0.5}
                    zIndexOffset={!pickedUser ? "" : pickedUser === _id ? 10000 : ""}>

                    <MarkerPopup
                      name={name}
                      open={open}
                      _id={_id}
                      level={level}
                      setOpen={setOpen} setOptions={setOptions} setpickedUserMapView={setpickedUser} pic={pic}
                    />
                  </Marker>

                  {pickedUser !== '' ?
                    <Marker
                      position={locations.filter((o) => o['_id'] === pickedUser)[0].geometry}
                      icon={pulse}
                      opacity={open ? 100 : 0}>

                    </Marker> : ""}


                </Map>
              </div >
            </FullScreen >
          }
        </div >}
    </div >

  );
};

export default MapView;
