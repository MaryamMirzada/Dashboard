import "./App.css";
import customer1 from "./assets/customer1.png";
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Button,
  Box,
  ImageListItem,
} from "@mui/material";
function App() {
  const datail = {
    name: "Maryam Mirzada",
    email: "marimmirzada@gmail.com",
    role: "Front-end developer",
    img: customer1,
  };
  return (
    <div>
      <Container maxWidth="sm" sx={{ mx: "auto" }}>
        <Card sx={{ textAlign: "center", px: "auto" }}>
          <Typography variant="h4" color="primary">
            Dashboard Profile
          </Typography>
          <Stack direction="row">
            {" "}
            <CardContent>
              <Box
                component="img"
                src={datail.img}
                alt={datail.name}
                sx={{ width: 100, height: 100, borderRadius: "50%" }}
              />

              <Typography variant="h5">{datail.name}</Typography>
              <CardContent>{datail.role}</CardContent>
            </CardContent>
          </Stack>
          <CardContent>{datail.email}</CardContent>
          <Stack sx={{ p: 2 }} direction="row" spacing={{ xs: 1, sm: 2 }}>
            <Button variant="contained">LogIn</Button>
            <Button variant="contained">Signout</Button>
          </Stack>
        </Card>
      </Container>
    </div>
  );
}

export default App;
