<?php
$servername = "localhost";
$username = "root";
$password = "root";
$db='jobs';
// Create connection
$conn = new mysqli($servername, $username, $password,$db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT contract_id, first_name, last_name, start_date, end_date, location FROM currentjobs";
$result = mysqli_query($conn, $sql);
$rows = array();
while($temp = mysqli_fetch_assoc($result)) {
    $rows[] = $temp;
}
echo json_encode($rows);
?>
