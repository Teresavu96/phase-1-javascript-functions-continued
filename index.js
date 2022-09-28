function saturdayFun(someWhere = "roller-skate"){
    return `This Saturday, I want to ${someWhere}!`
}
saturdayFun ()
function mondayWork (okay = "go to the office"){
    return `This Monday, I will ${okay}.`
}
function wrapAdjective (mode = "*"){
    return function(message = "a hard worker"){
        return `You are ${mode}${message}${mode}!`
    }
}