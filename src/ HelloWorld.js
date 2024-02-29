import React, { useEffect, useState } from 'react';

const HelloWorld = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch('http://localhost:8080');
      console.log(response);
      const data = await response.json();
      setClients(data);
    };

    fetchClients();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HelloWorld;
