// type ButtonProps = {
//     buttonText: string;
//     onClick: ()=> void;
// }


// export function Button ({buttonText, onClick}: ButtonProps) {
//     return (
//         <button className="button" onClick={onClick} type='button'>
//            {buttonText}
//             </button> );
// }

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonText: string;
     onClick: ()=> void;
    
};

export function Button ({ buttonText, ...props }: ButtonProps)  {
    return (
        <button className="button" {...props}>
            {buttonText}
        </button>
    );
}
