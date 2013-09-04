<?php
require 'vendor/autoload.php';

$app = new \Slim\Slim();

echo "Here";
$app->get('/podion-mobile/Fabrik4/hello/:name', function ($name) {
	echo "Hello, $name";
});

$app->run();
?>
<a href="hello/rob">heoo</a>