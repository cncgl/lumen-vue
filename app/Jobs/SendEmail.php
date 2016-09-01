<?php

namespace App\Jobs;

use Illuminate\Contracts\Bus\SelfHandling;
use Illuminate\Contracts\Mail\Mailer;
// use Illuminate\Mail\Mailer;
// use Illuminate\Support\Facades\Mail;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendEmail extends Job implements SelfHandling, ShouldQueue {
// class SendEmail extends Job implements ShouldQueue {

  /** @var string view name */
  protected $view;
  /** @var array ビューに割り当てるデータ */
  protected $data;
  /** @var array メールの送信先等の属性 */
  protected $mail;

  public function __construct($view, $data, $mail)
  {
    $this->view = $view;
    $this->data = $data;
    $this->mail = $mail;
  }

  /**
   * @param Mailer $mailer
   */
  public function handle(Mailer $mailer)
  {
    $mail = $this->mail;
    $mailer->send($this->view, $this->data, function ($message) use ($mail)
    {
      $message->subject($mail['subject'])
        ->from($mail['from'], $mail['f_name'])
        ->to($mail['to'], $mail['to_name']);
    });
  }
}
