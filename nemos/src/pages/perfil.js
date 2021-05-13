import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../molecules";
import { DefaultLayout } from "../layouts";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <DefaultLayout className="w-11/12 mx-auto my-5">
          <h1 className="text-4xl font-semibold">Bienvenido, {user.given_name}</h1>
          <section className="mt-5">
            <h2 className="text-xl">Hoy tienes 150 flash cards que revisar.</h2>
          </section>
      </DefaultLayout>
    )
  );
};

export default Profile;