<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    { 
      //acesso a camada model
       $users = User::all();
      
       //debug
      // dd($users);
    
       return view('users',['users' => $users]); 
    }
}
