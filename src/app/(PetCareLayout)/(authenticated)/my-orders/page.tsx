"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Button,
  Typography,
  Collapse,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PageContainer from "src/app/components/container/PageContainer";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PendingIcon from "@mui/icons-material/Pending";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import theme from "src/utils/theme";
import ModalEditOrder from "src/components/modal/ModalEditOrder";
import axios from "axios";

export interface Order {
  id: string;
  petName: string;
  service: string;
  date: string;
  status: "Pending" | "Approved" | "Rejected";
  description: string;
}

const initialOrders: Order[] = [
  {
    id: "1",
    petName: "Alexander Nam",
    service: "Grooming",
    date: "2021-12-12 10:00 AM",
    status: "Pending",
    description: "Grooming for Nam",
  },
  {
    id: "2",
    petName: "Cat",
    service: "Appointment",
    date: "2021-12-12 11:00 AM",
    status: "Approved",
    description: "Appointment for Cat",
  },
  {
    id: "3",
    petName: "Dog",
    service: "HealthCare",
    date: "2021-12-12 12:00 PM",
    status: "Rejected",
    description: "HealthCare for Dog",
  },
];

const petNames = ["Alexander Nam", "Cat", "Dog"];

function Row(props: {
  row: any;
  onEdit: (order: Order) => void;
  onDelete: (id: string) => void;
}) {
  const { row, onEdit, onDelete } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell sx={{ width: "5%" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          sx={{ width: "20%", textAlign: "center" }}
        >
          {row.petName}
        </TableCell>
        <TableCell sx={{ width: "20%", textAlign: "center" }}>
          {row.serviceName}
        </TableCell>
        <TableCell sx={{ width: "20%", textAlign: "center" }}>
          {row.date}
        </TableCell>
        <TableCell sx={{ width: "20%", textAlign: "center" }}>
          {row.status === "pending" && (
            <Box
              sx={{
                color: theme.palette.warning.main,
              }}
            >
              <Tooltip title="Pending">
                <PendingIcon />
              </Tooltip>
            </Box>
          )}
          {row.status === "approved" && (
            <Box
              sx={{
                color: theme.palette.success.main,
              }}
            >
              <Tooltip title="Approved">
                <DoneIcon />
              </Tooltip>
            </Box>
          )}
          {row.status === "rejected" && (
            <Box
              sx={{
                color: theme.palette.error.main,
              }}
            >
              <Tooltip title="Rejected">
                <CloseIcon />
              </Tooltip>
            </Box>
          )}
        </TableCell>
        <TableCell sx={{ width: "15%", textAlign: "center" }}>
          <IconButton aria-label="edit" onClick={() => onEdit(row)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => onDelete(row.id)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography>{row.description}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function MyOrders() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [editOrder, setEditOrder] = useState<Order | null>(null);

  const handleEdit = (order: Order) => {
    setEditOrder(order);
  };

  const handleDelete = (id: string) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleClose = () => {
    setEditOrder(null);
  };

  const handleSave = (updatedOrder: Order) => {
    setOrders(
      orders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
    setEditOrder(null);
  };
  const fetchServices = async () => {
    try {
      const response = await axios.get("/api/service/all");
      if (response.data.status === "SUCCESS") {
        setOrders(response.data.data);
      } else setOrders([]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <PageContainer>
      <Box sx={{ mt: 4, px: 10 }}>
        <Box
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton onClick={() => router.back()}>
            <ArrowBackIcon />
          </IconButton>
          <Button
            variant="contained"
            onClick={() => router.push("/request-service")}
          >
            Request Service
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell
                  sx={{
                    width: "20%",
                    textAlign: "center",
                    color: "primary.main",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                  }}
                >
                  Pet
                </TableCell>
                <TableCell
                  sx={{
                    width: "20%",
                    textAlign: "center",
                    color: "primary.main",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                  }}
                >
                  Service
                </TableCell>
                <TableCell
                  sx={{
                    width: "20%",
                    textAlign: "center",
                    color: "primary.main",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                  }}
                >
                  Date&Time
                </TableCell>
                <TableCell
                  sx={{
                    width: "20%",
                    textAlign: "center",
                    color: "primary.main",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    width: "20%",
                    textAlign: "center",
                    color: "primary.main",
                    fontWeight: 600,
                    fontSize: "1.2rem",
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <Row
                  key={row.id}
                  row={row}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </TableBody>
          </Table>
          <ModalEditOrder
            open={editOrder !== null}
            order={editOrder}
            onClose={handleClose}
            onSave={handleSave}
            pets={petNames} // Truyền danh sách các thú cưng vào modal
          />
        </TableContainer>
      </Box>
    </PageContainer>
  );
}
