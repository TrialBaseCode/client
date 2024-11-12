import Grid from "@mui/material/Grid2";
import SubItem from "../SubItem/SubItem";
function Item() {
  return (
    <>
      <div className="cardGrid">
        <h1>Menu</h1>
        <div className="cardGrid">
          <Grid container spacing={2}>
            <Grid size={3}>
              <SubItem />
            </Grid>
            <Grid size={3}>
              <SubItem />
            </Grid>
            <Grid size={3}>
              <SubItem />
            </Grid>
            <Grid size={3}>
              <SubItem />
            </Grid>
            <Grid size={12}>
              <SubItem />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Item;
