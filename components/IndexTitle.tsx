import TypeAnimation from 'react-type-animation';

const IndexTitle = () => {
  return (
    <TypeAnimation
      cursor={false}
      sequence={[`We${<span>reflect</span>}profits back to you`, 1000, '']}
      wrapper="h2"
    />
  );
};

export default IndexTitle