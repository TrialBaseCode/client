import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";

function SubItem({ item }) {
  const [checked, setChecked] = useState([]);
  const [subItem, setSubItem] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    console.log(newChecked);

    setChecked(newChecked);
  };

  useEffect(() => {
    setSubItem(item.subItems);
  }, [item]);

  return (
    <>
      {/* {console.log(subItem)} */}
      <List
        dense
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {subItem.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;

          return (
            <ListItem
              key={value.id}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.includes(value)}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${value.id}`}
                    src={`/static/images/avatar/${value.image}`}
                  />
                </ListItemAvatar>
                <ListItemText
                  id={labelId}
                  primary={`Name: ${value.name} , Price: ${value.price}rs`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default SubItem;
