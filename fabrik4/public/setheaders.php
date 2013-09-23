<?php
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
	header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {


		if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']) && (
			$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'POST' ||
			$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'DELETE' ||
			$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'] == 'PUT' )) {
			header('Access-Control-Allow-Origin: *');
			header("Access-Control-Allow-Credentials: true");
			header('Access-Control-Allow-Headers: X-Requested-With');
			header('Access-Control-Allow-Headers: Content-Type');
			header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT'); // http://stackoverflow.com/a/7605119/578667
			header('Access-Control-Max-Age: 86400');
		}
		exit;

}