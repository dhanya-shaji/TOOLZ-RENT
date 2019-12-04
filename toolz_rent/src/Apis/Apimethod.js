
import {Apiconfig} from './Apiconfig'


const BaseUrl= Apiconfig.apis.Loginapi;
const CustviewUrl=Apiconfig.apis.CustViewapi;
const Toolsviewurl=Apiconfig.apis.ToolsViewapi;
const ChangepswrdUrl=Apiconfig.apis.Updatepswrd;
const CustomerAddUrl=Apiconfig.apis.CustomerAddApi;
const ToolsAddUrl=Apiconfig.apis.ToolsAppApi;
const ToolDeleteUrl=Apiconfig.apis.DeleteToolApi;
const CustDeleteUrl=Apiconfig.apis.DeleteCustApi;
const SelectRentUrl=Apiconfig.apis.SelectRent;
const DeleteRentUrl=Apiconfig.apis.DeleteRent;
const InsertRentUrl=Apiconfig.apis.InsertRent;
const RentById=Apiconfig.apis.RentItemById;
const InsertRentItemUrl=Apiconfig.apis.InsertRentItem;
const SelectRentItemUrl=Apiconfig.apis.SelectRentItem;
const selectCustByid=Apiconfig.apis.CustselectByid;
const updatecustomer=Apiconfig.apis.CustUpdate;
const updatetoolUrl=Apiconfig.apis.ToolUpdate;
const DeleteRentItemUrl=Apiconfig.apis.DeleteRentItem;
const UpdateRentIemUrl=Apiconfig.apis.UpdaterentItem;
const countUrl=Apiconfig.apis.Count;
const ToolByIdUrl=Apiconfig.apis.SelectToolById;
const UpdateRentItemStatusUrl=Apiconfig.apis.RentItemStatusUpdate;
//login
export function get(endPoint) {
    // console.log(endPoint); debugger;
    return fetch(BaseUrl + endPoint)
        .then(
            (response) => response.json()
        )
        .then((responseJson) => {
            if (responseJson.resultCode === 1) {
                return ({error: null, response: responseJson})
            } else {
                return ({error: responseJson.error, response: responseJson})
            }
        })
}
 //selection of all customers
export function select() {
  
    //console.log("haiiii"); 
    return fetch(CustviewUrl)
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    )
}
// selection of all tools
export function selecttools() {
  
    //console.log("haiiii"); 
    return fetch( Toolsviewurl)
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    )
} 
//change password
export function change(endPoint) {
    //console.log(endPoint); 
    return fetch(ChangepswrdUrl + endPoint)
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    )
} 
//add customers
export function Customeradd(endPoint) {
    //console.log(endPoint); 
    return fetch( CustomerAddUrl+ endPoint, {method: 'GET'})
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    )
} 
// add tools
export function Tooladd(endPoint) {
   // console.log(endPoint); 
    return fetch( ToolsAddUrl+ endPoint)
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    ) 
} 
//delete tool
export function Tooldelete(endPoint) {
   // console.log(endPoint); 
    return fetch( ToolDeleteUrl+ endPoint)
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    )
} 
//delete customer
export function Customerdelete(endPoint) {
   // console.log(endPoint); 
    return fetch( CustDeleteUrl+ endPoint)
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    )
} 
//select rent to table
export function selectrent() {
    return fetch( SelectRentUrl)
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    )
} 
//delete rent item
export function deleterent(endPoint) {
   // console.log(endPoint); 
    return fetch( DeleteRentUrl+ endPoint)
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    )
} 
//insert rent items
export function insertrent(endPoint) {
   // console.log(endPoint); 
    return fetch( InsertRentUrl+ endPoint)
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    )
} 
//get rent item by id
export function getrent(endPoint) {
   // console.log(endPoint); 
    return fetch(RentById+ endPoint)
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    )
} 
//select all rentitems
export function getRentitem(endPoint) {
  
   // console.log("haiiii"); 
    return fetch(SelectRentItemUrl+endPoint,{method:'GET'})
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
        }
    )
}
 //Select customers by id
 export function CustomerSelectById(endPoint) {
    console.log("end",endPoint); 
    return fetch( selectCustByid+ endPoint, {method: 'GET'})
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
          
        }
    )
    
} 
//update customer
export function UpdateCustomer(endPoint) {
    console.log("end",endPoint); 
    return fetch( updatecustomer+ endPoint, {method: 'GET'})
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson})
          
        }
    )
    
} 
//update tool
export function Toolupdate(endPoint) {
    console.log("end",endPoint); 
    return fetch(updatetoolUrl+ endPoint, {method: 'GET'})
    .then(
        (response) => response.json()
    )
    .then((responseJson) => {
            return ({ response: responseJson}) 
          
        }
    )
    
} 
//delete rentItem
export function deleterentItem(endPoint) {
     console.log(endPoint); 
     return fetch( DeleteRentItemUrl+ endPoint,{method: 'GET'})
     .then(
        (response) => response.json()
    )
    .then((responseJson) => {
       if (responseJson.usercode===1) {
            return ({ response: responseJson})
       }
        }
    )
} 
 //update rentitem
 export function updaterentItem(endPoint) {
    // console.log(endPoint); 
     return fetch( UpdateRentIemUrl+ endPoint)
     .then(
         (response) => response.json()
     )
     .then((responseJson) => {
             return ({ response: responseJson})
         }
     )
 } 
 //count
 export function countvalue() {
     return fetch(countUrl )
     .then(
         (response) => response.json()
     )
     .then((responseJson) => {
             return ({ response: responseJson})
         }
     )
 } 
 //select Tool by id
 export function SelectToolById(endPoint) {
    //console.log(endPoint); 
     return fetch(ToolByIdUrl + endPoint)
     .then(
         (response) => response.json()
     )
     .then((responseJson) => {
             return ({ response: responseJson})
         }
     )
 } 
 //add rent item 
 export function insertRentItem(endPoint) {
    console.log(endPoint); 
     return fetch(InsertRentItemUrl+ endPoint,{method: 'GET'})
     .then(
         (response) => response.json()
     )
     .then((responseJson) => {
        if (responseJson.usercode===1) {
             return ({ response: responseJson})
        }
         }
     )
 } 
 export function UpdateRentItemStatus(endPoint) {
    //console.log(endPoint); 
     return fetch(UpdateRentItemStatusUrl+ endPoint,{method: 'GET'})
     .then(
         (response) => response.json()
     )
     .then((responseJson) => {
        if (responseJson.resultcode===1) {
             return ({ response: responseJson})
        }
         }
     )
 } 
