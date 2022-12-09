# Escribe un programa que lea un número e indique si es par o impar.

num = int(input("Número: "))

if num % 2 == 0:
    print(num, "es par")
else:
    print(num, "es impar")