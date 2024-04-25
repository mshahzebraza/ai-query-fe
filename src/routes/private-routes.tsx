import {DashboardPage} from '@pages/dashboard-page';
import {SettingsPage} from '@pages/settings-page';
import {getLayoutRelativePath} from '@shared/utils';
import {APP_URLS} from '@routes/app-urls';
import PrivateNavLayout from '@shared-views/private-nav-layout';
import {Route, Routes} from 'react-router-dom';

// bind the getLayoutRelativePath function to the APP_URLS.APP_ROOT layout path
// this will allow us to use the getLayoutRelativePath function without specifying the layout path
const getAppRelativePath = (path: string) =>
    getLayoutRelativePath(path, APP_URLS.APP_ROOT);

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route element={<PrivateNavLayout />}>
                {/* Paths are relative to APP.APP_ROOT_FOLDER */}
                <Route
                    path={getAppRelativePath(APP_URLS.APP_ROOT)}
                    element={<DashboardPage />}
                />
                <Route
                    path={getAppRelativePath(APP_URLS.APP_ROOT_SETTINGS)}
                    element={<SettingsPage />}
                />
            </Route>
        </Routes>
    );
};
