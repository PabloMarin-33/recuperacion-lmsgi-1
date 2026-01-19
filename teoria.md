# Ejercicios teoricos:

---

## 1. Define elementos:

Aparte de contener los elementos de la estructura basica de HTML.

```HTML
<!DOCTYPE html>
<html>
<head>
<main>
<body>
```

El snippet tambien contiene: 

- Una etiqueta de encabezado en forma del titulo del documento en el que contiene un **"Hola Mundo"**:

```HTML
<h1>Hola mundo</h1>
```
- Una etiqueta de parrafo que contiene un bloque de texto:
```HTML
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```
- Y una etiqueta de imagen en la cual posee un atributo **"src"** para incrustar una imagen:
```HTML
<img src="https://avatars.githubusercontent.com/u/106534360?v=4">
```

## 2. Arreglar snippet:

```HTML
<p>Haz click <link href="https://google.com">aqui</link> para ir a Google</p>
```

No se utliza link para crear enlaces si no se usa **"<a>"**.

```HTML
<p>Haz click <a href="https://google.com">aqui</a> para ir a Google</p>
```

## 3. Nombre de HTMLA:

El nombre es ***Intex.html***

## 4. Markdown:

Markdown es un lenguaje de marcado ligero que utliza texto en plano para crear documentos. Se puede usar par escribir documentos simples, como notas de clase, o para convertir HTML en documento mas legibles.

Mientras que **HTML** es mas complejo, teniendo este muchas mas funciones en la que podemos programar para una pagina web a nuestro gusto, **Markdown** es mucho mas simple y facil de utlizar, y aunque no posee el mismo nivel de funciones que en HTML, es´util para cuando tenemos que escribir documentos simples debido a su simplicidad.

## 5. Local Storage:

```JavaScript
const nombre = localStorage.getItem('nombre')
const edad = localStorage.getItem('edad')
```

En este snippet lo que se esta porgramado es:

1. Declarar dos variables "const" llamadas nombre y edad.
2. Cuyos valores estan guardados en el navegador cuyas claves son, **'nombre'** y **'edad'** respectivamente.

## Practica pandoc:

El comando que he utilizado para crear ollama-guia.html ha sido:

```bash
pandoc ollama-guia.md -o ollama-guia.html --standalone
```