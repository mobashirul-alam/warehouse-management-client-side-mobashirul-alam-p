import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div>
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
        </div>
    );
};

export default LoadingSpinner;