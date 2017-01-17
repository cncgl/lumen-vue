<?php

class TestCase extends Laravel\Lumen\Testing\TestCase
{
  /**
   * Creates the application.
   *
   * @return \Laravel\Lumen\Application
   */
  public function createApplication()
  {
    $app = require __DIR__.'/../bootstrap/app.php';

    // $app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();
    return $app;
  }

  public function setUp()
  {
    parent::setUp();
    \Illuminate\Support\Facades\Artisan::call('migrate');
    \Illuminate\Support\Facades\Artisan::call('db:seed');
  }

  public function tearDown()
  {
    \Illuminate\Support\Facades\Artisan::call('migrate:reset');
    parent::tearDown();
  }
}
