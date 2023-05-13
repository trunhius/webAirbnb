import axiosAPI from ".";
export const getLocationListAPI = (locationn) => {
  return axiosAPI.get("/api/locations?location=" + locationn);
};

/*export const getLocationListAPI = async () => {
    const res = await axios({
        method: "GET",
        url:"https://63eb4262bfdd42996743e800.mockapi.io/users"
    });
    return res.data;
};*/
