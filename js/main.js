

// !//! local (localStorage)
var pNameIn     = document.getElementById('productName') ;   //.value empty
var pPriceIn    = document.getElementById('productPrice')
var pCategoryIn = document.getElementById('productCategory')
var pDescIn     = document.getElementById('productDesc')





var pList = [] ;



// ! check if products exist in localstorage
if(localStorage.getItem('products') != null){
    pList = JSON.parse(localStorage.getItem('products') );
    displayList(pList)
}






// onclick="addProduct();"
function addProduct() {
    var product = {
        name : pNameIn.value ,
        price : pPriceIn.value ,
        category : pCategoryIn.value ,
        desc : pDescIn.value
    } ;  

    
    pList.push(product);
    localStorage.setItem('products' , JSON.stringify(pList));
    displayList(pList)
    
};


// displayList (plist) =  push  pop sort
function displayList( list ) {


    var cartona = ``
    for(var i = 0 ;  i < list.length ;i++){
        // console.log(list[i] . , i);
        
        cartona += `
        
        <div class="col-md-4">
        <div class="inner position-relative rounded shadow overflow-hidden">

          <div class="position-absolute top-0 end-0 m-3 d-flex gap-1">
            <span onclick="incrementPrice(${i})" class="fa-stack fa-1x icon">
              <i class="fa-solid text-white fa-circle fa-stack-2x"></i>
              <i class="fa-solid text-info fa-plus fa-stack-1x fa-inverse"></i>
            </span>
            <span onclick="deleteProduct(${i})" class="fa-stack fa-1x icon">
              <i class="fa-solid text-white fa-circle fa-stack-2x"></i>
              <i class="fa-solid text-info fa-trash fa-stack-1x fa-inverse"></i>
            </span>
            <span onclick="setupFormToUpdate(${i})" class="fa-stack fa-1x icon">
              <i class="fa-solid text-white fa-circle fa-stack-2x"></i>
              <i class="fa-solid text-primary fa-pen fa-stack-1x fa-inverse"></i>
            </span>
          </div>

          <img class="w-100"
            src="https://fastly.picsum.photos/id/355/600/600.jpg?hmac=AZDDU8kuG3ZJHqaK2qmadQJuorh_MPX_vbwSSJNJs1E"
            alt="">
          <div class="p-2">
            <h2>i${i}${  list[i].name }</h2>
            <p>
              ${list[i].desc}
            </p>
            <div class="d-flex justify-content-between">
              <span>${list[i].price}$</span>
              <span>${list[i].category}</span>
            </div>
          </div>
        </div>
      </div>
        
        
        `;
    };

    document.getElementById('row').innerHTML = cartona ;
    
};





function deleteProduct (index) {
//    onclick trash icon ,,, index !
    pList.splice(index , 1);
    displayList(pList)
    localStorage.setItem('products' , JSON.stringify(pList));

    // reload local storage
    
}

function incrementPrice (index) {
//    onclick trash icon ,,, index !
    pList[index].price = Number(pList[index].price) + 1 ;
    displayList(pList)
    localStorage.setItem('products' , JSON.stringify(pList));

    // reload local storage
    
}

function setupFormToUpdate(index) {
    console.log("hiiii" , index);
    document.getElementById('updateBtn').classList.remove('d-none')
    document.getElementById('addBtn').classList.add('d-none')
    
  }


  function updateProduct() {
     document.getElementById('updateBtn').classList.add('d-none')
    document.getElementById('addBtn').classList.remove('d-none')
    
  }