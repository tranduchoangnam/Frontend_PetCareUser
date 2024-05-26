import { Container, Box } from "@mui/material";
import Header from "../components/layout/header/Header";
import Sidebar from "../components/layout/sidebar/Sidebar";
import Footer from "../components/layout/footer/page";
import { montserrat } from "src/constants/fonts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "src/auth";
import Layout from "src/app/components/layout/layout";

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  // const [isSidebarOpen, setSidebarOpen] = useState(true);
  // const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  // useEffect(() => {
  //   Aos.init({ duration: 1500 });
  // }, []);
  const session = await auth();
  return (
    <Box
      className="mainwrapper"
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        fontFamily: `${montserrat.style.fontFamily}`,
      }}
    >
      <SessionProvider>
        <Layout session={session}>{children}</Layout>
      </SessionProvider>
    </Box>
  );
}
