import { Link } from "react-router-dom";

import { PATH } from "helpers/constant";

import { PageWrapper } from "components/Layout";

export const AboutUsPage = () => {
  return (
    <PageWrapper>
      <h1>AboutUsPage</h1>
      <Link to={PATH.home}>Home Page</Link>
    </PageWrapper>
  );
};
