import React, { useState } from 'react';
import * as classes from './description.module.css';

interface DescriptionProps {
  htmlContent: string;
}

function Description({ htmlContent }: DescriptionProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div className={classes.wrapperDescription}>
      <div
        className={`${classes.description} ${showFullDescription ? classes.show : classes.hide}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <button
        onClick={toggleDescription}
        className={`${classes.readMoreBtn} ${htmlContent.length < 500 ? classes.btnHide : ''}`}
        type="button">
        {showFullDescription ? 'Read less...' : 'Read more...'}
      </button>
    </div>
  );
}

export default Description;
