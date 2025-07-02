import React from 'react';
import Link from 'next/link';
import { titleStyle } from './CourseDetail';

interface DeliverySite {
  type: string;
  address: string;
}

interface MoreInfoLink {
  url: string;
  text: string;
}

interface CourseDeliveryInfoProps {
  deliveryMode: string;
  deliverySites: DeliverySite[];
  moreInfoLink?: MoreInfoLink;
}

function CourseDeliveryInfo({
  deliveryMode,
  deliverySites,
  moreInfoLink,
}: CourseDeliveryInfoProps) {
  return (
    <div>
      <div className="my-10">
        <h3 className={titleStyle}>Delivery mode</h3>
        <span>{deliveryMode}</span>
      </div>
      <div className="my-10">
        <h3 className={titleStyle}>Delivery site:</h3>
        {deliverySites.map((site, index) => (
          <div key={index}>
            <p className={titleStyle}>• {site.type}</p>
            <span>{site.address}</span>
          </div>
        ))}
      </div>
      {moreInfoLink && (
        <div>
          <p>
            * More information is available via the{' '}
            <Link href={moreInfoLink.url} target="_blank" className="underline">
              {moreInfoLink.text}
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default CourseDeliveryInfo;
