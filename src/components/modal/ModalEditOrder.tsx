import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";
import { Order } from "src/app/(PetCareLayout)/(authenticated)/my-orders/page";

interface ModalEditOrderProps {
  open: boolean;
  order: Order | null;
  onClose: () => void;
  onSave: (order: Order) => void;
  pets: string[];
}

export function ModalEditOrder({
  open,
  order,
  onClose,
  onSave,
  pets,
}: ModalEditOrderProps) {
  const [editOrder, setEditOrder] = React.useState<Order | null>(order);

  React.useEffect(() => {
    setEditOrder(order);
  }, [order]);

  const handleSave = () => {
    if (editOrder) {
      onSave(editOrder);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Order</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Pet"
          select
          fullWidth
          value={editOrder?.petName || ""}
          onChange={(e) =>
            setEditOrder({ ...editOrder!, petName: e.target.value })
          }
        >
          {pets.map((pet) => (
            <MenuItem key={pet} value={pet}>
              {pet}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="dense"
          label="DateTime"
          type="datetime-local"
          fullWidth
          value={editOrder?.date || ""}
          onChange={(e) =>
            setEditOrder({ ...editOrder!, date: e.target.value })
          }
        />
        <TextField
          margin="dense"
          label="Description"
          type="text"
          fullWidth
          value={editOrder?.description || ""}
          onChange={(e) =>
            setEditOrder({ ...editOrder!, description: e.target.value })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalEditOrder;
