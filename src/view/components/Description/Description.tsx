import React, { useState } from 'react';
import * as classes from './description.module.css';

interface DescriptionProps {
  htmlContent: string;
}

function Description({ htmlContent }: DescriptionProps) {
  const [showFullDescription] = useState(true);
  return (
    <div className={classes.wrapperDescription}>
      <div
        className={`${classes.description} ${showFullDescription ? classes.show : classes.hide}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}

export default Description;
