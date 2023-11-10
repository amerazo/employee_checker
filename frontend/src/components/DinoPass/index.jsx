import React, { useState } from 'react';

function DinoPass() {
  const [generatedPassword, setGeneratedPassword] = useState('');
  
  const fetchPassword = async () => {
      const response = await fetch('http://www.dinopass.com/password/strong');
      const password = await response.text();
      setGeneratedPassword(password);
  };

  return (
    <div>
      <h2>CLICK HERE TO CREATE AUTO GENERATE A STRONG PASSWORD FOR YOU</h2>
      <button onClick={fetchPassword}>Generate Password</button>
      {generatedPassword && (
        <div>
          <p>Generated Password: {generatedPassword}</p>
        </div>
      )}
    </div>
  );
}

export default DinoPass;
