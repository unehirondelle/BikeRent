    $(document).ready(function () {
        console.log(bikes);
        console.log('loaded');
        for (let i = 0; i < bikes.length; i++) {
            let bike = bikes[i];
            console.log(bikes[i].name);
            $("#cards").append("<div id='card_col_" + bike.id + "' class='col-lg-3 col-md-6 mb-4'>");
            $("#card_col_" + bike.id).append("<div id='card_" + bike.id + "'class='card h-100'></div>");
            $("#card_" + bike.id).append("<img id='card_img_' src=" + bike.image + "alt=" + bike.name + "class='card-img-top'>");
            $("#card_" + bike.id).append("<div id='card_body_" + bike.id + "' class='card-body'></div>");
            $("#card_body_" + bike.id).append("<h5 id='card_title_" + bike.id + "' class='card-title'>" + bike.name + "</h5>");
            $("#card_body_" + bike.id).append("<h6 id='price_" + bike.id + "'>" + '$ ' + bike.price + "</h6>");
            $("#card_" + bike.id).append("<input id='quantity' class='text-center quantity' type='number' value='0' min='0' max='51' step='1' bikeId='" + bike.id + "' index='" + bikes.indexOf(bike) + "'>");
        }
        $("input[type='number']").inputSpinner();
        $(".btn-increment, .btn-decrement").on("touchstart click", function (a) {
            console.log('build cards', a);
            $(".list-element").remove();
            // $(document).ready(function () {
            console.log('cart loaded');
            let total_quantity = 0;
            let total = 0;
            $("input#quantity").each(function () {
                    console.log("id:", $(this).attr("bikeId"), "quantity: ", $(this).val());
                    let id = $(this).attr("bikeId");
                    console.log("card_title", $('#card_title_' + id).text());
                    let quantity = $(this).val();
                    let cart_title = $('#card_title_' + id).text();
                    let price_$ = $('#price_' + id).text();
                    console.log("old price", price_$);
                    let price_ = price_$.replace('$ ', '');
                    console.log("new price", price_);
                    let index = $(this).attr("index");
                    console.log("index: ", index);
                    let available = availability[index].quantity;
                    console.log("availability: ", available);
                    if (quantity > 0 && quantity <= available) {
                        $("#cart").append("<li id='cart_" + id + "' class='list-group-item d-flex justify-content-between lh-condensed list-element'></li>");
                        $("#cart_" + id).append("<div id='cart_item_" + id + "'></div>");
                        $("#cart_item_" + id).append("<h6 id='cart_title_' class='my-0'>" + cart_title + "</h6>");
                        $("#cart_" + id).append("<span id='cart_quantity_' class='text-muted'>" + quantity + ' ea' + "</span>")
                        $("#cart_" + id).append("<span id='cart_price_' class='text-muted'>" + '$ ' + price_ * quantity + "</span>");
                        total_quantity += parseInt(quantity);
                        total += price_ * quantity;
                    } else if (quantity > 0 && quantity > available) {
                        alert("Available: " + available + " item(s).");
                    }
                }
            );
            $("#cart").append("<li id='cart_' class='list-group-item d-flex justify-content-between lh-condensed list-element'></li>");
            $("#cart_").append("<div id='cart_item_'></div>");
            $("#cart_item_").append("<h4 id='cart_title_' class='my-0'>Total</h4>");
            $("#cart_").append("<span id='cart_quantity_'>" + total_quantity + ' ea' + "</span>")
            $("#cart_").append("<span id='cart_price_'>" + '$ ' + total.toFixed(2) + "</span>");
            // })
        });
    })