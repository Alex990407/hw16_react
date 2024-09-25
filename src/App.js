import "./App.css";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  // Функции для открытия и закрытия диалогового окна
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Верхняя панель навигации (AppBar) */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Material UI App
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>
            Open Dialog
          </Button>
        </Toolbar>
      </AppBar>

      {/* Основной контейнер (Container) */}
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My Material UI App!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Show Dialog
        </Button>
      </Container>

      {/* Диалоговое окно (Dialog) */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Welcome!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a dialog window created with Material UI components. You can
            add any content you like here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
