import Head from "next/head";
import React from "react";
import styles from "@/styles/Login.module.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase.auth";
import { useForm } from "react-hook-form";

const signup = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>SignUp</h3>
      </div>
      <hr />
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default signup;
