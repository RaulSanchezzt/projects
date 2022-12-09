# Crea un programa que pida al usuario dos números y muestre su división si el segundo no es cero, o un mensaje de aviso en caso contrario.

dividendo = int(input('Número 1: '));
divisor = int(input('Número 2: '));
if divisor == 0:
	print('No puedes dividir por 0')
else:
	print('La división es %f' % (dividendo/divisor))