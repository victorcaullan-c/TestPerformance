# Pruebas de Performance con k6

Este proyecto contiene pruebas de performance para dos APIs usando k6. Una de las APIs utiliza un archivo CSV para ingresar u obtener datos; la otra emplea datos definidos en el propio script.

## Características principales

- 5 usuarios virtuales (VUs)
- En un tiempo estimado de 30s
- Se genera un reporte html al finalizar las ejecuciones
- Reporte se generar en la ubicacion del archivo ejecutado.
- Uso de archivos CSV para alimentar datos a una de las APIs

## Ejecución rápida

1. Tener instalodo K6
2. Ejecuta la prueba desde terminal(Asegurarse de estar en la ubicacion del archivo):
   k6 run TestPoke.js


## Datos en archivo CSV
### user,password
   donero   ,ewedon
kevinryan,kev02937@
johnd    ,m38rmF$
derek    ,jklg*_56
mor_2314 ,83r5^_ 
