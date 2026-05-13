# Pruebas de Performance con k6

Este proyecto contiene pruebas de performance para dos APIs usando k6. Una de las APIs utiliza un archivo CSV para ingresar u obtener datos; la otra emplea datos definidos en el propio script.

## Características principales

- 20 usuarios virtuales (VUs)
- En un tiempo estimado de 30s
- Se genera un reporte html al finalizar las ejecuciones
- Ruta de reporte `reports`, en archivos .html.
- Ruta de archivo `csv` con usuarios de prueba es la carpeta`data`.
- Uso de archivos CSV para alimentar datos a una de las APIs
- MS de prueba `fakestoreapi.com/auth/login` y `pokeapi.co/api/v2`.


## Tecnologías utilizadas
- ***k6 (Chocolatey v2.7.1)***


## Ejecución rápida

1. Tener instalodo K6
2. Ejecuta la prueba desde terminal(Asegurarse de estar en la ubicacion del archivo):
   k6 run TestPoke.js


## Datos en archivo CSV
| user      | password   |
|-----------|-----------|
| donero    | ewedon    |
| kevinryan | kev02937@ |
| johnd     | m38rmF$   |
| derek     | jklg*_56  |
| mor_2314  | 83r5^_    |