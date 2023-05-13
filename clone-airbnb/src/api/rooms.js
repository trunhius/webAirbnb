
import axiosAPI from ".";

export const getRoomListByLocationAPI = (locationId) => {
  return axiosAPI.get("/api/rooms?locationId=" + locationId);
};

export const getRoomDetailAPI = (roomID) => {
  return axiosAPI.get("/api/rooms/" + roomID);
};

export const bookingRoomAPI = (data)=>{
  const {token} = JSON.parse(localStorage.getItem("userLogin"))
  return axiosAPI.post("/api/rooms/booking", data, {
    headers:{
      token,
    },
  });
};
