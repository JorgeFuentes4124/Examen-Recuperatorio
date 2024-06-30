"1)Suceción Fibonacci(100 numeros)"
"2)Ordenar un array=[1,0,2,4,7,6,8,12]"
"3)Estructura de control"
"4)Variables let, var y const, explicar"

"1)Suceción Fibonacci (100 numeros):"

j, f = 0, 1

while f < 100:
    print(f)

    j,f = f, j + f


"4)Variables let, var y const, explicar"
#La variable let, siendo la forma moderna de declarar variables en JavaScript
# con un Ámbito de bloque (dentro de llaves {}),
# y puede ser reasignada, pero no re-declarada.

#La variable var, siendo la menos usada actualmente
#con un Ámbito global si se declara fuera de una funcion y local si se declada dentro de una
#puede redeclarar y modificar en el mismo ámbito

#La variable Const, usado para declarar constantes(valores que no cambian)
# con un ambito de bloque igual que let(es decir dentro de {})
#tiene inmutabilidad, no se puede reasignar despues de la declaracion inicial,
# pero el valor puede ser mutable(objetos,arrays)























