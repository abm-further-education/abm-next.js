import React from 'react';

function page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  return <div></div>;
}

export default page;
