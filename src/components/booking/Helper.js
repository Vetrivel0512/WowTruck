const FormatGui = (rawData, type, tonnage_value, vehicle_type)=>{
    let data =[
        { name: "Current Location", field: "text" },
        { name: "Enter Desitination", field: "text" },
        {
          name: "Tonnage",
          menuItem: [
            { id: "", label: "Tonnage" },
          
          ],
          field: "select",
        },
        {
          name: "Length",
          menuItem: [
            { id: "", label: "Length" },
          
          ],
          field: "select",
        },
      
        {
          name: "Vehicle Body Type",
          menuItem: [
            { id: "", label: "Vehicle Body Type" },
         
          ],
          field: "select",
        },
        {
          name: "Specifications",
          menuItem: [
            { id: "", label: "specification" },
         
          ],
          field: "select",
        },
        {
          name: "Material Type",
          menuItem: [
            { id: "", label: "Material Type" },
          
          ],
          field: "select",
        },
        { name: "Date of Pickup", field: "text", value: [""] },
        {
          name: "Select POD",
          menuItem: [
            { id: "", label: "Select POD Type" },
            { id: "1", label: "POD" },
            { id: "2", label: "e-POD" },

            
          ],
          field: "select",
        },
        { name: "Insurance", field: "button", value: [""] },
        {
          name: "Date",
          field: "text",
          value: [""],
        },
        {
          name: "Book Later",
          menuItem: [
            { id: "1", label: "Book Now" },
            { id: "2", label: "Book Later"},
          ],
          field: "select",
        },
      ];

      let intercity_materials = rawData?.intercity_materials?.map((item)=>{

       return   {id:`${item?.id}`, label:`${item?.value}`}
      }
       )
      let intracity_materials = rawData?.intracity_materials?.map((item)=>{

       return   {id:`${item?.id}`, label:`${item?.value}`}
      }
       )

    

     

       let tonnage = rawData?.price_list?.tonnage?.map((item)=>{
        return {id: item?.value, label:item?.description}
       })
       let Length = rawData?.price_list?.tonnage?.filter((item)=>{
        if(tonnage_value == item?.value){
         return item
        }
       }).map((item)=>item?.feet)[0].map((item1)=>{
        return {id: item1?.id, label:item1?.description}
      })

      let vehicle_body = rawData?.truckbody?.body_type?.body?.map((item)=>{
        return {id : `${item?.id}` , label:`${item?.type_of_body}`}
       })
       let specification = rawData?.truckbody?.body_type?.body?.filter((item)=>{
        if(vehicle_type == item?.id){
         return item
        }
       })?.map((item)=>item?.specification)[0]?.map((item1)=>{
        return {id: item1?.id, label:item1?.specification}
      })


      let RetunData = data?.map((item)=>{
        if (type=="OutStation"){
            if(item?.name =="Material Type"){
                return {...item, menuItem:[...item?.menuItem , ...intercity_materials]}
            }else if (item?.name=="Vehicle Body Type"){
                return {...item, menuItem:[...item?.menuItem , ...vehicle_body]}

            }else if(item?.name =="Specifications"){
                return {...item, menuItem:[...item?.menuItem , ...specification]}
            }else if (item?.name =="Tonnage"){
              return {...item, menuItem:[...item?.menuItem , ...tonnage]}
            }else if (item?.name =="Length"){
              return {...item, menuItem:[...item?.menuItem , ...Length]}
            }
        }else {
            if(item?.name =="Material Type"){
                return {...item, menuItem:[...item?.menuItem , ...intracity_materials]}
            }
        }
        return item
      })

      console.log(rawData,  "rawData")
      // console.log(RetunData,  "RetunData")

    return RetunData
}

export  {FormatGui}