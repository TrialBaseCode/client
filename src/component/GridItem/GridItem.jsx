import Grid from "@mui/material/Grid2";
import Item from "../Item/Item";
import Box from "@mui/material/Box";

function GridItem({ name }) {
  return (
    <>
      <div className="gridItem">
        <h1 className="restaurant-name"> Welcome our restaurant , {name}</h1>
        <Box sx={{ flexGrow: 2 }} className="itemgridcontainer">
          <Grid
            container
            spacing={2}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid size={3}>
              <Item />
            </Grid>
            <Grid size={3}>
              <Item />
            </Grid>
            <Grid size={3}>
              <Item />
            </Grid>
            <Grid size={3}>
              <Item />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default GridItem;
