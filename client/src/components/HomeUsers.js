import React, { useEffect, useContext } from "react";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { SettingContext } from "../contexts/SettingContext";
import florInicial from "../assets/flor_inicio.png"
import { useQuery } from "react-query";
import spinner from "../assets/spinner.svg"
import Onboarding from "./Onboarding";

const HomeUsers = () => {

  let { userid } = useParams();



  const fetchUser = async () => {
    const res = await fetch(`/user/${userid}`, {
      crossDomain: true
    })
    return res.json();
  }

  const { isLoading, data, status } = useQuery('currentUser', fetchUser);



  const history = useHistory();
  const { name, level, userData, geometry, setCurrentLocation, setCurrentUserLocalStorage } = useContext(UserContext);

  const { toggleFullscreen } = useContext(SettingContext);

  var localStore = JSON.parse(localStorage.getItem('state'));

  function getGeo() {

    navigator.geolocation.getCurrentPosition(
      function (position) {
        setCurrentLocation({
          lng: position.coords.longitude,
          lat: position.coords.latitude
        });

        setTimeout(() => {
          history.push({
            pathname: "/map",
            state: {
              longitude: position.coords.longitude,
              latitude: position.coords.latitude,
            }
          });
        }, 1000);
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }

    );
  };
  useEffect(() => {
    toggleFullscreen('');
    if (status === "success" && data !== null) {
      userData(data);
    }
    if (data === null) {
      history.push("/usernotfound");
    }
  }, [history, status, userData, toggleFullscreen, geometry, data])

  return (
    <div>
      {!data || isLoading ?
        <div className="homeuser-container">
          <img src={spinner} alt="" />
          <h2>Cargando...</h2>
        </div>

        : <div className="homeuser-container">

          {level <= 1 && <Onboarding getGeo={getGeo} setCurrentUserLocalStorage={setCurrentUserLocalStorage} name={name}></Onboarding>

          }{localStore ? <div>
            {localStore._id === data._id ?
              <Redirect to="/map" /> :
              <div>
                <h1>Hola, {name.split(" ").length >= 4 ? name.split(" ").slice(0, 3).join(" ") : name.split(" ")[0]}</h1>
                <br />
                <img src={florInicial} alt="" />
                <p className="paragraph">Para poder ingresar al mapa, necesito me permitas conocer tu ubicación</p>
                <div onClick={() => {
                  getGeo.bind(); setCurrentUserLocalStorage(); setTimeout(() => {
                    history.push("/map")
                  }, 1000);
                }} className="option-button">Activar Geolocalización</div>
              </div>
            } </div>
            : <div>
              <h1>Hola, {name.split(" ").length >= 4 ? name.split(" ").slice(0, 3).join(" ") : name.split(" ")[0]}</h1>
              <br />
              <img src={florInicial} alt="" />
              <p className="paragraph">Para poder ingresar al mapa, necesito me permitas conocer tu ubicación</p>
              <div onClick={() => {
                getGeo.bind(); setCurrentUserLocalStorage(); setTimeout(() => {
                  history.push("/map")
                }, 1000);
              }} className="option-button">Activar Geolocalización</div>
            </div>
          }
        </div >}

    </div >
  );
}

export default HomeUsers;

