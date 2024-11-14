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
  const [menu, setMenu] = useState([]);

  async function getAllMenuItems() {
    const response = await ListofItem();
    const restaurantList = [];
    const menuItemList = await response.menu;
    // console.log(menuItemList);

    menuItemList.map((curr, index) => {
      const nameList = curr.restaurant.name;
      // console.log(nameList);
      restaurantList.push(nameList);
    });

    //for list to get

    menuItem.map((curr, index) => {
      return <div key={curr.id}>{checkRestaraunt(curr)}</div>;
    });

    setRestaurantNameList(restaurantList);

    setMenuItem(menuItemList);
  }

  const handleChange = (event) => {
    setName(event.target.value);
  };

  function checkRestaraunt(curr) {
    // console.log(curr.restaurant.name);
    if (name === curr.restaurant.name) {
      console.log(name);
    }
  }

  useEffect(() => {
    getAllMenuItems();
  }, [0]);

  return (
    <>
      <section className="menuContainer">
        {/* {console.log(restaurantNameList)} */}
        <div className="selectContain">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Name</InputLabel>
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
          <Grid name={name} />
        </div>
      </section>
    </>
  );
}

export default Menu;
