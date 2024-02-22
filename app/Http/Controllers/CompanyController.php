<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use App\Http\Requests\Companyrequest;
use App\Mail\SampleMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $companies = Company::get();

        return Inertia::render('Companies/Index', [
            'companies' => $companies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Companies/Create');
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(Companyrequest $request)
    {
        //store image if image is selected
        $imageName = $request->avatar ? $this->saveImage($request) : null;

        $company = new Company;
        $company->name = $request->name;
        $company->email = $request->email;
        $company->logo = $imageName;
        $company->website = $request->website;
        $company->save();

        //send email if exist
        if ($request->email) 
        {
            $this->sendEmail($company);
           
        }
        return Redirect::route('company.index')->with('message', 'Company Created  Successfully.');

    }



    /**
     * Display the specified resource.
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company)
    {
        // return $company;
        return Inertia::render('Companies/Edit', [
            'company' => $company
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Companyrequest $request)
    {
        // dd($request->toArray());
        $validated = $request->validate([
            'id' => 'required|integer|max:255',
        ]);
        $company =  Company::findOrFail($request->id);

        if ($request->avatar) {

            if ($company->logo && Storage::exists('images/' . $company->logo)) {
                Storage::delete('images/' . $company->logo);
            }
           $imageName = $this->saveImage($request);
        }

        $company->name = $request->name;
        $company->email = $request->email;
        $company->website = $request->website;
        $company->update();
        return Redirect::route('company.index')->with('message', 'Company Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company)
    {
        $company->delete();
        return Redirect::route('company.index')->with('message', 'company deleted  successfully.');
    }
    // Email function
    public function sendEmail($company){
        try {
            Mail::to('test@gmail.com')
                ->send(new SampleMail($company));
            return Redirect::route('company.index')->with('message', 'company created  successfully.');
        } catch (\Exception $e) {
            // Email sending failed
            return Redirect::route('company.index')->with('message', 'Error sending email: ' . $e->getMessage());
        }
    }
    //store image in stroage 
    public function saveImage($request)
    {
            $originalName = $request->avatar->getClientOriginalName();
            $extension = $request->avatar->extension();
            $uuid = Str::uuid()->toString();
            $uuidShort = substr($uuid, 0, 5);
            $timestamp = now()->timestamp;
            $imageName = $uuidShort . '_' . $timestamp . '.' . $extension;
            // Store the file with the unique name in the 'images' directory
            $request->avatar->storeAs('public/images', $imageName);
            return $imageName;
    }
}
