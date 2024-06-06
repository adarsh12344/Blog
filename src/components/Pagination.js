// Pagination.js
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        {page > 1 && (
          <Button
            variant="contained"
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </Button>
        )}

        {page < totalPages && (
          <Button
            variant="contained"
            onClick={() => handlePageChange(page + 1)}
            sx={{ marginLeft: "8px" }}
          >
            Next
          </Button>
        )}
      </div>

      <Typography variant="body1">
        Page {page} of {totalPages}
      </Typography>
    </Box>
  );
}
