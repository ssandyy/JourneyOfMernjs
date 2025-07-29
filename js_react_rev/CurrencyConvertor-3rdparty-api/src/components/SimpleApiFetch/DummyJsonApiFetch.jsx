import { useEffect, useState } from "react";

const DummyJsonApiFetch = () => {
  const [userApi, setUserApi] = useState([]);

  useEffect(() => {
    const FetchdataFromApi = async () => {
      const api_url_response = await fetch('https://dummyjson.com/users');
      const userData = await api_url_response.json();
      setUserApi(userData.users); 
    };
    FetchdataFromApi();
  }, []);

  return (
    <>
      <div>Dummy Json Api Fetch</div>

      <div >
        {userApi.map((user) => (
          <div key={user.id}>
            <p>{`${user.firstName} ${user.lastName} `}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DummyJsonApiFetch;