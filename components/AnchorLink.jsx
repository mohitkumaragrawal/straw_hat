import React from 'react';
import Link from 'next/link';

import NavBarItem from './NavBarItem';

const AnchorLink = ({ children, href, className, icon, tabIndex, testId }) => {
  return (
    <Link href={href}>
      <NavBarItem href={href} className={className} icon={icon} tabIndex={tabIndex} testId={testId}>
        {children}
      </NavBarItem>
    </Link>
  );
};

export default AnchorLink;
