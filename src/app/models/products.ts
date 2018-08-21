export class Product {
    constructor(
        public product_id:Number,
        public product_code:string,
        public gen_name:string,
        public product_name:string,
        public invoice_no:string,
        public supplier:string,
        public units:string,
        public unit_quantity:string,
        public unit_price:Number,
        public actual_cost:Number,//(unit_price*units)
        public discount:Number,
        public unit_discount:Number,//(discount/units)
        public cost:Number,//(actual_cost-discount)
        public ordering_price:Number,//(actual_cost/original_quantity)
        public selling_price:Number,//(percentage of selling price)
        public profit:Number, //(ordering_price-selling_price)
        public original_quantity:number,
        public qty_sold:number,
        public onhand_qty:number, //(original_quantity-qty_sold)
        public expiry_date:Date,
        public created_at:Date,
        public updated_at:Date){}
}