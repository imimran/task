# task

Get Order details:

Get: http://127.0.0.1:5000/api/v1/order/61de77f9b0f0ec295a90e5cb

it return-----
{
    "_id": "61de77f9b0f0ec295a90e5cb",
    "orderItems": [
        {
            "_id": "61de77f9b0f0ec295a90e5c7",
            "products": "Orange",
            "quantity": 3,
            "createdAt": "2022-01-12T06:40:57.463Z",
            "updatedAt": "2022-01-12T06:40:57.463Z",
            "__v": 0
        },
        {
            "_id": "61de77f9b0f0ec295a90e5c9",
            "products": "Banana",
            "quantity": 2,
            "createdAt": "2022-01-12T06:40:57.512Z",
            "updatedAt": "2022-01-12T06:40:57.512Z",
            "__v": 0
        }
    ],
    "phone": "+420702241333"
}



Create order:
Post: http://127.0.0.1:5000/api/v1/order/create

to make order (req.body)--- You need to pass 
{
    "orderItems" : [
        {
            "quantity": 3,
            "products" : "Orange"
        },
        {
            "quantity": 2,
            "products" : "Banana"
        }
    ],
    "phone": "+420702241333"
}

it will save orderItem in OrderItem table, and order data to Order table
it return--this formet
{
    "orderItems": [
        "61dec0c93000cc80026ade5a",
        "61dec0c93000cc80026ade5c"
    ],
    "phone": "+420702241333",
    "_id": "61dec0c93000cc80026ade5e",
    "createdAt": "2022-01-12T11:51:37.967Z",
    "updatedAt": "2022-01-12T11:51:37.967Z",
    "__v": 0
}






Create Folder:
  post:  http://127.0.0.1:5000/api/v1/folder/create
   parameter- folderName,folderPath
   
   Example data:
   
   // it will create folder in root(uploads) folder and  show  "msg": "Folder Create Successfully"  and save folderName and folderPath in db
   {
    "folderName": "imran",  
   }
   
   
   //it will create "imran" folder in "uploads/aih/" and  show  "msg": "Folder Create Successfully"
   {
    "folderName": "imran",
    "folderPath": "aih"
   }
   
   
  if same name exist it show "msg": "Folder already exist"
   
  you can more child folder by passing path like-  "folderPath": "aih/imran/1/2/3"
  
  
  
  
 Get Folder details:
 http://127.0.0.1:5000/api/v1/folder/all ---it show all folder in uploads(root) dir
 
 http://127.0.0.1:5000/api/v1/folder/all?folderName=imran  ---- list of folder & files in "uploads/imran" folder
 
 http://127.0.0.1:5000/api/v1/folder/all?folderName=imran/aih ----- list of folder & files in "uploads/imran/aih" folder
 
 
 
 
 remove folder:
  post: http://127.0.0.1:5000/api/v1/folder/remove
  parameter -folder
  
  // it will remove "imran" folder in root(uploads) dir
  {
    "folder": "imran"
  }
  
  // it will remove "imran" folder in 'uploads/aih' dir
   {
    "folder": "aih/imran"
   }
   
   if delete successfuly show--- msg: "Folder delete Successfully"
   if not found----msg: "Folder not found"
   
   
   
   
   
   
 
 
   
