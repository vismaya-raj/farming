import React from 'react'
import { Box, Button, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import Card from '@mui/material/Card';
import Counter from './Counter';

const ShopCart = () => {
    
	return (
<Card>
    <div style={{display:'flex',justifyContent:"space-between"}}>
    <h3 style={{marginTop:'10px',fontSize:'15px',marginLeft:'25px'}}>Shopping Cart</h3>
    <h3 style={{marginTop:'10px',marginRight:'80px',fontSize:'15px'}}><a href='#' style={{color:'red'}}>Remove all</a></h3>
    </div>
  
<Box sx={{ display: 'flex', flexDirection: 'row' }}>
<CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://wanabeverage.com/wp-content/uploads/2021/09/orange-300.jpg"
        alt="orange juice">

    </CardMedia>
    <Box>
    <CardContent>
        <Typography style={{marginTop:'40px'}}>
            Orange juice
        </Typography>
        <Typography >
            250 ml
        </Typography>
        
        </CardContent>
    </Box>
    <Counter/>
    <Box sx = {{marginLeft:"70px"}}>
    <CardContent>
        <Typography style={{marginTop:'40px'}}>
        ₹80
        </Typography>
        <Typography>
          <a href='#'>Save For Later</a>
         
        </Typography>
        <Typography>
        <a href='#'>Remove</a>
        </Typography>
        </CardContent>
    </Box>
    
     
        </Box>
       
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
<CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://5.imimg.com/data5/SELLER/Default/2021/7/TI/MI/KV/129174707/pineapple-3-500x500.jpg"
        alt="orange juice">

    </CardMedia>
    <Box>
    <CardContent>
        <Typography style={{marginTop:'40px'}}>
           Pineapple juice
        </Typography>
        <Typography>
            250ml
        </Typography>
        </CardContent>
    </Box>
    <Counter/>
    <Box sx = {{marginLeft:"70px"}}>
    <CardContent>
        <Typography style={{marginTop:'40px'}}>
        ₹80
        </Typography>
        <Typography>
          <a href='#'>Save For Later</a>
   
        </Typography>
        <Typography>
        <a href='#'>Remove</a>
        </Typography>
        </CardContent>
    </Box>
     
        </Box>
       
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
<CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://5.imimg.com/data5/SELLER/Default/2023/3/293996343/OK/CW/PS/81947776/whatsapp-image-2023-03-20-at-04-26-54-500x500.jpeg"
        alt="blueberry juice">

    </CardMedia>
    <Box>
    <CardContent>
        <Typography style={{marginTop:'40px'}}>
            BlueBerry juice
        </Typography>
        <Typography>250ml</Typography>
        </CardContent>
    </Box>
    <Counter/>
    <Box sx = {{marginLeft:"70px"}}>
    <CardContent>
        <Typography style={{marginTop:'40px'}}>
        ₹80
        </Typography>
        <Typography>
          <a href='#'>Save For Later</a>
 
        </Typography>
        <Typography>
        <a href='#'>Remove</a>
        </Typography>
        </CardContent>
    </Box>
   
     
        </Box>
        <hr/>
        <Box sx={{display:'flex'}}>
        <Box sx = {{marginLeft:"350px"}}>
    <CardContent>
        <Typography style={{marginTop:'10px'}}>
      SubTotal
        </Typography>
     
        <Typography>
      3 items
        </Typography>
        </CardContent>
    </Box>
    <Box sx = {{marginLeft:"30px"}}>
    <CardContent>
        <Typography style={{marginTop:'10px'}}>
   <b>₹240</b>
        </Typography>
     
     
        </CardContent>
    </Box>
        </Box>
        <Box sx={{display:'flex',marginLeft:'420px'}}>
            <Box>
                <Button className='checkout-btn'>Checkout</Button>
            </Box>

        </Box>
   
    

</Card>
    );
  };

export default ShopCart
