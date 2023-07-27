import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { auth } from "@/firebase/firebase.auth";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    router.push("/");
  };

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/" })
            }
          />
          <GithubOutlined
            onClick={() =>
              signIn("github", { callbackUrl: "http://localhost:3000/" })
            }
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>

          <input {...register("email", { required: true })} type="email" />
          {errors.email && <span>Email is required</span>}

          <label htmlFor="">Your Password</label>

          <div>
            <input
              {...register("password", { required: true })}
              type="password"
            />
            {errors.password && <span>Password is required</span>}
          </div>
          <div>
            <button type="submit">Login</button>
            <Link href="/signup">
              <button>signUp</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
