let generatedIds = [];

for (let i = 1; i <= 3; i++) {
    $.ajax({
        url: 'https://dummyjson.com/products/' + i,
        method: 'GET',
        success: function (response) {
            var $product = $('.product-template').clone().removeAttr('id').removeClass('product-template').addClass('product-' + i);
            console.log(response);
            $product.find('.img').attr('src', response.images[0]).attr('alt', response.title);
            $product.find('.title').text(response.title);
            $product.find('.brand').text(response.brand);

            $realPrice = response.price;
            $discountedPrice = Math.round($realPrice * (1 - (response.discountPercentage / 100)));

            $product.find('.price').text($discountedPrice + "€");
            $product.find('.old-price').text($realPrice + "€");
            $product.find('.stock').text(response.stock);
            $('body').append($product);

            generatedIds.push(i);
        },
    });
}

$('#product-generation').on('click', function () {
    if (generatedIds.length >= 100) {
        $(this).prop('disabled', true);
        return;
    }

    let newId = 1;
    while (generatedIds.indexOf(newId) >= 0) {
        newId = Math.floor(Math.random() * 100) + 1;
    }

    $.ajax({
        url: 'https://dummyjson.com/products/' + newId,
        method: 'GET',
        success: function (response) {
            let $product = $('.product-template').clone().removeAttr('id').removeClass('product-template').addClass('product-' + newId);
            $product.find('.img').attr('src', response.images[0]).attr('alt', response.title);
            $product.find('.title').text(response.title);
            $product.find('.brand').text(response.brand);

            let realPrice = response.price;
            let discountedPrice = Math.round(realPrice * (1 - (response.discountPercentage / 100)));

            $product.find('.price').text(discountedPrice + "€");
            $product.find('.old-price').text(realPrice + "€");
            $product.find('.stock').text(response.stock);
            $('body').append($product);

            generatedIds.push(newId);
        },
    });
});