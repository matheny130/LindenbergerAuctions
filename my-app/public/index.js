$(document).ready(function () {
  var mainContent = $("#main-content");




  var url = window.location.search;
  // if we click on a recipe, we redirect to that recipe
  if (url.indexOf("?id=") !== -1) {
    var productId = url.split("=")[1];
    console.log("id of query item: " + productId);
    getOneProduct(productId);
  } else {
    getProducts();
  }

  function getOneProduct(id) {
    $.get("/api/products?id=" + id, function (data) {
      console.log("Product retrieved: ", data);

      if (!data || !data.length) {
        displayEmpty();
      } else {
        displayOneProduct(data[0]);
      }
    });
  };


  function getProducts() {
    $.get("/api/products", function (data) {
      console.log("Products retrieved: ", data);
      if (!data || !data.length) {
        displayEmpty();
      } else {
        displayProducts(data);
      }
    });
  };

  function displayEmpty() {
    mainContent.empty();
    var messageH2 = $("<h2>");
    messageH2.html("No products yet");
    mainContent.append(messageH2);
  };

  function displayOneProduct(product) {
    $(".jumbotron").addClass("hide");
    mainContent.empty();
    var card = $("<div>")
      .data("product", product)
      .addClass("card");
    var cardBody = $("<div>")
      .addClass("card-body");

    var cardTitle = $("<h4>")
      .addClass("card-title")
      .text(product.title.toUpperCase());

    var cardPrice = $("<h5>")
      .addClass("card-subtitle text-muted")
      .text("$" + product.price);



    var description = $("<p>")
      .text(product.description);
    var pic = $("<img src=src/images/>")
      .text(product.picture);


    recipe.Ingredients.map(function (ingred) {
      var item = $("<li>");
      if (ingred.amount === " " && ingred.measurement === " ") {
        item.text(ingred.ingredient);

      } else if (ingred.measurement === " ") {
        item.text(ingred.amount + " MUAHAHAHA ALIS IF STATEMENT WORKED " + ingred.ingredient);
      } else {
        item.text(ingred.amount + " " + ingred.measurement + " " + ingred.ingredient);
      }
      ingredList.append(item);
    });
    ingreds.append(ingredList);

    cardBody.append(cardTitle, cardPrice, prepTime, description, pic, instructions);
    card.append(cardBody);
    mainContent.append(card);
  };


  function displayProducts(retrievedProducts) {
    mainContent.empty();
    mainContent.addClass("card-columns");
    retrievedProducts.forEach(function (product) {
      var productCard = createRow(product);
      mainContent.append(productCard);
    });
  };

  function createRow(product) {
    var card = $("<div>");
    card.data("product", product);
    card.addClass("card");

    var titleLink = $("<a href='/product?id=" + product.id + "'></a>");
    var title = $("<h5>");
    title.text(product.title);
    titleLink.append(title);
    var price = $("<h6>");
    price.addClass("text-muted");
    price.text("$" + product.price);
    var pic = $("<img src=src/images/>")
      .text(product.picture);
    var description = $("<div>")
      .text(product.description);

    var cardBody = $("<div>");
    cardBody.addClass("card-body");

    cardBody.append(titleLink, title, price, pic, description);


    card.append(cardBody);
    return card;
  };


});