import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <>
            <div className='w-100 my-5'>
                <Button variant="primary" disabled className='d-block mx-auto '>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            </div>
        </>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    else {
        return children;
    }
};

export default RequireAuth;