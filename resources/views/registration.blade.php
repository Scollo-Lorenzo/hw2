<html>

    <head>

        <title> HW1 Registration </title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="{{asset('css/file.css')}}">
        <script src="{{asset('js/registration.js')}}" defer> </script>

        <script type="text/javascript">
                const PROVA_ROUTE = "{{route('reg')}}";
        </script>

        <meta name="viewport" content="width=device-width, initial-scale=1"> 

    </head>

    <body>

        <main>

                <form name = "nome_form_reg" method = "POST" action="{{route('reg')}}"> 
                @csrf
                <label id="tastoAccedi_Registrati">  Hai già un Account? -<a href="{{ route('login') }}"> ACCEDI </a>- allora!! </label>

                    <p>

                        <label> Username: <input type="text" name ="Username" placeholder="nome1947" id="username" value="{{ old('Username') }}"> </label>
                        <span> </span>
                    </p>
    
                    <p>

                        <label> Email: <input type="text" name ="Email" placeholder="example@live.it" id="email" value="{{ old('Email') }}"> </label>
                        <span> </span>

                    </p>

                    <p>

                        <label> Data di Nascita: (AAAA-MM-GG) <input type="text" name ="DataNascita" placeholder="2000-02-24" id="data" value="{{ old('DataNascita') }}"> </label>
                        <span> </span>

                    </p>
    
                    <p>

                        <label> Password: <input type="password" name ="Password" placeholder="Almeno 8 Caratteri" id="password" value="{{ old('Password') }}"> </label>
                        <span> </span>
                    </p>

                    <p>

                        <label> &nbsp; <input type="submit" value="REGISTRATI" {{-- disabled --}}> </label>

                    </p>

                    <label> <span id="errorMsg"> </span> </label>

                </form>

            </main>

    </body>

</html>