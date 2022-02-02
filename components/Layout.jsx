import Nav from "./Nav";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  const shouldDisplayLinks = router.pathname === "/";

  return (
    <div>
      <Nav shouldDisplayLinks={shouldDisplayLinks} />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
