# Vamos a crear una clase llamada Persona. Sus atributos son: nombre, edad y DNI. Construye los siguientes métodos para la clase:
# Un constructor, donde los datos pueden estar vacíos.
# Los setters y getters para cada uno de los atributos. Hay que validar las entradas de datos.
# mostrar(): Muestra los datos de la persona.
# esMayorDeEdad(): Devuelve un valor lógico indicando si es mayor de edad.

class Persona():
    def __init__(self,dni,nombre,edad):
        self.dni=dni
        self.nombre=nombre
        self.edad=edad

    @property
    def dni(self):
        return self._dni

    @dni.setter
    def dni(self,dni):
        self._dni=dni
    
    @property
    def nombre(self):
        return self._nombre

    @nombre.setter
    def nombre(self,nombre):
        self._nombre=nombre
    
    @property
    def edad(self):
        return self._edad

    @edad.setter
    def edad(self,edad):
        if edad > 0:
            self._edad=edad
        else:
            self._edad=0
            print("Edad incorrecta")

    def mostrar(self):
        return self.dni.mostrar()+" "+self.nombre+" ("+str(self.edad)+")"