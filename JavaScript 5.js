<!DOCTYPE html>
<html>
<body>

<h2>JavaScript is Case Sensitive</h2>

<p>Try to change lastName to lastname.</p>

<p id="demo"></p>

<script>
let lastname, lastname;
lastName = "Doe";
lastname = "Peterson";
document.getElementById("demo").innerHTML = lastname;
</script>

</body>
</html>