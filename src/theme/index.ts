import {  createTheme } from '@mui/material/styles';
import {  responsiveFontSizes } from "@mui/material/styles";


let theme = createTheme({

    palette:{
        primary : {
            main: '#ffcc00'
        },
        secondary : {
            main : '#130303'
        },
        background : {
            default : '#1B1B1E'  
        },

    },
    typography: {
        // fontFamily: ["Inter", "sans-serif"].join(","),
        h3: {
          color: '#ffcc00',
          // color:'#ffcc00' 
        },
    
        h2: {
          color: "#f5f5f5",
        },
        h4: {
            color: "#ffcc00",
            // color: '#f5f5f5',
          fontWeight: 'bold',
          },
        h5: {
          color: "#ffcc00",
          // color: '#f5f5f5',
          fontWeight: 'bold',
        },
        h6: {
          color: '#f5f5f5'
        },
      },
})

theme = responsiveFontSizes(theme);
// export default theme;
export default theme