import { useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";

const Home = () => {
  const [values, setValues] = useState({
    name: "",
    apellido: "",
    email: "",
    direccion: "",
    celular: "",
    fnacimiento: "",
    contraseña: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
      
      
    });
  };

  const handleSendData = (event) => {
    //para que laweb no se revargue debemos usar preventDefault()
    event.preventDefault();
    console.log(values);
  };

  return (
    <Container>
      <form action="" method="post" onSubmit={handleSendData}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Home - developer</h1>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Ingrese su nombre"
              name="name"
              fullWidth
              value={values.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Ingrese su apellido"
              name="apellido"
              fullWidth
              value={values.apellido}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Ingrese su correo"
              name="email"
              fullWidth
              value={values.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Ingrese su direccion"
              name="direccion"
              fullWidth
              value={values.direccion}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Ingrese su celular"
              name="celular"
              fullWidth
              value={values.celular}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Ingrese su fecha de nacimiento"
              name="fnacimiento"
              fullWidth
              value={values.fnacimiento}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Ingrese su contraseña"
              name="contraseña"
              fullWidth
              value={values.contraseña}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" color="primary" variant="contained">
              Home button
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Home;
