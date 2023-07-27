import { Avatar, Image } from "antd";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { UserOutlined } from "@ant-design/icons";
import { auth } from "@/firebase/firebase.auth";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
const HomePage = () => {
  const { data: session } = useSession();
  const [user] = useAuthState(auth);

  // const logout = () => {
  //   signOut(auth);
  // };

  const [signOut, loading, error] = useSignOut(auth);

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "5%" }}>
        Welcome To Next Auth Home Page
      </h1>
      <h2 style={{ textAlign: "center", marginTop: "5%" }}>
        Logged in user: {session?.user?.name}
      </h2>
      <h2 style={{ textAlign: "center", marginTop: "5%" }}>
        Logged in user: {user?.email}
      </h2>
      <div style={{ textAlign: "center", marginTop: "5%" }}>
        <Image width={200} src={session?.user?.image} />
      </div>
      <div>
        <button
          onClick={async () => {
            const success = await signOut();
            if (success) {
              alert("You are sign out");
            }
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default HomePage;
