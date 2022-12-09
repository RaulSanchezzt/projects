# Algoritmo que pida un número y diga si es positivo, negativo o 0.

num=int(input("Número: "))

if num > 0:
    print(num, "es positivo")
elif num < 0:
    print(num, "es negativo")
else:
    print(num, "es 0")