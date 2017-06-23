import React from 'react';

import PrivateHeader from './PrivateHeader';


export default (props) => {

    var title = "Dashboard";
    return (
      <div>
        <PrivateHeader title = {title}/>
        <div className = "page-content">
          Dashboard Page Content
        </div>
      </div>
    );
}
