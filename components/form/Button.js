import React from 'react';
import classNames from 'classnames';


const Button = ({ className, disabled, children, color, leftIcon, onClick, icon }) => {
    return (
        <>

            <button
                disabled={disabled}
                onClick={onClick}
                className={classNames(
                    'relative h-auto inline-flex items-center justify-center rounded-lg transition-colors text-sm sm:text-base font-bold font-Poppins py-3 px-4 sm:py-3.5 sm:px-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 ',
                    { 'disabled:bg-opacity-30 bg-slate-900  hover:bg-slate-800 text-slate-50 hover:text-white  shadow-xl ': color === 'primary' },
                    { ' bg-white text-slate-700 hover:bg-gray-100 border border-slate-200 ': color === 'secondary' },
                    className
                )}
            >
                {leftIcon &&
                    <span className="mr-2 -ml-1">
                        {leftIcon}
                    </span>
                }

                {children}
                {icon &&
                    <span className="ml-2 -mr-1">
                        {icon}
                    </span>
                }

                {/* <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}

            </button>


        </>


    );
};

Button.defaultProps = {
    color: 'primary',
    disabled: false,
    className: null,
    onClick: () => { },

};

export default Button;
