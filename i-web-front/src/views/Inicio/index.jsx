import { Button, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { useAuthStore, useUserData, urlServerStore } from "../../state/useState";

const Inicio =() =>{

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const {setToken} = useAuthStore();
    const {userId, setUserId} = useUserData();
    const {localhost, login} = urlServerStore();

    const handleClickShowPassword = () => setShowPassword((show) => !show); 

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post(`${localhost}${login}`,{
                username:userId,
                password:password
            });
            //guarda el token
            setToken(window.localStorage.getItem('accessToken'));
            // Manejar la respuesta del backend aquí
            console.log('Inicio de sesión exitoso:', response.data);
        } catch(error){
            // Manejar errores de inicio de sesión aquí
            console.error('Error de inicio de sesión:', error.response.data);
        }
    };

    return(
        <Grid container 
            justifyContent={"center"}
            alignContent={"center"}
            sx={{
               // border:4,
                height:"100vh",
                boxSizing:"border-box",
                overflow: 'auto',
            }}
        >
            <Grid item xs={11} xm={10} sm={5} md={4} 
                component={"form"}
                noValidate
                autoComplete="off" 
                onSubmit={handleSubmit}
                sx={{
                    border:1,
                    maxHeight:{xs:"100%", xm:"100%", sm:"100%", md:"100%"},
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    gap:2,
                    boxSizing:"border-box",
                    py:5,
                }}
            >
                <Typography variant="h4" 
                    textAlign={"center"} 
                    fontWeight={"bold"}
                    margin={1}
                >
                    Iniciar Sesion
                </Typography>
                <TextField
                    required
                    id="username-input"
                    label="Usuario"
                    type="text"
                    variant="outlined"
                    size="small"
                    sx={{width:"90%"}}
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">    
                        <IconButton                            
                            aria-label="toggle password visibility"                    
                            edge="end"
                            disableRipple
                            disableTouchRipple
                        >
                            <AccountCircleIcon  />
                        </IconButton>
                        </InputAdornment>
                    ),
                    }}                    
                />
                <TextField
                    required
                    id="password-input"
                    label="Contraseña"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    size="small"
                    sx={{width:"90%"}}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                        </InputAdornment>
                    ),
                    }}                    
                />   
                <Button variant="contained" 
                    type="submit" size="small"
                    sx={{width:"auto", mx:"auto", paddingX: 3}}
                >
                    <Typography
                    variant="h6"
                    textAlign= "center"
                    >
                    Iniciar
                    </Typography>
                </Button>     
                <Typography
                variant="body2"
                textAlign= "center"
                fontWeight= "regular"
                >
                    Restablecer contraseña
                </Typography>
            </Grid> 
        </Grid> 
    );
}

export default Inicio;