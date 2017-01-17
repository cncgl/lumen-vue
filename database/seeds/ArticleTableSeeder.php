<?php

use \Illuminate\Database\Seeder;

/**
 * Created by IntelliJ IDEA.
 * User: shigeru
 * Date: 17/01/11
 * Time: 1:45
 */
class ArticleTableSeeder extends Seeder
{
  public function run()
  {
    DB::table('articles')->insert([
      'title' => 'test',
      'contents' => 'test'
    ]);
    factory(\App\Article::class, 10)->create();
  }
}