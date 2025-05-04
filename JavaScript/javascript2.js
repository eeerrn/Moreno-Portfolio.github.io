 function getResult() {
            var num = parseInt(document.getElementById("numInput").value);
            var result1 = document.getElementById("result1");
            var result2 = document.getElementById("result2");

            if (num % 2 === 0) {
                result1.innerHTML = "THE NUMBER IS EVEN";
            } else {
                result1.innerHTML = "THE NUMBER IS ODD";
            }
            if (num <= 1) {
                result2.innerHTML = "INVALID";
            } else {
                var count = 0;
                for (var i = 1; i <= num; i++) {
                    if (num % i === 0) {
                        count++;
                    }
                }
                
                if (count <= 2) {
                    result2.innerHTML = "THE NUMBER IS PRIME";
                } else {
                    result2.innerHTML = "THE NUMBER IS COMPOSITE";
                }
            }
        }

        function converter() {
            var num = parseFloat(document.getElementById("input").value);
            var result1 = document.getElementById("result1");
            var cm = num * 100000
            result1.innerHTML = num + " KILOMETER IS " + cm + " cm."
        
    }

    