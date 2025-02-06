import { title } from "process";

export default{
    name:"order",
    type:"document",
    title:"Order",
    fields:[
        {
            name:"firstName",
            type:"string",
            title:"First Name"
        }, 
         {
            name:"lastName",
            type:"string",
            title:"Last Name"
        },
        {
            name:"email",
            type:"string",
            title:"Email"
        },
        {
            name:"address",
            type:"string",
            title:"Address"
        },
        {
            name:"phone",
            type:"string",
            title:"Phone",
        },
        {
            name:"city",
            type:"string",
            title:"City"
        },
        {
            name:"zipCode",
            type:"string",
            title:"Zip Code"
        },
        {
            name:"cartItems",
            title:"Cart Items",
            type:"array",
            of:[
                {type:"reference", 
                to:{type:"products"}
            }
        ]
        },
        {
            name:"total",
            title:"Total",
            type:"number"
        },
        {
            name:"status",
            title:"Order Status",
            type:"string",
            Options:{
                list:[
                    {title:"Pending" , value:"pending"},
                    {title:"Success" , value:"success"},
                    {title:"Dispatch" , value:"dispatch"}
                ],
                layout:"radio"
            },
            initialValue:"pending"
        }
        
    ]
}