import { createTheme, MantineProvider } from "@mantine/core";
import Header from "./Header";

const theme = createTheme({
    /** Put your mantine theme override here */
  });

const Home = () => {
return (<div><MantineProvider theme={theme}>
    <Header></Header>
    </MantineProvider>
    </div>)
}

export default Home;