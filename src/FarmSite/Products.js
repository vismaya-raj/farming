import React, { useState ,useEffect} from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Counter from "./Counter";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { motion } from "framer-motion";

export default function Products() {
  const [showCounter, setShowCounter] = useState(false);
  const [showQuantity, setShowQuantity] = useState(true);

  const handleBasketClick = () => {
    setShowCounter(!showCounter);
  };
  const handleQuantity = () => {
    setShowQuantity(showQuantity);
  };
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchFruits = () => {
      fetch("https://ffb40320-660b-4aac-89cb-61b19d3be7f4.mock.pstmn.io/get") // Use the proxy URL here instead of the direct API URL
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setFruits(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchFruits();
  }, []);
  
  return (
 
    <div className="fruit-card-container">
    {fruits.map((fruit) => (
         <motion.div
         key={fruit.id}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        
        > 
        <Card style={{ boxShadow: "0 8px 8px  rgb(143,186,230)" }}>
          <CardMedia>
            <img src={fruit.image} style={{ width: "200px", height: "150px" }} alt="fruit" />
          </CardMedia>
          <CardContent className="product-content">
            <Typography>{fruit.name}</Typography>
            <Typography>₹{fruit.price}</Typography>
            <Typography>
              <LocalShippingIcon /> {fruit.delivery}
            </Typography>
          </CardContent>
          <CardContent className="PiconContainer">
            <Counter />
            <ShoppingBasketIcon className="PbasketIcon" />
          </CardContent>
        </Card>
        {console.log(fruit.price)}
      </motion.div>
    ))}
  </div>
  )

    }
    
        
       
        {/* <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        > */}
{/*       
        </motion.div>
        <Card className="product_card">
          <Box>
            <CardMedia>
              <img
                src="https://kidseatincolor.com/wp-content/uploads/2022/02/eggs-e1648216369366.jpeg"
                style={{
                  width: "200px",
                  height: "150px",
                  alignContent: "center",
                }}
              />
            </CardMedia>
            <CardContent className="product-content">
              <Typography>Egg</Typography>
              <Typography>₹50</Typography>
              <Typography>
                <LocalShippingIcon /> Standard Delivery:Today 7.00am to 9.00pm
              </Typography>
            </CardContent>
            <CardContent className="PiconContainer">
           
    <Counter />
 
              <ShoppingBasketIcon className="PbasketIcon" />
            </CardContent>
          </Box>
        </Card> */}
    
     
  
//   );
// }
