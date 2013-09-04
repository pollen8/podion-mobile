<?php
require '../vendor/autoload.php';

// Prepare app
$app = new \Slim\Slim();

// ORM Database

// Database information
$settings = array(
		'driver' => 'mysql',
		'host' => '127.0.0.1',
		'database' => 'deveci_podion',
		'username' => 'root',
		'password' => '',
		'collation' => 'utf8_general_ci',
		'charset' => 'utf8'
);


use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;

$capsule->addConnection($settings);
// Set the event dispatcher used by Eloquent models... (optional)
use Illuminate\Events\Dispatcher;
use Illuminate\Container\Container;
$capsule->setEventDispatcher(new Dispatcher(new Container));

// Set the cache manager instance used by connections... (optional)
//$capsule->setCacheManager(...);

// Make this Capsule instance available globally via static methods... (optional)
$capsule->setAsGlobal();

// Setup the Eloquent ORM... (optional; unless you've used setEventDispatcher())
$capsule->bootEloquent();

// Wild card match for api/{ModelName}
$app->get('/api/:name+', function ($items) use ($app) {
	$event = $items[0]::all()->take(4);
	echo $event->toJson();
});

// Define routes
$app->get('/events', function () use ($app) {
	//$event = \Event::where('id', '<>', 1 )->take(2)->get();
	$event = \Event::all()->take(4);
	echo "<pre>";print_R($event);
	echo $event->toJson();
});



// Run app
$app->run();
