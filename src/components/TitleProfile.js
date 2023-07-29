import React from 'react';
import '../CSS files/TitleProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';



const TitleProfile = () => {
    return (
        <div className="container border  border-2 border-dark m-2 rounded py-2">
            <div className="row">
                <div className="col-9 mt-3 text-center">
                    <p className='h2'> -: Rise of the Steller Team :- </p>
                </div>

                <div className="col-2 mt-4 text-center">
                    <FaUserCircle size={34} />
                    <FaUserCircle size={34} />
                    <FaUserCircle size={34} />
                </div>
                <div className='col-1'>
                    <FaPlayCircle size={64} className='m-2' />
                </div>
            </div>
        </div>
    );
};

export default TitleProfile;