import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SubItem from "../SubItem/SubItem";

function Item({ item }) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {item.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {item.itemType}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Ours {item.title} is best {item.itemType} you liked it please see
            various type.
          </Typography>
        </CardContent>
        <SubItem item={item} />
      </Card>
    </>
  );
}

export default Item;
