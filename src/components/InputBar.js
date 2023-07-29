import React from 'react';
import '../CSS files/InputBar.css';


const InputBar = () => {
    return (

        <div class="container">
            <div class="row">
                <div class="col">
                </div>
                <div class="col-12">
                    <div className="   text-center input-color  input-bar-container">
                        <input className='p-3 text-bold text-center bg-dark bold'
                            type="text"
                            placeholder=" Enter input alt+c "
                        />
                    </div>
                    <div class="col">
                    </div>
                </div>

            </div>
        </div>

    );
};

export default InputBar;
