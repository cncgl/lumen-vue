<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
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
    // if (!app()->environment('production')) {
    if (app()->isLocal() || app()->runningUnitTests()) {
      DB::listen(function ($query) {
        Log::debug('sql', [$query->sql, $query->bindings, $query->time]);
      });
    }
  }
}
