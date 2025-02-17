import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

const AdminAuthMiddleware = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            const isAdminAuthenticated = localStorage.getItem("adminAuth"); // Check admin auth
            if (!isAdminAuthenticated) {
                return <Redirect to="/admin-login" />; // Redirect to login if not authenticated
            }
            return (
                <Layout>
                    <Component {...props} />
                </Layout>

            );
        }}
    />
);

export default withRouter(AdminAuthMiddleware);
