import {Outlet} from 'react-router-dom';

const PageWrapper = ({children}: {children: React.ReactNode}) => {
    return <main className='h-full flex flex-col bg-gray-50'>{children}</main>;
};

const PublicNav = () => (
    <nav className='flex h-12 shadow-sm bg-slate-100 px-10 py-2 items-center'>
        This is a Public nav
    </nav>
);

const PublicNavLayout = () => {
    return (
        <PageWrapper>
            <PublicNav />
            <Outlet />
        </PageWrapper>
    );
};

export default PublicNavLayout;
