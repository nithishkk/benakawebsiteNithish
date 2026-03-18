import axios from "axios";

// export const BaseUrl = "https://knsonline.in/RestAPI/";
// export const DocumentUrl = "https://knsonline.in/";
export const BaseUrl = "https://ji.dterp.in/RestAPI/";
export const DocumentUrl = "https://ji.dterp.in/";

export const ApiPaths = {
  WebHomeScreen: "getWebHomeScreen",
  getWebProject: "getWebProject",
  getWebTestimonial: "getWebTestimonial",
  getWebJobOpening: "getWebJobOpening",
};

export const ApiService = axios.create({
  baseURL: BaseUrl + "v2/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export const SetAuthToken = (token) => {
  if (token) {
    ApiService.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    delete ApiService.defaults.headers.common["Authorization"];
  }
};

export const ApiStatus = {
  OTP_SENT: "OTP sent",
};
