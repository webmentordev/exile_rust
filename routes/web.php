<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return view('welcome');
})->name("home");

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/discord', function(){
    return redirect('https://discord.gg/rCT2DxMt');
})->name('discord');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'is_admin', 'verified'])->name('dashboard');
Route::get('/servers', [ServerController::class, 'show'])->name('show.servers');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/admin-servers', [ServerController::class, 'index'])->name('servers');
    Route::post('/admin-servers', [ServerController::class, 'store']);
});

require __DIR__.'/auth.php';