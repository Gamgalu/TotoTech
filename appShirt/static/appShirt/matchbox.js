var products = "";
var current_product = 0;
var current_variante = 0;
function setze_produkt(counter,variante){
  get_articlenumber_from_json(counter,variante);
  get_variationsid_from_json(counter,variante);
  get_price_from_json(counter,variante);
  get_name_from_json(counter,variante);
  get_idid_from_json(counter,variante);
  get_picture_from_json(counter,variante);
  fill_varianten(counter);
  if(products.products[counter].variations.length > 1) {
  //  $("#variantenchoice > div").css("background-color", "white");
  //  $("#variantenchoice > div")[variante].css("background-color", "yellow");
  }
  shirtImage.src = "../.." + get_picture_from_json(counter,variante);
  console.log("New path to image:", shirtImage.src);
};

function show_next_like() {
      // Gefällt mir

      // $.add_to_basket(get_variationsid_from_json(current_product,current_variante),get_articlenumber_from_json(current_product,current_variante));

      current_product = current_product + 1;
      if(current_product >= products.products.length) {
        current_product = 0;
      }
      current_variante = 0;
      setze_produkt(current_product,current_variante);
}

function show_next_dislike(){
  current_product = current_product + 1;
  if(current_product >= products.products.length) {
    current_product = 0;
  }
  current_variante = 0;
  setze_produkt(current_product,current_variante);
}

function show_next_variante(){
  current_variante = current_variante + 1;
  if(current_variante >= products.products[current_product].variations.length) {
    current_variante = 0;
  }
  setze_produkt(current_product,current_variante);
}

function show_pick_variante(number){
  current_variante = number - 1;
  if(current_variante >= products.products[current_product].variations.length) {
    current_variante = 0;
  }
  setze_produkt(current_product,current_variante);
}

function finish(){
  console.log('FInish');
}


function fill_varianten(produkt_counter,produkt_variante){
  $("#variantenchoice").html("");
  text = '<div class="column is-narrow"> <div class="box"> <p class="bd-notification is-primary has-text-centered"> <img src="" alt="pic" height="60px" width="60px"><br>  <b>1</b>  </p></div></div>';
  //console.log(products[produkt_counter].variations);
  /*
  console.log(products.products[produkt_counter].variations[0].articleNumber);
  return products.products[produkt_counter].variations[0].articleNumber;
  */
  for(i = 0;i<products.products[produkt_counter].variations.length;i++) {

    $('<div class="column is-narrow"> <div class="box"> <p class="bd-notification is-primary has-text-centered"> <img src="' + get_picture_from_json(produkt_counter,i) + '" alt="pic" height="60px" width="60px"><br>  <b>' + (i+1) + '</b>  </p></div></div>').appendTo("#variantenchoice");
  }

};


function get_articlenumber_from_json(produkt_counter,produkt_variante){
  //console.log(products[produkt_counter].variations);
  console.log(products.products[produkt_counter].variations[produkt_variante].articleNumber);
  return products.products[produkt_counter].variations[produkt_variante].articleNumber;
};

function get_variationsid_from_json(produkt_counter,produkt_variante){
  //console.log(products[produkt_counter].variations);
  console.log(products.products[produkt_counter].variations[produkt_variante].id);
  return products.products[produkt_counter].variations[produkt_variante].id;
};

function get_price_from_json(produkt_counter,produkt_variante){
  //console.log(products[produkt_counter].variations);
  console.log(products.products[produkt_counter].variations[produkt_variante].price.retailPrice);
  return products.products[produkt_counter].variations[produkt_variante].price.retailPrice;
};

function get_name_from_json(produkt_counter,produkt_variante){
  //console.log(products[produkt_counter].variations);
  console.log(products.products[produkt_counter].variations[produkt_variante].name);
  return products.products[produkt_counter].variations[produkt_variante].name;
};

function get_idid_from_json(produkt_counter,produkt_variante){
  //console.log(products[produkt_counter].variations);
  console.log(products.products[produkt_counter]["_id"]);
  return products.products[produkt_counter]["_id"];
};


function get_picture_from_json(produkt_counter,produkt_variante){
  //console.log(products[produkt_counter].variations);
  path = '/static/products/' + get_idid_from_json(produkt_counter,produkt_variante) + '_' + get_variationsid_from_json(produkt_counter,produkt_variante) + '.png?v=223';

  console.log(path);
  return path;
};



$.getJSON( "/static/products/all_together.json", function( data ) {
  var items = [];
  console.log(data);
  products = data;

  setze_produkt(0,0);
  /*
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
  */
});
