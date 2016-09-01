<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Mail\Mailer;
use DB;
use Log;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {

    $this->app->singleton('mailer', function ($app) {
      $app->configure('services');
      return $app->loadComponent('mail', 'Illuminate\Mail\MailServiceProvider', 'mailer');
    });


    // if (!app()->environment('production')) {

    // if (app()->isLocal() || app()->runningUnitTests()) {
      DB::listen(function ($query) {
        Log::debug('sql', [$query->sql, $query->bindings, $query->time]);
      });
    // }
  }
}
