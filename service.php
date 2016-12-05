<?php
$url = parse_url(getenv("CLEARDB_DATABASE_URL"));

$server = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$db = substr($url["path"], 1);

$resultArray = array()
array_push($resultArray, $server);
array_push($resultArray, $username);
array_push($resultArray, $password);
array_push($resultArray, $db);
echo json_encode($resultArray);

$conn = new mysqli($server, $username, $password, $db);
?>
