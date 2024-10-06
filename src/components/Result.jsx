import thankYou from '../assets/images/illustration-thank-you.svg';
const Result = ({result}) => {
  return (
    <div className='flex flex-col justify-evenly items-center bg-custom-radial px-7 py-12 rounded-3xl '>
        <img src={thankYou} alt="Logo" className='object-contain'/>
        <div className=' px-5 py-2 mt-9 mb-10  bg-DarkBlue rounded-3xl'>
            <p className=' text-Orange'>You selected {result} out of 5</p>
        </div>
        <p className='text-White text-3xl font-semibold'>Thank You!</p>
        <p className='text-LightGrey text-center leading-7 mt-4'>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
    </div>
  )
}

export default Result