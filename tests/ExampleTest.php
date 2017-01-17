<?php

use Laravel\Lumen\Testing\DatabaseTransactions;

class ExampleTest extends TestCase
{
  use DatabaseTransactions;
  /**
   * A basic test example.
   *
   * @return void
   */
  public function testExample()
  {
    $this->seeInDatabase('articles', ['title' => 'test']);
    // $this->assertTrue(true);
  }
}
