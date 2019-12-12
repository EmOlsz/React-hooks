import { useEffect, useState } from 'react';
import axios from 'axios';

export default resource => {
  const [ resources, setResources ] = useState([]);
  
  const fetchData = resource => {
    axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(resource => setResources(resource.data));
  };
  
  useEffect(() => {
    fetchData(resource)
  }, [resource]);
  
  return resources;
}
