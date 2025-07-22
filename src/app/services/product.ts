import { Injectable } from '@angular/core';
import {products} from './productmodel'
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Product {
  reduce(arg0: (sum: any, item: any) => any, arg1: number): any {
    throw new Error('Method not implemented.');
  }
  
  productlist:products[]=[

  {
    productId: "1",
    productName: "Asus Tuf Gaming a15",
    productDescription: "Best gaming laptop with RTX 3050 for a great experience.",
    productCategory: "laptop",
    productPrice: "56000",
    productImage: "https://dlcdnwebimgs.asus.com/gain/7909b0a1-1457-4953-a9e7-41b2be78affa/"
  },
  {
    productId: "2",
    productName: "Acer Aspire 7",
    productDescription: "Best gaming laptop with RTX 2050 for a great experience.",
    productCategory: "laptop",
    productPrice: "46000",
    productImage: "https://rukminim2.flixcart.com/image/850/1000/xif0q/computer/b/6/o/-original-imah8yymchnjsxzn.jpeg?q=90&crop=false"
  },
  {
    productId: "3",
    productName: "Lenovo Legion",
    productDescription: "Best gaming laptop with RTX 2050 for a great experience.",
    productCategory: "laptop",
    productPrice: "45000",
    productImage: "https://p3-ofp.static.pub//fes/cms/2024/09/12/elsxf6rwrtxudesy107rsj88cg0qhx499173.png"
  },
  {
    productId: "4",
    productName: "iPhone 15 Pro",
    productDescription: "Experience the power of the A17 Bionic chip and a pro-level camera system.",
    productCategory: "mobile",
    productPrice: "125000",
    productImage: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699312"
  },
  {
    productId: "5",
    productName: "Samsung Galaxy S24 Ultra",
    productDescription: "Galaxy AI is here. Search, chat, and translate in a new way.",
    productCategory: "mobile",
    productPrice: "110000",
    productImage: "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-ultra-s928-sm-s928bztqins-thumb-539573216?$344_344_PNG$"
  },
  {
    productId: "6",
    productName: "Sony WH-1000XM5 Headphones",
    productDescription: "Industry-leading noise cancellation and superior sound quality.",
    productCategory: "headphones",
    productPrice: "29990",
    productImage: "https://www.sony.co.in/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
  },
  {
    productId: "7",
    productName: "Apple Watch Series 9",
    productDescription: "Smarter, brighter, and mightier. Your essential companion for a healthy life.",
    productCategory: "smartwatch",
    productPrice: "41900",
    productImage: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-s9-digitalmat-gallery-1-202403_GEO_IN?wid=364&hei=333&fmt=png-alpha&.v=1708453483324"
  },
  {
    productId: "8",
    productName: "Dell XPS 15 Laptop",
    productDescription: "Stunning display and incredible performance for creators.",
    productCategory: "laptop",
    productPrice: "150000",
    productImage: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/touch-black/notebook-xps-15-9530-t-black-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=439&hei=337&qlt=100,1&resMode=sharp2&size=439,337&chrss=full"
  },
  {
    productId: "9",
    productName: "PlayStation 5",
    productDescription: "Experience lightning-fast loading and an all-new generation of incredible games.",
    productCategory: "gaming-console",
    productPrice: "54990",
    productImage: "https://gmedia.playstation.com/is/image/gmedia/ps5-product-thumbnail-01-en-14sep21?$facebook$"
  },
  {
    productId: "10",
    productName: "LG C3 55-inch OLED TV",
    productDescription: "Incredible picture quality with infinite contrast and vibrant colors.",
    productCategory: "tv",
    productPrice: "135000",
    productImage: "https://www.lg.com/in/images/tvs/md07583713/gallery/OLED55C3XSA-DZ-01.jpg"
  },
  {
    productId: "11",
    productName: "Canon EOS R6 Mark II",
    productDescription: "A full-frame mirrorless camera for hybrid shooters who demand quality.",
    productCategory: "camera",
    productPrice: "243995",
    productImage: "https://in.canon/media/image/2022/11/02/b619e73c33284e369b76c7255b71b563_EOS+R6+Mark+II+RF24-105mm+f4-7.1+IS+STM+front.png"
  },
  {
    productId: "12",
    productName: "Apple AirPods Pro (2nd Gen)",
    productDescription: "Richer audio quality with up to 2x more Active Noise Cancellation.",
    productCategory: "headphones",
    productPrice: "24900",
    productImage: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985"
  },
  {
    productId: "13",
    productName: "Google Pixel 8",
    productDescription: "The power of Google AI, for a more helpful phone.",
    productCategory: "mobile",
    productPrice: "69999",
    productImage: "https://lh3.googleusercontent.com/gOkSros1zHe1xI1bX0CL23T2yvO1L3oE5js6s3Kk0-q1j1tie2xG1fM-CT_o52nB9i20Q_qmo4g_X23pLpGgP3qTiuoXf0O8nQ"
  },
  {
    productId: "14",
    productName: "Samsung Galaxy Watch 6",
    productDescription: "Track your wellness and fitness with our biggest screen yet.",
    productCategory: "smartwatch",
    productPrice: "33999",
    productImage: "https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-watch6-r940-44mm-sm-r940nzsains-thumb-537303038?$344_344_PNG$"
  },
  {
    productId: "15",
    productName: "MacBook Air M2",
    productDescription: "Strikingly thin design, M2 chip, and up to 18 hours of battery life.",
    productCategory: "laptop",
    productPrice: "99900",
    productImage: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1652836262174"
  },
  {
    productId: "16",
    productName: "Bose QuietComfort Ultra Headphones",
    productDescription: "World-class noise cancellation and groundbreaking immersive audio.",
    productCategory: "headphones",
    productPrice: "34900",
    productImage: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_ultra_headphones/product_silo_images/qc-ultra-headphones-black-_001.png/jcr:content/renditions/cq5dam.web.600.600.png"
  },
  {
    productId: "17",
    productName: "Nintendo Switch - OLED Model",
    productDescription: "Features a vibrant 7-inch OLED screen for a richer handheld experience.",
    productCategory: "gaming-console",
    productPrice: "32000",
    productImage: "https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/ncom/en_US/switch/site-design/oled-model-promo"
  },
  {
    productId: "18",
    productName: "Sony a7 IV",
    productDescription: "Hybrid camera with a 33MP sensor, perfect for photos and videos.",
    productCategory: "camera",
    productPrice: "220000",
    productImage: "https://www.sony.co.in/image/5d742614b1c86d84a7a66f7f3299c5f6?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
  },
  {
    productId: "19",
    productName: "Apple iPad Pro",
    productDescription: "The ultimate iPad experience with the powerful M2 chip.",
    productCategory: "tablet",
    productPrice: "81900",
    productImage: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-11-select-cell-spacegray-202210?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664411189912"
  },
  {
    productId: "20",
    productName: "Samsung The Frame TV",
    productDescription: "A TV when it's on, Art when it's off. Customizable bezel and matte display.",
    productCategory: "tv",
    productPrice: "85990",
    productImage: "https://images.samsung.com/is/image/samsung/p6pim/in/qa55ls03baklxl/gallery/in-the-frame-ls03b-qa55ls03baklxl-thumb-534125369?$344_344_PNG$"
  },
  {
    productId: "21",
    productName: "OnePlus 12",
    productDescription: "Elite performance from the Snapdragon 8 Gen 3 chipset and Hasselblad camera.",
    productCategory: "mobile",
    productPrice: "64999",
    productImage: "https://oasis.op-assets.com/content/dam/oasis/page/2024/in/oneplus-12/phone-img.png"
  },
  {
    productId: "22",
    productName: "Garmin Fenix 7 Pro",
    productDescription: "The ultimate multisport GPS watch with solar charging and advanced training features.",
    productCategory: "smartwatch",
    productPrice: "100000",
    productImage: "https://res.garmin.com/ wearables/Product_family_page/fenix/desktop/fenix-7-pro-sapphire-solar-carbon-gray-dlc-titanium-with-black-band-010-02777-11.png"
  },
  {
    productId: "23",
    productName: "Microsoft Surface Laptop 5",
    productDescription: "Blazing-fast performance and sophisticated style in a thin and light design.",
    productCategory: "laptop",
    productPrice: "107999",
    productImage: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE564wx?ver=258a&q=90&m=6&h=431&w=767&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
  },
  {
    productId: "24",
    productName: "Xbox Series X",
    productDescription: "The fastest, most powerful Xbox ever. Experience true 4K gaming.",
    productCategory: "gaming-console",
    productPrice: "52990",
    productImage: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4mRni?ver=8361&q=90&m=6&h=431&w=767&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
  },
  {
    productId: "25",
    productName: "Sennheiser Momentum 4 Wireless",
    productDescription: "Superior sound with adaptive noise cancellation and personalized audio.",
    productCategory: "headphones",
    productPrice: "34990",
    productImage: "https://assets.sennheiser.com/img/18035/product_detail_x1_desktop_M4_AEBT_Black_Sennheiser.png"
  },
  {
    productId: "26",
    productName: "Samsung Galaxy Tab S9",
    productDescription: "Dynamic AMOLED 2X display and a powerful processor for work and play.",
    productCategory: "tablet",
    productPrice: "72999",
    productImage: "https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-tab-s9-wifi-x710-sm-x710nzaainu-thumb-537299849?$344_344_PNG$"
  },
  {
    productId: "27",
    productName: "Fujifilm X-T5",
    productDescription: "A classic-styled mirrorless camera with a 40MP sensor for stunning stills.",
    productCategory: "camera",
    productPrice: "164999",
    productImage: "https://dl.fujifilm-x.com/global/products/cameras/x-t5/sample-images/x-t5_sample_00.jpg"
  },
  {
    productId: "28",
    productName: "HP Spectre x360 14",
    productDescription: "A versatile 2-in-1 laptop with a stunning OLED display and premium design.",
    productCategory: "laptop",
    productPrice: "130000",
    productImage: "https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/c/0/c08192190_1.png"
  },
  {
    productId: "29",
    productName: "Sony Bravia X90L Series TV",
    productDescription: "Full Array LED TV with Cognitive Processor XR for lifelike picture.",
    productCategory: "tv",
    productPrice: "120000",
    productImage: "https://www.sony.co.in/image/b8e058a98c39e25d2044955743b1f148?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
  },
  {
    productId: "30",
    productName: "Fitbit Charge 6",
    productDescription: "Advanced health and fitness tracker with Google apps built-in.",
    productCategory: "smartwatch",
    productPrice: "14999",
    productImage: "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/charge-6/hero-static/charge-6-coral-device-hero.png"
  },
  {
  productId: "31",
  productName: "DJI Mini 4 Pro",
  productDescription: "Lightweight and powerful camera drone with 4K HDR video and obstacle sensing.",
  productCategory: "drone",
  productPrice: "79900",
  productImage: "https://dji-official-fe.djicdn.com/dps/e0b1f558a221650f96d538259d435168.png"
},
{
  productId: "32",
  productName: "Amazon Echo Dot (5th Gen)",
  productDescription: "Our most popular smart speaker with Alexa, now with a clock and better audio.",
  productCategory: "smart-speaker",
  productPrice: "5499",
  productImage: "https://m.media-amazon.com/images/I/61jG-c0aV8L._AC_SL1000_.jpg"
}


  ];


  getProducts(){
    return of(this.productlist);
  }

  addProducts(proobj:products){
    
    let ob=new products(); 
    let prokeys=Object.keys(proobj);
    let obkeys=Object.keys(ob) 
    if(obkeys.every(k=>prokeys.includes(k))) 
    {
      this.productlist.push(proobj);
    return "product added successfully";
    }
    else{
      return "something went wrong"
    }
  }

  deleteProduct(pid:any){
    const index=this.productlist.findIndex((e)=>e.productId==pid);
    if(index!=-1){
      this.productlist.splice(index,1);
      return "deleted successfully"
    }
    else{
      return "something went wrong"
    }
  }

  updateProduct(obj:any){
    const index=this.productlist.findIndex((e)=>e.productId==obj.productId);
    this.productlist.splice(index,1,obj);
    return "product updated"
  }
  getProductById(pid:any){
    return this.productlist.find(e=>e.productId==pid);
  }

}