import {ApiPaths, ApiService, SetAuthToken, ApiStatus} from '../../utils/ApiService';
import {MAIN_LOAD_TRUE, MAIN_LOAD_FALSE, HOME_SCREEN_DATA,
     OTP_SENT_SUCCESS, OTP_VALID_FAILS, PROJECT_DATA, DISPLAY_MESSAGE, TESTIMONIAL_DATA,CARRIER_DATA,
     DISPLAY_ERROR,OTP_VALID_SUCCESS} from './types';
// import { toast } from 'react-toastify';

const UserData = {
    "userID":"143620071466608200",
    "projectID":1
    }

export const getHomeData_action = (data) => {
    return dispatch => {
        dispatch(mainLoadingTrue());
        return ApiService.post(ApiPaths.WebHomeScreen, UserData).then(response => {
                const {data}  = response;
                dispatch(mainLoadingFalse());
                console.log(data)
                if(!data.error)
                {
                    dispatch(getHomeDataSuccess(data.project));
                }
                else
                {
                    // dispatch(displayError(data.message));
                }
            })
            .catch(err => {
                dispatch(mainLoadingFalse());
                // displayError('Failed, try again later');
            })
    }
}

export const getProject_action = (data) => {
    return dispatch => {
        dispatch(mainLoadingTrue());
        return ApiService.post(ApiPaths.getWebProject, {...UserData ,  "locationID":0}).then(response => {
                const {data}  = response;
                dispatch(mainLoadingFalse());
                console.log(data)
                if(!data.error)
                {
                    dispatch(getProjectDataSuccess(data.project));
                }
                else
                {
                    // dispatch(displayError(data.message));
                }
            })
            .catch(err => {
                dispatch(mainLoadingFalse());
                // displayError('Failed, try again later');
            })
    }
}

export const getTestimonial_action = (data) => {
    return dispatch => {
        dispatch(mainLoadingTrue());
        return ApiService.post(ApiPaths.getWebTestimonial, UserData).then(response => {
                const {data}  = response;
                dispatch(mainLoadingFalse());
                console.log(data)
                if(!data.error)
                {
                    dispatch(getTestimonialDataSuccess(data.testimonial));
                }
                else
                {
                    // dispatch(displayError(data.message));
                }
            })
            .catch(err => {
                dispatch(mainLoadingFalse());
                // displayError('Failed, try again later');
            })
    }
}

export const getCarrier_action = (data) => {
    return dispatch => {
        dispatch(mainLoadingTrue());
        return ApiService.post(ApiPaths.getWebJobOpening, UserData).then(response => {
                const {data}  = response;
                dispatch(mainLoadingFalse());
                console.log(data)
                if(!data.error)
                {
                    dispatch(getCarrierDataSuccess(data.job));
                }
                else
                {
                    // dispatch(displayError(data.message));
                }
            })
            .catch(err => {
                dispatch(mainLoadingFalse());
                // displayError('Failed, try again later');
            })
    }
}


export const mainLoadingTrue = () => {
    return {
        type : MAIN_LOAD_TRUE
    }
}
export const mainLoadingFalse = () => {
    return {
        type : MAIN_LOAD_FALSE
    }
}

export const getHomeDataSuccess = (data) => {
    return {
        type : HOME_SCREEN_DATA,
        payload : data
    }
}

export const getProjectDataSuccess = (data) => {
    return {
        type : PROJECT_DATA,
        payload : data
    }
}

export const getTestimonialDataSuccess = (data) => {
    return {
        type : TESTIMONIAL_DATA,
        payload : data
    }
}

export const getCarrierDataSuccess = (data) => {
    return {
        type : CARRIER_DATA,
        payload : data
    }
}