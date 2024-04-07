import {ServiceBase} from "./service-base";
export class ProductsService extends ServiceBase{
  static getHeaders(){
    return{
    "X-Authorization": "pk_5621351f171389979a3ef502a91eba7fdabc4b7f8070a",
    Accept: "application/json",
    "Content-Type": "application/json",
    }
  }
   static getProducts=async()=>{
    var productResp=await fetch(this.getUrl('/products'),{
      method:'GET',
      headers:this.getHeaders()
    });
    var products=await productResp.json();//data
    return products;
   }

   static getProductById=async(id:string)=>{
    var productResp=await fetch(this.getUrl('/products/'+id),{
      headers:this.getHeaders()
    });
    var product=await productResp.json();
    return product;
   }
   
   static addToCart = async (productId:any) => {
    const cartId = "cart_kpnNwAWXE95mXB";
    var productResp=await fetch(this.getUrl('/carts/'+cartId),{
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({
        id: productId,
        quantity: 1,
      }),
    });
    var cart=await productResp.json();
    return cart;
   }
   
   static cartItem=async()=>{
    const cartId = "cart_kpnNwAWXE95mXB";
    var productResp=await fetch(this.getUrl('/carts/'+cartId),{
      headers: this.getHeaders(),
    });
    var cart=await productResp.json();
    return cart;
   }
}