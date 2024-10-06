import star from '../assets/images/icon-star.svg';
import ButtonRating from './ButtonRating';

const Rating = ({onValueButton,submitValue,selectedValue}) => {
  return (
    <div className='px-6 py-8 flex flex-col justify-between items-start bg-custom-radial rounded-3xl'>
      <div className='relative w-12 h-12 flex items-center justify-center bg-DarkBlue rounded-full'>
        <img src={star} alt="Logo" />
      </div>
      <p className='text-White font-semibold text-3xl mt-11'>How did we do?</p>
      <p className='text-LightGrey mt-3 mb-7 text-sm md:text-base'>Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!</p>
      <ButtonRating onValueButton={onValueButton} submitValue={submitValue} selectedValue={selectedValue}/>
    </div>
  )
}

export default Rating