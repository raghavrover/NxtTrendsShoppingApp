In this project, I've built a **Nxt Trendz Online Shopping Website** by using React library and a few third party npm packages.

### Refer to the video below:

<br/>
<div style="text-align: center;">
  <video style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-output.mp4" type="video/mp4">
  </video>
</div>
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

- User is Authenticated by making a HTTP POST request to the **NxtTrendzLoginApiUrl**. If authentication is successful a JWT Token is sent in response for further authorization and directed to **HOME** Page. If authentication fails an ERROR message will be displayed.
</details>

<details>
<summary>Home</summary>
<br/>

- In home page by using Navigation menu a user can navigate to different pages like Products, Cart and Login.
- And a description about clothes and to get you started Shopping.
</details>

<details>
<summary>Products</summary>
<br/>

- All products data is fetched by making a HTTP GET request to **NxtTrendzAllProductsApiUrl** and the fetched data will be rendered.
- Another HTTP GET request is made to the **NxtTrendzPrimeDealsApiUrl** to get Prime Deals. If the user is of prime type all prime deals are fetched and rendered. Incase if the user is non-prime API call is rejected and the rejection will be handled and a banner will be displayed.
  <details>
    <summary>Features</summary>
    <br/>

  - Filter the products based category, rating, and price.
  - Search for a product.
    </details>

  </details>
  <details>
  <summary>Specific Product</summary>
  <br/>

- Product data is fetched by making a HTTP GET request to the **NxtTrendzProductDetailsApiUrl** and data is rendered
- You can find all details about product price, description, availability, rating, reviews, brand.
- Select your desired Quantity and add the product to your Cart.
- You can also find similar products related to the product.
</details>
<details>
<summary>Cart</summary>
<br/>

- User can find all the products that we're added to the Cart. <details> <summary>Features</summary> <br/>

      - User has the flexibility to change to desired quantity of a particular product.
      - User can remove all products in the cart.
      - Price of product is calculated dynamically when a user changes quantity.
      - Order total price is displayed at the of cart products.
      </details>

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
