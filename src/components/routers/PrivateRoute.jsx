import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import Navbar from '../Navbar';
import {connect} from 'react-redux';
import {CircularProgress} from "@mui/material"
import Footer from '../Footer';

const RenderApp = (props) => {
    if(props.children.props.noAuth){
		return <>
			<Navbar />
			<div >
				{/* {props.main_loader 	&&  <CircularProgress  color="secondary" /> } */}
				<React.Suspense fallback={<div><CircularProgress  color="secondary" /></div>}>{props.children}</React.Suspense>
			</div>
			<Footer />
		</>
	}
	// else if(props.children.props.location.pathname == "/verifyOtp"){
	// 	return <React.Suspense fallback={<div>Loading...</div>}><OTPVerify /></React.Suspense>
	// }else if(props.children.props.location.pathname == "/login"){
	// 	return <React.Suspense fallback={<div>Loading...</div>}><Login /></React.Suspense>
	// }else{
	// 	return <React.Suspense fallback={<div>Loading...</div>}><Login /></React.Suspense>
	// }
	
    // fallback={<Spin />}
};

function PrivateRoute ({
	component: Component,
	noAuth = false,
	...rest
}){

	return(
		<Route
			{...rest}
			render={props => (
            <RenderApp>
                 <Component noAuth={noAuth} {...props} />
            </RenderApp>
            )}
		/>
	)
};


function mapStatesToProps(state){
	  return {
		main_loader : state.home.main_loader
	}}
export default connect(mapStatesToProps, null)(PrivateRoute);