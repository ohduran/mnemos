import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { gql, useQuery } from '@apollo/client';

const GET_ALL_FLASHCARDS = gql`
  query{
    allFlashCards(deckName: "Nemos"){
      id
      prompt
    }
  }
`


const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState(null);

  const { loading, error, data } = useQuery(GET_ALL_FLASHCARDS, {
    headers: { Bearer: `JWT ${accessToken}` },
  });

  useEffect(() => {
    const getUserMetadata = async () => {
  
      try {
        const token = await getAccessTokenSilently({
          audience: process.env.AUTH0_AUDIENCE,
          scope: "read:decks",
        });
        setAccessToken(token)
        console.log('the token is')
        console.log(accessToken)

      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user]);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        <p>{
          loading? "loading" : 
          data? data.allFlashCards[0].prompt : error.message
          }
        
        </p>

        
      </div>
    )
  );
};

export default Profile;