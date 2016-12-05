<?php
$url = parse_url(getenv("CLEARDB_DATABASE_URL"));

$server = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$db = substr($url["path"], 1);


$conn = new mysqli($server, $username, $password, $db);
$sql = "SELECT * FROM users";

if ($results = mysqli_query($con, $sql)){
    $resultArray = array();
    $tempArray = array();

    while ($row = results->fetch_object()) {
        $tempArray = $row;
        array_push($resultArray, $tempArray);
    }

    echo json_encode($resultArray);
}
mysqli_close($con);
?>
