import {SEARCH_URL_PARAMS} from '@/shared/constants';
import {authAtom} from '@/shared/store';
import {APP_URLS} from '@routes/app-urls';
import {useAtomValue} from 'jotai/react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';

const PageWrapper = ({children}: {children: React.ReactNode}) => {
    return <main className='h-full flex flex-col bg-gray-50'>{children}</main>;
};

const PrivateNav = () => (
    <nav className='flex h-12 shadow-sm bg-slate-900 text-white px-10 py-2 items-center'>
        This is a Private nav
    </nav>
);

const PrivateNavLayout = () => {
    const {isAuth} = useAtomValue(authAtom);
    // get the location that the user is trying to access
    const {pathname} = useLocation();

    // if the user is not authenticated, redirect them to the login page with the redirect url as a query param
    const fallbackUrl = `${APP_URLS.LOGIN}?${SEARCH_URL_PARAMS.REDIRECT_URL}=${pathname}`;
    if (!isAuth) return <Navigate to={fallbackUrl} />;

    return (
        <PageWrapper>
            <PrivateNav />
            <Outlet />
        </PageWrapper>
    );
};

export default PrivateNavLayout;
