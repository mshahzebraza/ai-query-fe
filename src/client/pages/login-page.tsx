import {Button} from '@/components/ui/button';
import {APP_URLS} from '@/routes/app-urls';
import {SEARCH_URL_PARAMS} from '@/shared/constants';
import {authAtom} from '@/shared/store';
import {useSetAtom} from 'jotai/react';
import {useNavigate, useSearchParams} from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate();
    const setAuth = useSetAtom(authAtom);

    // fetch the redirect search param from the url; default to APP_ROOT if not found
    const [searchParams] = useSearchParams();
    const redirectUrl =
        searchParams.get(SEARCH_URL_PARAMS.REDIRECT_URL) || APP_URLS.APP_ROOT;

    const handleLogin = () => {
        setAuth((authState) => {
            return {...authState, isAuth: true};
        });
        navigate(redirectUrl);
    };

    return (
        <div className='px-10 py-2 flex flex-col gap-2 items-start justify-start '>
            <h1 className='text-2xl mb-3'>Login Page</h1>
            <div className='flex gap-2'>
                <Button onClick={() => handleLogin()} variant={'secondary'}>
                    Access Application
                </Button>
            </div>
        </div>
    );
};
