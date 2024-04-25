import {APP_URLS} from '@routes/app-urls';
import {Button} from '@components/ui/button';
import {useNavigate} from 'react-router-dom';

export const HomeCard = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 className='text-2xl mb-3'>Home Page</h1>
            <div className='flex gap-2'>
                <Button
                    onClick={() => navigate(APP_URLS.LOGIN)}
                    variant={'secondary'}
                >
                    Login
                </Button>
            </div>
        </>
    );
};
