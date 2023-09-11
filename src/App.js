import { useEffect, useState } from 'react';
import { projectFirestore } from './firebase/config.js'


function App() {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {

    setIsPending(true)
    projectFirestore.collection("users").get().then((snapshot) => {
      if (snapshot.empty) {
        setError("No users found");
        setIsPending(false);
      } else {
          let results = [];
          snapshot.docs.forEach(doc => {
            results.push({ id:doc.id , ...doc.data() })
          })
          setData(results);
          setIsPending(false);
      }
    }).catch(err => {
      setError(err.message);
      setIsPending(false);
    })

  }, []);

  return (
    <div className="App">
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading users...</p>}
      {data && data.map(userData => {
        console.log(userData);
        return(
          <div className='user' key={userData.id}>
            <p>Full Name: {userData.firstName} {userData.lastName}</p>
            <p>Age: {userData.age}</p>
            <p>Email: {userData.email}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
