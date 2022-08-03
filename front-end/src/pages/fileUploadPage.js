import React from 'react';
import FileUploader from '../components/fileUploader';
import ButtonGroupMain from '../components/dashboard/buttonGroupMain';
import Footer from '../components/footer';
import ResponsiveAppBar from '../components/navbarNew';
import { Grid } from '@mui/material';


// Function for showing information pages on post graduate programme

function FileUploadPage(){

    return(


        <div>
                <div style={{marginBottom: '100px'}}>
                    <ResponsiveAppBar/>
                </div>

                <div>
                    <Grid container spacing={0}>

                        <Grid item xs={3} style={{marginLeft: '25px'}}>
                            <ButtonGroupMain/>
                        </Grid>

                        <Grid item xs={8}>
                            <FileUploader/>
                        </Grid>

                    </Grid>
                </div>

                <div style={{marginTop: '10px'}}>
                    <Footer/>
                </div>
                

            </div>

    )
}

export default FileUploadPage;