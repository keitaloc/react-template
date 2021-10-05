import { PageWrapper } from "components/Layout";
import { PATH } from "helpers/constant";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <PageWrapper>
      <h1>Home Page</h1>
      <Link to={PATH.aboutUs}>About us</Link>
    </PageWrapper>
  );
};
