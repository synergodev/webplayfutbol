
import 'package:flutter/material.dart';
import 'package:playftubolweb/Utils/utils.dart';

class LoadingPage extends StatefulWidget {
  const LoadingPage({super.key});

  @override
  State<LoadingPage> createState() => _LoadingPageState();
}

class _LoadingPageState extends State<LoadingPage> {
  @override
  Widget build(BuildContext context) {

    pantallaGeneral = MediaQuery.of(context).size;
    
    return Container(
      width: pantallaGeneral.width,
      height: pantallaGeneral.height,
      alignment: Alignment.center,
      child: Scaffold(
        body: InkWell(
          child: _Logo(),
          onTap: () {
            Navigator.popAndPushNamed(context, 'home');
          },
        ),
      ),
    );
  }
}

class _Logo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final Size pantalla = MediaQuery.of(context).size;
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Hero(
            tag:'logo',
            child: Image.asset(
              'assets/LogoPlayFutbol.png',
              height: pantalla.height * 0.7,
              fit: BoxFit.fitWidth
            ),
          )
        ],
      ),
    );
  }
}