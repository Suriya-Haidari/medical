"use client";
import Posts from "./Posts";
import { Suspense } from "react";
import AuthRoute from "../auth/auth";

export default function Emergency() {
  return (
    <AuthRoute>
      <Suspense fallback="Loading posts...">
        <Posts />
      </Suspense>
    </AuthRoute>
  );
}
