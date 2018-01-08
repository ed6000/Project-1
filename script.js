function init() {
    user = [];
    winningNum = [];
    sameNum = [];
    $("#check").click(function() {
        user.push($('#one').val());
        user.push($('#two').val());
        user.push($('#three').val());
        user.push($('#four').val());
        user.push($('#five').val());
        user.push($('#bonus').val());
        user = user.map(Number)
        console.log(user)

        for (var i = 0; i < 6; i++) {
            winningNum.push(Math.ceil(Math.random() * 70))
        }
        console.log(winningNum);

        for (var m =0; m < winningNum.length; m++) { //Compare both arrays and push the same numbers to new array
            for (var k = 0; k < user.length; k++) {
                if (user[k] === winningNum[m]) {
                    sameNum.push(user[k]);
                }
                
            }
          
        }
        console.log({sameNum});
        console.log(sameNum.length + ' of your numbers match');
        user = [];
        winningNum = [];
        sameNum = [];
    });
}