import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { JWTPayloadTypes, UserTypes } from "../../../services/data-types/index";
import jwt_decode from "jwt-decode";

export default function Profile() {
  const [user, setUser] = useState({
    avater: "",
    username: "",
    email: "",
  });

  const IMG = process.env.NEXT_PUBLIC_IMG;
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwt_decode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      userFromPayload.avater = `${IMG}/${userFromPayload.avater}`;
      setUser(userFromPayload);
    }
  }, []);

  return (
    <div className='user text-center pb-50 pe-30'>
      <img
        // src={`${IMG}/${user.avater}/`}
        src='/img/avatar-1.png'
        width='90'
        height='90'
        className='img-fluid mb-20'
        style={{ borderRadius: "100%" }}
      />
      <h2 className='fw-bold text-xl color-palette-1 m-0'>{user.name}</h2>
      <p className='color-palette-2 m-0'>{user.email}</p>
    </div>
  );
}
