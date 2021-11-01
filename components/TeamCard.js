import PropTypes from 'prop-types';
import Image from 'next/image'

const TeamCard = ({src, name, position, subposition}) => {
  return (
    <div className="team-card">
        <Image src={src} alt={name} />
        <div className="ml-2">
            <p className="text-bold">{ name }</p>
            <p className="mb-0">{ position }</p>
            <p className="mt-0">{ subposition }</p>
        </div>
    </div>
  );
};

TeamCard.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    subposition: PropTypes.string,
  };

export default TeamCard;
