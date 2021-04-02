$(selector).html(form)
let totalItems = 0;
let totalPrice = 0;
if (totalItems <= 150) {
    $('.custom-select').on('input', function () {
        $('#submit').prop('disabled', false)
    });
    $('#submit').on('click', function () {
        let productName =  $('.custom-select').val();
        let price = Number($('#price').val());
        let quant = Number($('#quantity').val());
        totalItems += quant;
        totalPrice += price;
        let string = `Product: ${productName} Price: ${price} Quantity: ${quant}`
        let li = $(`<li>${string}</li>`)
        $('.display').append(li);
        $('#submit').prop('disabled', true)
        $('.custom-select').val('');
        $('#sum').val(totalPrice)
        if  (totalItems <= 150){
            $('#capacity').val(totalItems)
        } else {
            $('#capacity').val('full').addClass('fullCapacity');
            $('.custom-select').prop('disabled',true).val('');
            $('#price').prop('disabled',true)
            $('#quantity').prop('disabled',true)
        }
    })
}
