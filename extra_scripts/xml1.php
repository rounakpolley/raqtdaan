<?php
//require("phpsqlajax_dbinfo.php");

// Start XML file, create parent node
$doc = domxml_new_doc("1.0");
$node = $doc->create_element("markers");
$parnode = $doc->append_child($node);

// Opens a connection to a MySQL server
$connection=mysql_connect ('localhost', 'root', '');
if (!$connection) {
  die('Not connected : ' . mysql_error());
}

// Set the active MySQL database
$db_selected = mysql_select_db('raqtdaan', $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
}

// Select all the rows in the markers table
$query = "SELECT * FROM blood_banks_mapping WHERE 1";
$result = mysql_query($query);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}

header("Content-type: text/xml");

// Iterate through the rows, adding XML nodes for each
while ($row = @mysql_fetch_assoc($result)){
  // Add to XML document node
  $node = $doc->create_element("marker");
  $newnode = $parnode->append_child($node);

  $newnode->set_attribute("sr_no", $row['sr_no']);
  $newnode->set_attribute("blood_bank_name", $row['blood_bank_name']);
  $newnode->set_attribute("latitude", $row['latitude']);
  $newnode->set_attribute("longitude", $row['longitude']);
  $newnode->set_attribute("address", $row['address']);
  $newnode->set_attribute("mobile_no", $row['mobile_no']);
  $newnode->set_attribute("type", 'Blood_Bank');
}

$xmlfile = $doc->dump_mem();
echo $xmlfile;

?>