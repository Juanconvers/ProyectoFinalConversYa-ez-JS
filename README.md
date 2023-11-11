# ProyectoFinalConversYa-ez-JS
Proyecto Final del Curso Javascript de Coderhouse

Repositorio de preentrega No. 3 - CODERHOUSE Javascript

// READ FIRST:

                                        NOTAS DE LA ENTREGA DE PROYECTO FINAL
        
                                                1. INTRODUCCIÓN

** CALCULADORA PRA USOS JUDICIALES - DEFINICIÓN DE LA COMPETENCIA PARA PROCESOS DE PERTENENCIA EN COLOMBIA AÑO 2023 **

Explicación del programa:

    1. En el proceso judicial de pertenencia el juez decide si alguien puede ser propietario de un inmueble sólo por el hecho de ocuparlo.
    2. La "competencia judicial" es definir a cual Juez al que le corresponde decidir el asunto, pues hay muchos tipos de jueces.
    3. La forma de definir esta competencia depende del valor del inmueble que se quiere adquirir. 
        En Colombia se le llama "cuantía" y dicho valor es el avalúo catastral del inmueble, es decir, el precio que el inmueble tiene para el estado Colombiano.
    4. Puede ser que no se quiera adquirir la totalidad del inmueble (100%), sino que se se quiera otro porcentaje menor.
    5. Esta calculadora determina el valor de la cuantía según el porcentaje que se pretenda adquirir.
    6. El valor puede tener tres categorías: 

                    1. Ser inferior a $46.400.000 COP --> Juzgado Municipal o de Pequeñas Causas
                    2. Estar entre $46.400.000 COP y $174.000.000 COP --> Juzgado Municipal
                    3. Ser mayor a $174.000.000 COP --> Juzgado del Circuito

                                    
                                    2. INSTRUCCIONES DE USO DEL PROGRAMA

    1. Abra el archivo register.html en el navegador.

    2. Cree uno o varios usuarios para el programa digitando usuario y contraseña y pulsando "Registrarse". EL programa le indicará que el registro se hizo correctamente.

        Estos datos quedarán almacenados en un array en el LocalStorage para el funcionamiento del login.

    3. Pulse el botón "Tengo una cuenta". Esta lo dirigirá al Login.

    4. En la página de Login use su usuario y contraseña para entrar a la página home del programa.

    5. Lea las instrucciones y llene los datos del formulario ( Nombre del caso - Avalúo catastral y Porcentaje que ocupa el predio a demandar).

    6. Presione el botón "Calcular" y un aunucio Toastify le durá que su cálculo ya está hecho.

    7. Si lo datos fueron insertados correctamente, el programa calculará la competencia judicial de caso y presentará los resultados en la tabla de "CASOS INGRESADOS Y CALCULADOS".  

    8. Repita el paso anterior a placer. Todos los casos de la sesión serán impresos en la tabla mencionada.

        Estos datos quedarán almacenados en un array en el SessionStorage para la consulta y uso del usuario mientas dure su sesión en esa pestaña.

    9. Abajo de la tabla "CASOS INGRESADOS Y CALCULADOS" encontrará la sección "ESTADÍSTICA". En ella pulse el botón "Procesar Información" y, después de un anuncio de "Por favor espera mientras procesamos tu solicitud", el programa llenará una tabla donde le indicará al usuario la cantidad total de casos computados en la sesión, la cantidad de casos por cada competencia judicial y sus porcentajes correspondientes.

              El delay del anuncio "Por favor espera mientras procesamos tu solicitud" dura 3 segundos y funciona con SetTimeout. 

    10. El botón "Limpiar Tabla" de esta sección "ESTADÍSTICA" borra los datos de la tabla para seguirlos actualizando con más entradas en la función de Calculadora Judicial.

    11. Finalmente el usuario encontrará la sección "NUESTROS CLIENTES NOS RECOMIENDAN" que reune comentarios de clientes satisfechos.

        La información de estos usuarios fue importada al programa desde la API JSONPLACEHOLDER tomando de sus arrays nombre de usuario y comentarios.

    12. Si quiere salir del programa, pulse el botón de Cerrar Sesión ubicado en la parte superior derecha de la página. El usuario será devuelto a la página Login y los datos de los cálculos realizados en su sesión se borrarán.




NOTAS DE VERSIONES ANTERIORES DEL PROGRAMA:

                                NOTAS DE LAS CORRECCIONES DE LA PREENTREGA No. 3

Última corrección: EL register y el login funcinan perfectamente.                                

                        ** CAMBIOS Y MEJORAS RESPECTO DE PROYECTO DE LA PREENTREGA No. 2 **

1. USO DEL SORAGE Y JSON: Mejoras del programa de cálculo de competencia judicial:

     Ahora los datos y los cálculos realizados en el programa (index.html con (main.js y tools.js)) se guardan en una key del SessionStorage y re renderizan en la tabla inferior cada vez que se refresca la página.
    Escogí el Session storage porque la idea es que se borren los datos facilmente al cambiar de usuario. 

    Este lo desarrollé primero.

    NOTA: El sistema funciona perfectamente.

2. USO DEL SORAGE Y JSON: REGISTRO Y LOGIN:

    Se creó un sistema de registro de usuarios (register.html con register.js y registerfunctiopn.js) que se guarda en forma de array en una key del Local Storage.
    En el login delprograma (login.html con login.js) se llama a esta key para comparar con el usuario de login.

    NOTA: EL register funciona perfectamente guardando la indfo en el localstorage.
            En el login me esforcé por desarrollar una condicional que compare los datos del array de usuarios registrados con el objeto de usuario que se loguea, no pude lograrlo a tiempo. 

                                            NOTAS DE LA PREENTREGA No. 3

                        ** CAMBIOS Y MEJORAS RESPECTO DE PROYECTO DE LA PREENTREGA No. 2 **

1. Se creó un sistema de Login para entrar al home de la página. 

    Funciona usando la memoria del Local Storage y modificando del DOM:

        a. El programa primero guarda el usuario y contraseña modificadas por JSON en el Local Storage: 
            
            Usuario: "Pedro" 
            Contraseña: "1234"

        b. Luego una función activada al hacer SUBMIT llama a los datos del Local Storage, los parsea y los compara con los Input del usuario.
        
        c. Si coinciden, se abre el HOME del sitio.
        
        d. Si no coinciden, aparece un mensaje de "usuario o contraseña incorrectos" el cual se elaboró modificando el DOM con innerHTML.

2. Se modificaron los archivos JS y HTML del home (index):

    a. Todos los datos de entrada se captan en el html via AddEventListener para ser procesados.

    b. Los resultados del cálculo realizado por la función aritmética y el condicional que clasifica dicho cómputo, se muestran en el HTML en una tabla a la que se añaden filas cada vez que se presiona el botón "Registrar". (Uso de modificaciones al DOM)

    c. Al mismo tiempo se despliegan tres líneas de texto en la parte inferior indicando la cantidad de casos que se han introducido en el registro.


                                            NOTAS DE LA PREENTREGA No. 2

                        ** CAMBIOS Y MEJORAS RESPECTO DE PROYECTO DE LA PREENTREGA No. 1 **

1. Se integró una nueva funcionalidad al programa que consiste en decirle al usuario cuántos de los casos ingresados en su consulta corresponden a una de las tres categorías de procesos judiciales (mínima, menor o mayor cuantía)

    Para lograr esto:
    1.1. Se dispuso que la información introducida por el usuario:  
        a. Nombre del caso
        b. La cuantía resultante del cálculo hecho por el programa
        c. Y la denominación jurídica de la cuantía
        Formaran un objeto llamado "caso".
    1.2. Cada uno de estos objetos formará un array llamado "listaCasos" - Uso del método Push para formar el array.
    1.3. Cuando se termina de ingresar la información y de formar el array, los datos se filtran y se forma un array que corresponda a cada categoría (mínima, menor o mayor cuantía).
    1.4. Luego se imprime el resultado de la filtración indicando cuántos casos resultaron de la consulta.

2. Se modificó el archivo html con las preguntas propias del programa.

3. Se dejaron listos los archivos SASS del proyecto, pues se borró el código sobrante que venía del curso de    Desarrollo Web.


                                            NOTAS DE LA PREENTREGA No. 1


** CALCULADORA PRA USOS JUDICIALES - DEFINICIÓN DE LA COMPETENCIA PARA PROCESOS DE PERTENENCIA EN COLOMBIA AÑO 2023 **

Explicación del programa:

1. En el proceso judicial de pertenencia el juez decide si alguien puede ser propietario de un inmueble sólo por el hecho de ocuparlo.
2. La "competencia judicial" es definir a cual Juez al que le corresponde decidir el asunto, pues hay muchos tipos de jueces.
3. La forma de definir esta competencia depende del valor del inmueble que se quiere adquirir. 
    En Colombia se le llama "cuantía" y dicho valor es el avalúo catastral del inmueble, es decir, el precio que el inmueble tiene para el estado Colombiano.
4. Puede ser que no se quiera adquirir la totalidad del inmueble (100%), sino que se se quiera otro porcentaje menor.
5. Esta calculadora determina el valor de la cuantía según el porcentaje que se pretenda adquirir.
6. El valor puede tener tres categorías: 

                  1. Ser inferior a $46.400.000 COP --> Juzgado Municipal o de Pequeñas Causas
                  2. Estar entre $46.400.000 COP y $174.000.000 COP --> Juzgado Municipal
                  3. Ser mayor a $174.000.000 COP --> Juzgado del Circuito
