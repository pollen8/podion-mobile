<?php
require '../vendor/autoload.php';
require 'setheaders.php';
require 'configuration.php';

// Prepare app
$app = new \Slim\Slim();

// DB ini
require 'capsule.php';

// String inflector
use ICanBoogie\Inflector;

/*
 * Wild card match for api/{ModelName}
 * DB Models are auto-loaded via composer, if you add a new model you need to do:
 *
 * > php composer.phar install
 *
 * For it to be loaded
 */


$app->get('/api/:name+', function ($items) use ($app)
{
	$inflector = Inflector::get();
	$name = $inflector->singularize($items[0]);

	$model = ucfirst($name);
	$event = $model::all();//->take(4);
	$return = new stdClass;

	// Format to Ember data expected format
	$return->$name = $event->toArray();
	echo json_encode($return);
});

// Define routes - test example - can remove
$app->get('/events', function () use ($app) {
	//$event = \Event::where('id', '<>', 1 )->take(2)->get();
	$event = \Event::all()->take(4);
	echo $event->toJson();
});

// Run app
$app->run();
