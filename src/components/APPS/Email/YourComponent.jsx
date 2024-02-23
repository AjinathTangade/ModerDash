import React from 'react';

function YourComponent({ emailLinks }) {
  // Chunk the emailLinks array into arrays of different sizes
  const chunkedLinks = [
    { heading: 'First Group', size: 4 },
    { heading: 'Second Group', size: 2 },
    { heading: 'Third Group', size: 3 }
  ];

  return (
    <div>
      {/* Map over each chunk of links */}
      {chunkedLinks.map((chunk, index) => (
        <div key={index}>
          <h2>{chunk.label}</h2>
          {/* Map over each link in the chunk */}
          {emailLinks.slice(0, chunk.size).map((link, linkIndex) => (
            <a href={link.href} key={linkIndex}>{link.label}</a>
          ))}
          {/* Remove the processed links from the emailLinks array */}
          {emailLinks.splice(0, chunk.size)}
        </div>
      ))}
    </div>
  );
}

export default YourComponent;
