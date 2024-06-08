import pandas as pd
import psycopg2

# Conexión a la base de datos PostgreSQL
conn = psycopg2.connect(
    host="127.0.0.1:5432",
    database="notificador",
    user="postgres",
    password="postgres"
)
cursor = conn.cursor()

# Leer el archivo Excel
xls_file_path = 'Medalla_BASE_DE_DATOS_ASSETS_2019_AÑOS_DE_SERVICIO_AÑOS_EN_EDUCACIÓ.xls'
df = pd.read_excel(xls_file_path)

# Iterar sobre las filas del DataFrame y realizar la inserción en la base de datos
for index, row in df.iterrows():
    # Aquí debes adaptar los nombres de las columnas y la tabla a tu caso específico
    cursor.execute(
        "INSERT INTO tu_tabla (columna1, columna2, ...) VALUES (%s, %s, ...)",
        (row['Id_Empleado'], row['No_CI'], ...)  # Asegúrate de incluir todas las columnas necesarias
    )

# Confirmar la transacción
conn.commit()

# Cerrar la conexión
cursor.close()
conn.close()
