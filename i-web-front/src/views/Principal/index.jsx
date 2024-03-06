import { AppBar, BottomNavigationAction, Box, Button, Grid, Toolbar, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import Logo from '../../assets/fpuna2.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import theme from "../../components/Theme";

const Principal =() => {
    const pages = [
        {
            nombre:"Inscripcion",
            icono:<SchoolIcon/>
        }, 
        {
            nombre:"Comprobante",
            icono:<DescriptionIcon/>
        }, 
        {
            nombre:"Guia",
            icono:<PersonalVideoIcon/>
        }, 
    ];
    const tituloBarra = <img src={Logo} alt="Logo" style={{ width: 70, height: 'auto', display:'flex', flexShrink: 2 , }} />;
    const pantallaGrande = useMediaQuery(theme.breakpoints.up('lg'));
    const pantallaMediana = useMediaQuery(theme.breakpoints.up("sm"));
    const pantallaChica = useMediaQuery(theme.breakpoints.down("sm"));

    return(
        <Grid container direction={"column"} 
            sx={{
                //border:4,
                height:"100vh",
                boxSizing:"border-box",
                overflow: 'auto',
            }}
        >
            <Grid item xs={1}>
                <AppBar component={"nav"}>
                    <Toolbar  variant="dense" disableGutters>
                        <Box
                            sx={{
                                //border:4, 
                                display:"flex",
                                flexDirection:"row",   
                                justifyContent:"space-between",
                                alignContent:"center",
                                width:"100%",                       
                            }}
                        >  
                            {pantallaMediana?
                                <Box sx={{width:"42%"}}>                  
                                    {pages.map((item) =>(
                                    <>
                                        {pantallaGrande ?
                                            (<Button key={item.nombre} variant="outliner" startIcon={item.icono} size="small">
                                                {item.nombre}
                                            </Button>)
                                        :         
                                            (<BottomNavigationAction  showLabel sx={{ color: 'white'}} 
                                            label={item.nombre}  icon={item.icono} size="small" />)                                                                         
                                        }                        
                                    </>
                                    ))}
                                </Box> 
                            :null}
                            <Box sx={{width:pantallaChica?"auto":"16%", display:"flex", justifyContent:"center" }}>
                                <Button key={"imagen"} variant="outliner" size="small" disabled ={!pantallaChica}>
                                    {pantallaChica? <MenuIcon  sx={{ color: "primary.contrastText"}}/> :null}
                                    {tituloBarra}
                                </Button>  
                            </Box> 
                            <Box sx={{width:pantallaChica? "auto":"42%",display:"flex", justifyContent:"flex-end" }}>                     
                                <BottomNavigationAction  showLabel size={"small"}
                                    sx={{ color: "primary.contrastText", flex:"none"}} label="Salir"  
                                    icon={<ExitToAppIcon fontSize={pantallaChica?"small":"medium"}/>} 
                                />
                            </Box>                            
                        </Box>    
                    </Toolbar>               
                </AppBar>
            </Grid>
            <Grid item xs={11}>                
            </Grid>            
        </Grid>
    );
};

export default Principal;