import Grid from "@mui/material/Grid2";
import Item from "../Item/Item";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

function GridItem({ name, menuItem }) {
  const [item, setItem] = useState([]);

  function getAllItemsFromMenu(name) {
    const getItemList = menuItem
      .filter((curr) => curr.restaurant.name === name)
      .map((curr) => curr.item);

    const getItemFromName = getItemList[0];
    getItemFromName != null ? getItemFromName : null;
    // console.log(getItemFromName);

    setItem(getItemFromName);
  }

  useEffect(() => {
    getAllItemsFromMenu(name);
  }, [name, menuItem]);

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
            {item != null ? (
              item.map((curr, index) => {
                return (
                  <Grid key={curr.id} size={3}>
                    <Item item={curr} />
                  </Grid>
                );
              })
            ) : (
              <Typography gutterBottom variant="h3" component="div">
                "No food item please select restaurant"
              </Typography>
            )}
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default GridItem;
