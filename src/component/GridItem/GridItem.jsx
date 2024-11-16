import Grid from "@mui/material/Grid2";
import Item from "../Item/Item";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

function GridItem({ name, menuItem }) {
  const [items, setItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]); // state to manage checked items

  function getAllItemsFromMenu(name) {
    const getItemList = menuItem
      .filter((curr) => curr.restaurant.name === name)
      .map((curr) => curr.item);

    setItems(getItemList[0] || []); // Update items based on the menu
  }

  const handleToggle = (value) => {
    const currentIndex = checkedItems.indexOf(value);
    const newChecked = [...checkedItems];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setCheckedItems(newChecked);
  };

  useEffect(() => {
    getAllItemsFromMenu(name);
  }, [name, menuItem]);

  return (
    <div className="gridItem">
      {console.log(checkedItems)}
      <h1 className="restaurant-name">Welcome our restaurant, {name}</h1>
      <Box sx={{ flexGrow: 2 }} className="itemgridcontainer">
        <Grid
          container
          spacing={2}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {items.length > 0 ? (
            items.map((curr) => (
              <Grid key={curr.id} size={3}>
                <Item
                  item={curr}
                  checkedItems={checkedItems}
                  onToggle={handleToggle}
                />
              </Grid>
            ))
          ) : (
            <Typography gutterBottom variant="h3" component="div">
              "No food item please select restaurant"
            </Typography>
          )}
        </Grid>
      </Box>
    </div>
  );
}

export default GridItem;
