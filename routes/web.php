<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/categorias/{flag}', function($flag) {
  return "Produtos da categoria: {$flag}";
});

Route::get('/users',[UserController::class, 'index']);


Route::get('/', function () {
  return view('welcome'); 
});
