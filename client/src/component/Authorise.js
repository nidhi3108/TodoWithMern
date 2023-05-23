import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Authorize = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('currentUser')));

    if(currentUser === null){
        Swal.fire({
            title: 'Login/Register',
            icon:'error',
            text: 'Login to Continue',
            timer: 2000
        })
        
        return <Navigate to='/login' />
    }

    return (
        children
    )
}

export default Authorize