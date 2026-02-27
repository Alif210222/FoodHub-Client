import { LoginForm } from '@/components/modules/auth/login/loginForm';
import React from 'react';

const page = () => {
    return (
        <div className='container mx-auto px-4'>
            <div className='min-h-[80vh] flex items-center justify-center'>
                <LoginForm></LoginForm>
            </div>
          
        </div>
    );
};

export default page;