<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    
	public function get_auth_user()
	{
		if(Auth::check()) {

			return response()->json([
				'validation' => true,
				'user' => Auth::user()
			]);

		} else {

			return response()->json([
				'validation' => false
			]);

		}
	}

}
