# Products Lab - Data Modeling

## Plan

### Step 1) Come up with a product, make the static design for the data model
* id
* name
* image
* description
* category
* price

### Step 2) Create the Array of Objects
1. At least 5 products
2. Each object has exactly the same keys
3. Create a variable that is an array of all products
4. Export this array

### Step 3) DOM render function
* Create a static HTML of one product card as a guide
* Create a function that will generate the product card for each product

### Step 3A) TDD

### Step 4) Generate Product List
* import data and DOM render function
* locate the element where the products will go
* loop through the data

# Day three plan

...

# Day four plan

### Write a function called getProducts

* check to see if there are any products living in local storage
* return if so
* else, set hard coded products into localstorage and returns products

### Design Admin Page

* HTML page for Admin page
* add links to cart and home
* hard code form

### TDD API method for addProduct
* Retreive array
* push new product
* re-save array into localstorage
* call addProduct
* check localstorage to see if product was added to the array

### Form Submit Event
* reference the form
* submit event and preventDefault
* new FormData, passing in the form
* make new product object from FormData using .get
* call addProduct with the object
* reset form

### Stretch Remove a Product