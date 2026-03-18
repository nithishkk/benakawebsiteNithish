import { MAIN_LOAD_FALSE,MAIN_LOAD_TRUE, DISPLAY_MESSAGE,DISPLAY_ERROR, 
    SUCCESS_STATUS,HOME_SCREEN_DATA, PROJECT_DATA, TESTIMONIAL_DATA,
    CARRIER_DATA
} from './types';

const initialState = {
    img_url: 'https://www.goocampus.in/goocampus_new/',
    main_loader : false,
    message : "",
    error : "",
    status : "",
    homeScreenData : [],
    projectLists : [],
    testimonialsLists : [],
    carrierLists : []
}

const Home_reducer = (state = initialState, { type, payload }) => {
    switch(type)
    {
        case MAIN_LOAD_TRUE:
            return Object.assign({}, state, { main_loader: true });
        
        case MAIN_LOAD_FALSE:
            return Object.assign({}, state, { main_loader: false });

        case DISPLAY_MESSAGE:
            return Object.assign({}, state, { message: payload.message });
            
        case DISPLAY_ERROR:
            return Object.assign({}, state, { error: payload.error });

        case SUCCESS_STATUS:
            return Object.assign({}, state, { status: payload.status });
            
        case HOME_SCREEN_DATA:
            return Object.assign({}, state, { homeScreenData: payload });
            
        case PROJECT_DATA:
            return Object.assign({}, state, { projectLists: payload });    

        case TESTIMONIAL_DATA:
            return Object.assign({}, state, { testimonialsLists: payload });   
        case CARRIER_DATA:
            return Object.assign({}, state, { carrierLists: payload });   
        
        default:  
            return state;
    }
}

export default Home_reducer;