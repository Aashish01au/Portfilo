import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'coder',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'web developer',
        1500,
        'designer',
        1500,
        'programmer',
        1500
      ]}
      speed={50}
      className='text-[2rem] md:text-[3rem] text-[#55e6d0] font-bold uppercase'
      repeat={Infinity}
    />
  );
};

export default TextEffect;