<!DOCTYPE html>
<html>
<head>
    
    <title>VueAuth</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- UIkit CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.17/dist/css/uikit.min.css" />
    <link rel="stylesheet" type="text/css" href="{{ mix('css/custom.css') }}">

</head>
<body>

    <div id="app">
        <app-component></app-component>
    </div>

    <!-- UIkit JS -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.17/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.17/dist/js/uikit-icons.min.js"></script>
    <script src="{{ mix('js/custom.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>

</body>
</html>