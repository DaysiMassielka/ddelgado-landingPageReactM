import { Container, Button, Box, Typography, Grid } from '@mui/material';
import { BasicCard } from "./Card";

export const Content = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "grey", mt: 2, p: 2 }}>
        <Typography variant="h5" color="white" gutterBottom>
          A Warm Welcome
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{ backgroundColor: '#1976d2', color: '#fff' }}
        >
          Call Action
        </Button>
      </Box>

      <Grid
        container spacing={2} 
        sx={{ mt: 2 }}
        justifyContent="center"
      >
        <Grid item xs={12} md={3}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <BasicCard />
        </Grid>
      </Grid>
    </Box>
  );
};