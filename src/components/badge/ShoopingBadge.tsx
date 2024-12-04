import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const ShoopingBadge = () => {
  return (
    <Badge badgeContent={4} color="success">
        <ShoppingCartIcon />
    </Badge>
  )
}
