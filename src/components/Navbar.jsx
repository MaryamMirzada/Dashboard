import { Container, Box, Stack, Typography, Button } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function Navbar() {
  return (
    <div>
      <Container>
        <Stack direction="row" spacing={20} alignItems="center">
          <Box>
            <DashboardIcon />
          </Box>

          <Box>
            <Typography variant="h6" color="blue">
              Student Dashboard
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ alingItmes: "left" }}
          >
            <Button variant="contained">Go Back</Button>
            <Button variant="outlined">Go Back</Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
