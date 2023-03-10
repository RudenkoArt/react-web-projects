import React from 'react';

const Photo = ({
  alt_description,
  likes,
  user: {
    name,
    profile_image: { medium },
    portfolio_url,
  },
  urls: { regular },
}) => {
  return (
    <article className='photo'>
      <img src={regular} alt={alt_description} />
      <div className='photo-info'>
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className='user-img' />
        </a>
      </div>
    </article>
  );
};

export default Photo;
