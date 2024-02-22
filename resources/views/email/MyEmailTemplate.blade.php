<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Company Added</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
        }

        .card {
            max-width: 400px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .header {
            background-color: #007bff;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }

        .details {
            padding: 20px;
            font-size: 16px;
            line-height: 1.6;
        }

        .details strong {
            font-weight: bold;
            color: #28a745;
        }

        p {
            margin: 0 0 10px;
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="header">
            <h2>New Company Added</h2>
        </div>
        <div class="details">
            <p><strong>Added by:</strong> {{ Auth::user()->name }}</p>
            <p><strong>Name:</strong> {{ $company->name ?? 'null' }}</p>
            <p><strong>Email:</strong> {{ $company->email ?? 'null' }}</p>
            <p><strong>Website:</strong> {{ $company->website ?? 'null' }}</p>
            <p>This company was added by {{ Auth::user()->name }}. Thank you for using our platform!</p>
        </div>
    </div>
</body>
</html>
