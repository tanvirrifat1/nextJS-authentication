import { Avatar, Image } from "antd";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { UserOutlined } from "@ant-design/icons";
const HomePage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>
      <h2 style={{ textAlign: "center", marginTop: "10%" }}>
        Logged in user: {session?.user?.name}
      </h2>
      <div style={{ textAlign: "center", marginTop: "5%" }}>
        <Image width={200} src={session?.user?.image} />
      </div>
    </div>
  );
};

export default HomePage;
