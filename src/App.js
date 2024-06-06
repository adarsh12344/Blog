// App.js
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    // Fetch the initial Blogposts data
    fetchBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: "Roboto", // Specify the font family
      fontSize: 18, // Base font size (in pixels)
      h1: {
        fontSize: "3rem", // Increase font size for h1
      },
      h2: {
        fontSize: "2.5rem", // Increase font size for h2
      },
      h3: {
        fontSize: "2rem", // Increase font size for h3
      },
      // Add similar customization for other typography variants as needed
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container sx={{ marginTop: "100px" }}>
        <Blogs />
        <Pagination />
      </Container>
    </ThemeProvider>
  );
}
