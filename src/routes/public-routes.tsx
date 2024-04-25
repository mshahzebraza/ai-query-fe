import PublicNavLayout from '@shared-views/public-nav-layout';
import {HomePage} from '@pages/home-page';
import {APP_URLS} from '@routes/app-urls';
import {Route, Routes} from 'react-router-dom';
import {ForgetPasswordPage} from '@pages/forget-password-page';
import {SignupPage} from '@pages/signup-page';
import {LoginPage} from '@pages/login-page';

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route element={<PublicNavLayout />}>
                <Route path={APP_URLS.ROOT} element={<HomePage />} />
                <Route path={APP_URLS.LOGIN} element={<LoginPage />} />
                <Route path={APP_URLS.SIGNUP} element={<SignupPage />} />
                <Route
                    path={APP_URLS.FORGET_PASSWORD}
                    element={<ForgetPasswordPage />}
                />
            </Route>
        </Routes>
    );
};
