import React from 'react';

import LinksList from './linksList';
import PrivateHeader from './privateHeader';
import AddLink from './addLink';
import LinksListFilter from './linksListFilter';

export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <div className="page-content">
        <LinksListFilter />
        <AddLink />
        <LinksList />
      </div>
    </div>
  );
}