import Lottie from 'lottie-react';
import AnimationLoading from '../../../public/animations/poke-loading2.json';

export const PokeLoading = () => {
  return (
    <Lottie animationData={AnimationLoading} loop={true} className="w-100" />
  );
};
