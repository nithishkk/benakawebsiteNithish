import * as React from 'react';
export const routes = [
	{
		path: '/',
		Component: React.lazy(() => import('../Home')),
		exact: true,
	},
	{
		path: '/home',
		Component: React.lazy(() => import('../Home')),
		exact: true,
	},
	{
		path: '/client-testimonials',
		Component: React.lazy(() => import('../ClientTestimonials')),
		exact: true,
	},
	{
		path: '/blogs',
		Component: React.lazy(() => import('../Blogs')),
		exact: true,
	},
	{
		path: '/carrier',
		Component: React.lazy(() => import('../Carrier')),
		exact: true,
	},
	{
		path: '/Nri',
		Component: React.lazy(() => import('../NRI')),
		exact: true,
	},
	{
		path: '/Design',
		Component: React.lazy(() => import('../Design')),
		exact: true,
	},
	{
		path: '/CompanyInfo/TeamsofService',
		Component: React.lazy(() => import('../CompanyInfo/TermsofService')),
		exact: true,
	},
	{
		path: '/CompanyInfo/Disclaimer',
		Component: React.lazy(() => import('../CompanyInfo/Disclaimer')),
		exact: true,
	},
	{
		path: '/CompanyInfo/PrivacyPolicy',
		Component: React.lazy(() => import('../CompanyInfo/PrivacyPolicy')),
		exact: true,
	},

]
