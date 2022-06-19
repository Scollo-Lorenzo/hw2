<?php

session_start();

?>

<html>

    <head>

        <title> Lista PREFERITI di <?php echo Session("Username") ?> </title>

        <link href="https://fonts.googleapis.com/css?family=Pangolin:400,700|Proxima+Nova" rel="stylesheet" type="text/css">
        
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Koulen&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="<?php echo e(asset('css/Carrello_Fav.css')); ?>">
        <script src="<?php echo e(asset('js/listaPreferiti.js')); ?>" defer> </script>

        <script type="text/javascript">
                const ROUTE_PREFERITI = "<?php echo e(route('listaPreferiti')); ?>";
                const ROUTE_HOME = "<?php echo e(route('home')); ?>";
        </script>
		<meta name="viewport" content="width=device-width, initial-scale=1"> 

    </head>

    <body>

        <main>


                    <div id="header">
                                    
                        <section id="goBack" class="inline">

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLrLuBmv9_C0QrrC0hbtCSXUgRQSTj6uIpyedGXnqOXJcKVc1yDlSB2AFeCRKgYYA09E&usqp=CAU">
                            
                        </section>

                        Lista PREFERITI di: <h1> <?php echo Session("Username") ?> </h1> Totale: <h1 id="Totale"> </h1>
                        
                        <br>
                                    
                    </div>

                    <section id="favList">

                        <!-- qui andrnno tutte le scarpe prelevate dal DB -->

                    </section>

        </main>

    </body>

</html>
<?php /**PATH C:\xampp\htdocs\laravel\hw2\resources\views/listaPreferiti.blade.php ENDPATH**/ ?>