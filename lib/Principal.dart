
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:playftubolweb/Utils/utils.dart';

class Principal extends StatefulWidget {
  const Principal({Key? key}) : super(key: key);

  @override
  State<Principal> createState() => _PrincipalState();
}

class _PrincipalState extends State<Principal> {
  @override
  Widget build(BuildContext context) {

    pantallaGeneral = MediaQuery.of(context).size;
    
    return Scaffold(
      body: SingleChildScrollView(
        child: Container(
          alignment: Alignment.center,
          padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 15),
          child: Expanded(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                const AutoSizeText("PlayFutbol 2.0", 
                  style: TextStyle(fontSize: 100.0, color: primaryColor, fontWeight: FontWeight.bold),
                  maxLines: 1,
                ),
                Image.asset(
                  'assets/LogoPlayFutbol.png',
                  height: pantallaGeneral.height * 0.2,
                  fit: BoxFit.fitWidth
                ),
                const SizedBox(height: 10,),
                _ventajaClub(),
                const SizedBox(height: 10,),
                _ventajaEntrenador(),
                const SizedBox(height: 10,),
                _ventajaPadres(),
                const SizedBox(height: 10,),
                _ventajaPubli(),
              ],
            ),
          ),
        ),
      ),
    );
  }
}


Widget _ventajaClub () {

  return Container(
    alignment: Alignment.center,
    padding: const EdgeInsets.all(10),
    color: primaryColor,
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        const AutoSizeText("VENTAJAS AL CLUB", 
          style: TextStyle(fontSize: 70.0, color: pfb, fontWeight: FontWeight.bold),
          maxLines: 1,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            imagen(imagen: "HomeClub.png"),
            const SizedBox(width: 20,),
            Expanded(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  texto(texto: "1. Gestión de Equipos del club."),
                  texto(texto: "2. Gestión de entrenadores del Club."),
                  texto(texto: "3. Saber en tiempo real la asistencia a entrenamientos."),
                  texto(texto: "4. Saber en todo momento los resultados de sus equipos."),
                  texto(texto: "5. Posibilidad de valorar a los entrenadores."),
                  texto(texto: "6. Informes al momento de los partidos finalizados."),
                  texto(texto: "7. Poder controlar a los jugadores destacados de otros equipos."),
                ],
              ),
            )
          ],
        )
      ],
    ),  
  );
}

Widget _ventajaEntrenador () {

  return Container(
    alignment: Alignment.center,
    padding: const EdgeInsets.all(10),
    color: primaryColor,
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        const AutoSizeText("VENTAJAS AL ENTRENADOR", 
          style: TextStyle(fontSize: 70.0, color: pfb, fontWeight: FontWeight.bold),
          maxLines: 1,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            imagen(imagen: "HomeEntrenador.png"),
            const SizedBox(width: 20,),
            Expanded(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  texto(texto: "1. Estadísticas de todos los jugadores de su equipo."),
                  texto(texto: "2. Evolución de Talla y Peso de sus jugadores."),
                  texto(texto: "3. Control de asistencia a entrenamientos."),
                  texto(texto: "4. Estadisticas de jugadores en partidos al instante"),
                  texto(texto: " minutos jugados, tarjetas, goles, lesiones, etc..."),
                  texto(texto: "5. Informes de Entrenamientos (Asistencia mensual)."),
                  texto(texto: "6. Informes de Partido con todo detalle al finalizar el partido."),
                  texto(texto: "7. Posibilidad de controlar al instante que jugador ha jugado "),
                  texto(texto: "menos en el partido y en la temporada."),
                  textoVerde(texto: "8. NOTIFICACIONES A JUGADORES Y PADRES SOBRE"),
                  textoVerde(texto: " CONVOCATORIAS DE PARTIDO Y ENTRENAMIENTOS.")
                ],
              ),
            )
          ],
        )
      ],
    ),  
  );
}

Widget _ventajaPubli() {

  return Container(
    alignment: Alignment.center,
    padding: const EdgeInsets.all(10),
    color: primaryColor,
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        const AutoSizeText("VENTAJAS A LOS PATROCINADORES", 
          style: TextStyle(fontSize: 70.0, color: pfb, fontWeight: FontWeight.bold),
          maxLines: 1,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            imagen(imagen: "HomePubli.png"),
            const SizedBox(width: 20,),
            Expanded(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  texto(texto: "1. Anuncios dinámicos con redirección a donde ellos prefieran,"),
                  texto(texto: "whatshap, instagram, facebook, telefono, email, etc....."),
                  texto(texto: "2. Ver en tiempo real cuanta gente ha visto su anuncio."),
                  texto(texto: "3. Ver en tiempo real cuanta gente a interactuado con su anuncio."),
                  texto(texto: "4. Informe mensual de marketing."),
                ],
              ),
            )
          ],
        )
      ],
    ),  
  );
}

Widget _ventajaPadres() {

  return Container(
    alignment: Alignment.center,
    padding: const EdgeInsets.all(10),
    color: primaryColor,
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        const AutoSizeText("VENTAJAS A LOS PADRES", 
          style: TextStyle(fontSize: 70.0, color: pfb, fontWeight: FontWeight.bold),
          maxLines: 1,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            imagen(imagen: "HomePadres.jpg"),
            const SizedBox(width: 20,),
            Expanded(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  texto(texto: "1. Notificaciones de cuando entrenan sus hijos."),
                  texto(texto: "2. Saber en tiempo real la asistencia de sus hijojs a entrenamientos."),
                  texto(texto: "3. Notificaciones de convocatorias a Partidos de sus hijos."),
                  textoVerde(texto: "4. POSIBILIDAD DE SEGUIR MINUTO A MINUTO LOS PARTIDOS"),
                ],
              ),
            )
          ],
        )
      ],
    ),  
  );
}

Widget imagen ({required String imagen}) {

  return Center(
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Image.asset(
          'assets/$imagen',
          height: pantallaGeneral.height * 0.7,
          fit: BoxFit.fitWidth
        )
      ],
    ),
  );
}

Widget texto ({required String texto}) {

  return AutoSizeText(texto, 
    style: const TextStyle(fontSize: 25.0, color: pfb, fontWeight: FontWeight.bold),
    maxLines: 3,
    minFontSize: 10,
  );
}

Widget textoVerde ({required String texto}) {

  return AutoSizeText(texto, 
    style: const TextStyle(fontSize: 25.0, color: pfverde, fontWeight: FontWeight.bold),
    maxLines: 3,
    minFontSize: 10,
  );
}


