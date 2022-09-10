import { Link } from "react-router-dom";

import { PATH } from "helpers/constant";

import { PageWrapper } from "components/Layout";

export const HomePage = () => {
  return (
    <PageWrapper>
      <h1>Home Page</h1>
      <Link to={PATH.aboutUs}>About us</Link>
    </PageWrapper>
  );
};
