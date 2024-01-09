import { Fab, IconButton, Snackbar, Tooltip } from "@mui/material";
import { Add as AddIcon, Close } from "@mui/icons-material";
import { useState } from "react";
import AddModal from "./AddModal";

export default function Add() {
  const [open, setOpen] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);

  const handleClick = () => {
    setOpenNotif(true);
    setOpen(false);
  };
  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenNotif(false);
  };
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: "20px" },
        }}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <AddModal open={open} handleClick={handleClick} setOpen={setOpen} />
      <Snackbar
        open={openNotif}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Posted"
        action={action}
      />
    </>
  );
}
