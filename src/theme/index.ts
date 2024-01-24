import {  createTheme } from '@mui/material/styles';
import {  responsiveFontSizes } from "@mui/material/styles";


let theme = createTheme({
    palette:{
        // background: {
        //     default: "#050517",
        //   },
        primary : {
            main: '#ffcc00'
        },
        secondary : {
            main : '#08203a'
        },
        background : {
            default : '#f7f7f7'
        }

    },
    typography: {
        // fontFamily: ["Inter", "sans-serif"].join(","),
        h3: {
          color:'#ffcc00' 
        },
    
        h2: {
          color: "#f5f5f5",
        },
        h4: {
            //color: "#ffcc00",
            color: '#f5f5f5',
          fontWeight: 'bold',
          },
        h5: {
          color: '#f5f5f5',
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