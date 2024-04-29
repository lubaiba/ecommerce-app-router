type productPrice = { raw: number; formatted: string; formatted_with_symbol: string; formatted_with_code: string; }
type productInventory = { managed: boolean; available: number; }
type productSeo = { title: null; description: null; }
type productConditionals = {
    is_active: boolean; is_tax_exempt: boolean; is_pay_what_you_want: boolean; is_inventory_managed: boolean; is_sold_out: boolean;
    has_digital_delivery: boolean; has_physical_delivery: boolean; has_images: boolean; collects_fullname: boolean; collects_shipping_address: boolean;
    collects_billing_address: boolean; collects_extra_fields: boolean;
}
type productIs = { active: boolean; tax_exempt: boolean; pay_what_you_want: boolean; inventory_managed: boolean; sold_out: boolean; };
type productHas = { digital_delivery: boolean; physical_delivery: boolean; images: boolean; };
type productCollects = { fullname: boolean; shipping_address: boolean; billing_address: boolean; extra_fields: boolean; };
type productCheckOutUrl = { checkout: string; display: string; };
type productCategory = { id: string; slug: string; name: string; };
type productImage = {
    id: string; url: string; description: string | null; is_image: boolean; filename: string; file_size: number; file_extension: string;
    image_dimensions: { width: number; height: number; };
    meta: any[]; created_at: number; updated_at: number;
};
type productStatics = {
    orders: number;
    sales: {
        raw: number;
        formatted: string;
        formatted_with_symbol: string;
        formatted_with_code: string;
    };
};
export type ProductsDataType = {
    id: string;
    created: number;
    updated: number;
    active: boolean;
    permalink: string;
    name: string;
    description: string;
    price: productPrice;
    inventory: productInventory;
    sku: string;
    sort_order: number;
    seo: productSeo;
    thank_you_url: string | null;
    meta: string | null;
    conditionals: productConditionals;
    is: productIs;
    has: productHas;
    collects: productCollects;
    checkout_url: productCheckOutUrl;
    categories: productCategory[];
    image: productImage;
    statistics: productStatics;
}

type CategoryAsset = {
    id: string;
    url: string;
    description: string | null;
    is_image: boolean;
    filename: string;
    file_size: number;
    file_extension: string;
    image_dimensions: {
      width: number;
      height: number;
    };
    meta: any[];
    created_at: number;
    updated_at: number;
  }
  export type CategoryDataType = {
    id: string;
    parent_id: string | null;
    slug: string;
    name: string;
    description: string | null;
    products: number;
    created: number;
    updated: number;
    meta: any | null;
    assets: CategoryAsset[];
    children: CategoryDataType[];
  }