In this project, I built a **Nxt Trendz Online Shopping Website** using React library and a few third-party npm packages.
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-sm-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-lg-output.png)

</details>

### Application Routes

<details>
<summary>Login</summary>
<br/>

- User is Authenticated by making an HTTP POST request to the **NxtTrendzLoginApiUrl**. If authentication is successful a JWT Token is sent in response for further authorization and directed to **HOME** Page. If authentication fails an ERROR message will be displayed.
</details>

<details>
<summary>Home</summary>
<br/>

- In the home page by using the Navigation Menu a user can navigate to different pages like Products, Cart, and Login.
- And a description of clothes to get you started Shopping.
</details>

<details>
<summary>Products</summary>
<br/>

- Products data is fetched by making an HTTP GET request to **NxtTrendzAllProductsApiUrl** and the fetched data will be rendered.
- Another HTTP GET request is made to the **NxtTrendzPrimeDealsApiUrl** to get Prime Deals. If the user is of prime type all prime deals are fetched and rendered. If the user is non-prime API call is rejected, the rejection will be handled and a banner will be displayed.
  <details>
  <summary>Features</summary>
  <br/>
  
  - Filter the products based on category, rating, and price.
  - Search for a product.
  </details>

</details>
<details>
<summary>Specific Product</summary>
<br/>

- Product data is fetched by making an HTTP GET request to the **NxtTrendzProductDetailsApiUrl** and data is rendered
- You can find all details about product price, description, availability, rating, reviews, brand.
- Select your desired Quantity and add the product to your Cart.
- You can also find similar products related to the product.
</details>
<details>
<summary>Cart</summary>
<br/>

- User can find all the products that we're added to the Cart.
  <details> 
  <summary>Features</summary> 
  <br/>
    
  - User has the flexibility to change to desired quantity of a particular product.
  - User can remove all products from the cart.
  - The price of a product item is calculated dynamically when a user changes quantity.
  - Order total price is displayed at the of cart products.
  </details>
</details>  
<details>
<summary>Not Found</summary>
<br/>

- When a user enters any **url** other than the defined paths(urls), not-found route will be rendered.  
</details>

### Login Credentials

<details>
<summary>Click to view</summary>

<br/>

- Prime User credentials

  ```text
   username: rahul
   password: rahul@2021
  ```

- Non-Prime User credentials

  ```text
   username: raja
   password: raja@2021
  ```

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: white">Hex: #0b69ff</div>
<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: white">Hex: #616e7c</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
