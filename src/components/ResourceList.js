import React from 'react';
import useResources from '../hooks/useResources';

const ResourceList = props => {
  const resources = useResources(props.resource);
  
  return (
    <div>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </div>
  );
};

export default ResourceList;
