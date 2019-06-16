function romanizer(num) {
    var values = {
        //1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C'
    };

    for(var i = 1; i < i <= num.toString().length; i++){

        var digit = num % (10**i);
        if(digit < 40){
            if(){

            }
        }
    }


}


module.exports = romanizer;