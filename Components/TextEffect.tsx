import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Coder',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Front-End Developer',
        1500,
        'Java Software Developer',
        1500,
        'Designer',
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