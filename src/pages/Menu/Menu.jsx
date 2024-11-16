import Grid from "../../component/GridItem";
import { ListofItem } from "../../api/menu";
import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Menu() {
  const [menuItem, setMenuItem] = useState([]);
  const [restaurantNameList, setRestaurantNameList] = useState([]);
  const [name, setName] = useState("");

  async function getAllMenuItems() {
    const response = await ListofItem();
    const menuItemList = await response.menu;
    // console.log(menuItemList);

    //get the name for
    const restaurantList = getTheName(menuItemList);

    //for list to get

    menuItem.map((curr, index) => {
      return <div key={curr.id}>{checkRestaraunt(curr)}</div>;
    });

    setRestaurantNameList(restaurantList);
    setMenuItem(menuItemList);
  }

  function getTheName(menuItemList) {
    const restaurantList = [];
    menuItemList.map((curr, index) => {
      const nameList = curr.restaurant.name;
      // console.log(nameList);
      restaurantList.push(nameList);
    });

    return restaurantList;
  }

  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    getAllMenuItems();
  }, []);

  return (
    <>
      <section className="menuContainer">
        {/* {console.log(restaurantNameList)} */}
        <div className="selectContain">
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              className="inputSelectfield"
            >
              Name
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={name}
              label="Name"
              onChange={handleChange}
            >
              {restaurantNameList.map((curr, index) => {
                return (
                  <MenuItem key={index} value={curr}>
                    {curr}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="restaurant-contain">
          <Grid name={name} menuItem={menuItem} />
        </div>
      </section>
    </>
  );
}

export default Menu;
