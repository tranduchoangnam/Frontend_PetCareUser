import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { use, useEffect, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

export default function FileInput({
  onChange,
}: {
  onChange: (base64String: string) => void;
}) {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFileName(file.name);
    setFile(file);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFileName(file.name);
    setFile(file);
  };
  const handleClearFile = () => {
    setSelectedFileName("");
    setFile(null);
  };
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          const base64String = reader.result;
          onChange(base64String);
        }
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  return (
    <>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div
        style={{
          border: "2px dashed #ccc",
          borderRadius: "5px",
          padding: "20px",
          textAlign: "center",
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={handleDrop}
      >
        <Box
          sx={{
            py: 3,
            display: "grid",
            alignItems: "center",
            justifyItems: "center",
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            Add Pet Image
          </Button>
          <Typography>Or drag and drop files</Typography>
          {selectedFileName && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>{selectedFileName}</Typography>
              <IconButton onClick={handleClearFile}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          )}
          <div>
            {file && (
              <img
                style={{
                  maxWidth: "250px",
                  height: "auto",
                }}
                src={URL.createObjectURL(file)}
                alt="Selected Image"
              />
            )}
          </div>
        </Box>
      </div>
    </>
  );
}
