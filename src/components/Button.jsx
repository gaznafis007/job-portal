/* eslint-disable react/prop-types */


const Button = ({children, type, handler}) => {
    return (
        <button type={type} onClick={handler} className={`px-4 py-2 rounded-md bg-cyan-400 text-white hover:bg-cyan-500`}>
            {children}
        </button>
    );
};

export default Button;