function Sum() {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var sum = num1 + num2;
            document.getElementById("result").innerHTML = "Sum: " + sum;
        }
        function difference() {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var sum = num1 - num2;
            document.getElementById("result").innerHTML = "Difference: " + sum;
        }
        function quotient() {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var sum = num1 / num2;
            document.getElementById("result").innerHTML = "Quotient: " + sum;
        }
        function product() {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var sum = num1  *  num2;
            document.getElementById("result").innerHTML = "Product: " + sum;
        }