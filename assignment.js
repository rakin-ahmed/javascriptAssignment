function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "invalid"
    } else {
        var meter = kilometer * 1000
    }
    return meter
}

function budgetCalculator(watch, smartPhone, laptop) {
    watchPrice = watch * 50
    smartPhonePrice = smartPhone * 100
    laptopPrice = laptop * 500
    totalPrice = watchPrice + smartPhonePrice + laptopPrice
    return totalPrice
}

function hotelCost(days) {
    if (days < 11) {
        totalHotelCost = days * 100
    }
    else if (days < 21) {
        firstTermCost = 10 * 100
        remainingDays = days - 10
        secondTermCost = remainingDays * 80
        totalHotelCost = firstTermCost + secondTermCost
    }
    else {
        firstTermCost = 10 * 100
        secondTermCost = 10 * 80
        remainingDays = days - 20
        thirdTermCost = remainingDays * 50
        totalHotelCost = firstTermCost + secondTermCost + thirdTermCost
    }
    return totalHotelCost
}

function megaFriend(names) {
    var maxName = names[0]
    var maxLength = maxName.length
    for (let i = 0; i < names.length; i++) {
        var element = names[i];
        var length = element.length
        if (length > maxLength) {
            maxName = element
        }
    } return maxName
}


var result1 = kilometerToMeter(912)
var result2 = budgetCalculator(5, 2, 1)
var result3 = hotelCost(71)
var result4 = megaFriend(["osama bin laden", "donald trump", "mohammad bin salman", "boris johnson", "jhankar mahbub"])

// it was mentioned in the video not to use console.log inside function and to use return instead. so i have used console.log after returning to see if the code works. couldn't understand if that is also prohibited or not. 
console.log("result-1:", result1, "meter");
console.log("result-2:", result2, "Taka");
console.log("result-3:", result3, "Taka");
console.log("result-4:", result4);