<html>

    <head>



        <title> HM1 Login</title>

        <link href="https://fonts.googleapis.com/css?family=Pangolin:400,700|Proxima+Nova" rel="stylesheet" type="text/css">
        
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="{{asset('css/file.css')}}">
        <script src="{{asset('js/login.js')}}" defer> </script>

        <script type="text/javascript">
                const ROUTE_LOG = "{{route('login')}}";
        </script>

		<meta name="viewport" content="width=device-width, initial-scale=1"> 

    </head>

    <body>

        <main>

            <form name = "nome_form_login" method = "POST" action="{{ route('login') }}"> 
            @csrf
            <label id="tastoAccedi_Registrati">  Non hai un Account? -<a href="{{ route('reg') }}"> REGISTRATI </a>- allora!! </label>

                <p>

                    <label> Username: <input type="text" name ="Username" id="username" value="{{ old('Username') }}"> </label>
                    <span> </span>
                    <span id="gif"> </span>

                </p>

                <p>

                    <label> Password: <input type="password" name ="Password" id="password" value="{{ old('Password') }}"> </label>
                    <span> </span>
                    <span id="gif"> </span>

                </p>

                <p>

                    <label> &nbsp; <input type="submit" value = "LOGIN" name = "bottoneLogin"> </label>

                </p>

                <label> <span id="errorMsg"> </span> </label>

            </form>

        </main>

    </body>

</html>