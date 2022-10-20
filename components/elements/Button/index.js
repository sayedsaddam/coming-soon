const Button = (props) => {
   const {value, bgColor} = props;

   return (
      <button className={`hover:text-gray-300 hover:bg-transparent lg:text-xl ${!bgColor && 'bg-white text-blue-400'} transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 rounded text-white px-4 sm:px-8 py-1 sm:py-3 text-sm`} style={{ backgroundColor: bgColor }}>
         {value}
      </button>
   )
}

export default Button;