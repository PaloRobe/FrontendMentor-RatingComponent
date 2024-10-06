const ButtonRating = ({onValueButton,submitValue,selectedValue}) => {
    const VALUES_RATING = [1,2,3,4,5]
    return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center ">
        {VALUES_RATING.map((value)=>{
            return (
                <button key={value} type="button" className=  {`${selectedValue === value ? 'bg-Orange' : 'bg-DarkBlue'} cursor-pointer w-[3rem] h-[3rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full text-White `}  onClick={()=>{onValueButton(value)}} >{value}</button>
            )
        })}
    </div>
        <button type="submit" className="uppercase text-DarkBlue font-bold w-full bg-Orange p-3 mt-6 md:mt-11 flex justify-center items-center rounded-3xl hover:bg-White hover:text-LightGrey tracking-[0.2rem]" onClick={submitValue}>Submit</button>
    </div>
  )
}

export default ButtonRating