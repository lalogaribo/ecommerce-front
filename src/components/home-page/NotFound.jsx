import React from "react";
import { Layout } from "../shared/Layout";

export const NotFound = () => {
  const style = {
    fontWeight: "bold",
    textAlign: "center",
  };
  return (
    <Layout>
      <p style={style}> Page not found</p>
    </Layout>
  );
};
