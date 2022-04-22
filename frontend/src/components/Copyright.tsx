import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const Copyright = () => {

  return (
    <Box pb="2em" pt="10em">
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <Typography paragraph color="textSecondary">
            Copyright 2022 Ville Manninen. Licensed <Link href="https://opensource.org/licenses/MIT">MIT</Link>.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Copyright