const Button = (props) => {
   const {value, bgColor} = props;
   return (
      <button className={`hover:text-gray-300 hover:bg-transparent lg:text-xl ${!bgColor && 'bg-white'} transition duration-150 ease-in-out focus:outline-none rounded-full text-white px-2 sm:px-8 sm:py-3 text-sm`} style={{ backgroundColor: bgColor }}>
         {value}
      </button>
   )
}

export default Button;