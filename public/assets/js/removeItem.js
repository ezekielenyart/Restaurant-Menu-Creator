// function removeItem(itemId) {
//     var item = $(".itemId")
//     item.parentNode.removeChild(item)
// }
let MenuItems = [];
let MenuID = 0;


$(document).ready(function () {
    getMenu()

    $("#itemId").on("change", selectItem)
    $(".removeItemForm").on("submit", removeItem)
})

function getMenu() {
    API.getMenu()
        .then(function (response) {
            console.log(response + "response")
            MenuItems = response;
<<<<<<< HEAD

=======
>>>>>>> 358fb8bd044f6ad93421a6ab08a7ea50b8e6ca44
            response.forEach(item => {
                const option = $("<option>")
                option.val(item.id)
                option.text(item.title)
                $("#itemId").append(option)
<<<<<<< HEAD
                // console.log(MenuItems) 
=======
                // console.log(MenuItems)
>>>>>>> 358fb8bd044f6ad93421a6ab08a7ea50b8e6ca44
            })
        })
        .catch(function (err) {
            console.warn(err.message)
        })
}

function selectItem() {
    MenuID = parseInt($(this).val())
<<<<<<< HEAD
=======
    
>>>>>>> 358fb8bd044f6ad93421a6ab08a7ea50b8e6ca44
    const MenuItem = MenuItems.find(x => x.id === MenuID)
    console.log(MenuItem)
    $("#itemTitle").val(MenuItem.title)
    $("#itemPrice").val(MenuItem.price)
    $("#itemDescription").val(MenuItem.description)
 
}

function removeItem() {
<<<<<<< HEAD
    const deleteItem = {
        id: MenuID,
        // title: $("#itemTitle").val().trim(),
        // price: $("#itemPrice").val().trim(),
        // description: $("#itemDescription").val().trim()
    }
    API.removeItem(deleteItem)
=======
    // const itemRmv = {
    //     id: MenuID,
        // title: $("#itemTitle").val(),
        // price: $("#itemPrice").val(),
        // description: $("#itemDescription").val()
    // }
    console.log(MenuID)
    API.removeItem(MenuID)
>>>>>>> 358fb8bd044f6ad93421a6ab08a7ea50b8e6ca44
        .then(function () {
            window.location.reload()
        })
        .catch(function (err) {
            console.warn(err.message)
        })
}


<<<<<<< HEAD



=======
>>>>>>> 358fb8bd044f6ad93421a6ab08a7ea50b8e6ca44
