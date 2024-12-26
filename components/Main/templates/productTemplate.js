export const productTemplate = `
   <div class="product-item" id = "{{id}}" >
         <img class="product-item_img" src="../../../imgs/{{imgURL}}" alt="">
          <div class="product-item_info">
          <div class=" product-item_name"> {{name}}  </div>
          <div class=" product-item_price">\${{price}} </div>
          <div class=" product-item_add_to_cart_button"> ADD TO CART</div>
        </div>
      </div>`;
