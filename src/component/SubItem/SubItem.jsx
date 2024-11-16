import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";

function SubItem({ item, checkedItems, onToggle }) {
  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {Array.isArray(item.subItems) && item.subItems.length > 0 ? (
        item.subItems.map((value) => {
          const labelId = `checkbox-list-secondary-label-${value.id}`;

          return (
            <ListItem
              key={value.id}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={() => onToggle(value)}
                  color="success"
                  checked={checkedItems.includes(value)}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
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
                  primary={`Name: ${value.name}, Price: ${value.price}rs`}
                />
              </ListItemButton>
            </ListItem>
          );
        })
      ) : (
        <div>No items available</div>
      )}
    </List>
  );
}

export default SubItem;
