<?php
$username="root";
$password="";
$database="raqtdaan";


function parseToXML($htmlStr)
{
$xmlStr=str_replace('<','&lt;',$htmlStr);
$xmlStr=str_replace('>','&gt;',$xmlStr);
$xmlStr=str_replace('"','&quot;',$xmlStr);
$xmlStr=str_replace("'",'&#39;',$xmlStr);
$xmlStr=str_replace("&",'&amp;',$xmlStr);
return $xmlStr;
}

// Opens a connection to a MySQL server
$connection=mysqli_connect ('localhost', $username, $password);
if (!$connection) {
  die('Not connected : ' . mysqli_error($connection));
}

// Set the active MySQL database
$db_selected = mysqli_select_db( $connection, $database);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysqli_error());
}

// Select all the rows in the markers table
$query = "SELECT * FROM blood_banks_mapping WHERE 1";
$result = mysqli_query($connection, $query);
if (!$result) {
  die('Invalid query: ' . mysqli_error($connection));
}

header("Content-type: text/plain");

// Start XML file, echo parent node
echo "<?xml version='1.0' ?>\n";
echo "<markers>\n";
$ind=0;
// Iterate through the rows, printing XML nodes for each
while ($row = @mysqli_fetch_assoc($result)){
  // Add to XML document node
  echo '<marker ';
  echo 'sr_no="' . $row['sr_no'] . '" ';
  echo 'blood_bank_name="' . parseToXML($row['blood_bank_name']) . '" ';
  echo 'address="' . parseToXML($row['address']) . '" ';
  echo 'mobile_no="' . $row['mobile_no'] . '" ';
  echo 'latitude="' . $row['latitude'] . '" ';
  echo 'longitude="' . $row['longitude'] . '" ';
  echo 'type="' . 'Blood_Bank' . '" ';
  echo "/>\n";
  $ind = $ind + 1;
}

// End XML file
echo '</markers>';

?>
