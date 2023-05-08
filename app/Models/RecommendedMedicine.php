<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecommendedMedicine extends Model
{
    use HasFactory;
    protected $table = 'recommended_medicines';
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id','id');
    }
    public function medicine()
    {
        return $this->belongsTo(Medicine::class, 'medicine_id','id');
    }
}
