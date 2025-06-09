function quizz() {
    const respuestas = {
        p1: "True",
        p2: "True",
        p3: "False",
        p4: "True",
        p5: "False"
    };

    let cd = 0;
    // Pregunta 1
    if (document.getElementById('p1_true').checked) cd++;
    
    // Pregunta 2
    if (document.getElementById('p2_true').checked) cd++;
    
    // Pregunta 3
    if (document.getElementById('p3_false').checked) cd++;
    
    // Pregunta 4
    if (document.getElementById('p4_true').checked) cd++;
    
    // Pregunta 5
    if (document.getElementById('p5_false').checked) cd++;

    // 3. Mostrar resultado
    alert("✅Respuestas correctas: " + cd + " de 5");
}