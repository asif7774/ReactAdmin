import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, AuthLayout } from "./layouts";

// Route Views
import UserProfile from "./views/UserProfile";
import Login from "./views/Login";
import ResetPassword from "./views/ResetPassword";
import ForgotPassword from "./views/ForgotPassword";
import ProductListComponent from "./components/products/ProductsList";
import ProductDetails from "./components/products/ProductDetail";
import ProductToProductMapping from "./components/mapping/ProductToProductMapping";
import CompanyListComponent from "./components/company/CompanyList";
import CompanyDetails from "./components/company/CompanyDetail";
import ProductToCompanyMapping from "./components/mapping/ProductToCompanyMapping";
import UsersListComponent from "./components/users/UsersList";
import UserToCompanyMapping from "./components/mapping/UserToCompanyMapping";
import RequestsListComponent from "./components/requests/RequestsList";
import NotificationListComponent from "./components/notification/NotificationList";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import AbnormalActivitiesListComponent from "./components/abnormal-activities/abnormalactivitiesList";


export default [
  {
    path: "/",
    exact: true,
    layout: AuthLayout,
    component: () => <Redirect to="/login" />
  },
  {
    path: "/login",
    layout: AuthLayout,
    component: Login
  },
  {
    path: "/reset-password",
    layout: AuthLayout,
    component: ResetPassword
  },
  {
    path: "/forgot-password",
    layout: AuthLayout,
    component: ForgotPassword
  },
  {
    path: "/companies",
    layout: DefaultLayout,
    component: CompanyListComponent
  },
  {
    path: "/company-details",
    layout: DefaultLayout,
    component: CompanyDetails
  },
  {
    path: "/products",
    layout: DefaultLayout,
    component: ProductListComponent
  },
  {
    path: "/product-details",
    layout: DefaultLayout,
    component: ProductDetails
  },
  {
    path: "/product-product-mapping",
    layout: DefaultLayout,
    component: ProductToProductMapping
  },
  {
    path: "/company-product-mapping",
    layout: DefaultLayout,
    component: ProductToCompanyMapping
  },
  {
    path: "/users",
    layout: DefaultLayout,
    component: UsersListComponent
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile
  },
  {
    path: "/employee-company-mapping",
    layout: DefaultLayout,
    component: UserToCompanyMapping
  },
  {
    path: "/requests",
    layout: DefaultLayout,
    component: RequestsListComponent
  },
  {
    path: "/abnormal-activities",
    layout: DefaultLayout,
    component: AbnormalActivitiesListComponent
  },  
  {
    path: "/notifications",
    layout: DefaultLayout,
    component: NotificationListComponent
  },
  {
    path: "/404",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
   
];
