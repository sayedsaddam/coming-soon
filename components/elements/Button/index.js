const Button = (props) => {
   const {value, bgColor} = props;
   return (
      <button className={`hover:text-gray-300 hover:bg-transparent lg:text-xl ${!bgColor && 'bg-white'} rounded-full text-white px-3 py-3 text-sm md:py-3`} style={{ backgroundColor: bgColor }}>
         {value}
      </button>
   )
}

export default Button;