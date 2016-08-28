<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmail;

class ContactController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function store()
  {
    $mail = [
      'from'    => 'subcigel@gmail.com',
      'f_name'  => 'Nelsen',
      'to'      => 'subcigel@gmail.com',
      'to_name' => 'Poulsen',
      'subject' => 'Thanks for your reservation.'
    ];
    // ジョブのインスタンスを生成
    $job = new SendEmail(
      'emails.reservation',
      ['name' => ucfirst('niikunihiro')],
      $mail
    );
    // jobs テーブルに登録
    $this->dispatch($job);
    echo 'finished!';

  }

  //
}
