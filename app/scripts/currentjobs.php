<?php
$servername = "localhost";
$username = "id1275633_root";
$password = "password";
$db='id1275633_jobs';
// Create connection
$conn = new mysqli($servername, $username, $password,$db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM currentjobs";
$result = mysqli_query($conn, $sql);
$rows = array();
while($temp = mysqli_fetch_assoc($result)) {
    $rows[] = $temp;
}
echo json_encode($rows);
?>
