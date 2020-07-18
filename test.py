
contador = 0
caja = []

while True:
    caja.append(contador)
    numero = int(input('Quieres meter un numero mas? '))
    if numero == 0:
        break
    contador += 1
    
print(len(caja))