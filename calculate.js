function calculateTriangleArea () {
    const b_input = document.getElementById('triangle-base');
    const b = parseFloat(b_input.value);
    const h_input = document.getElementById('triangle-hight');
    const h = parseFloat(h_input.value);
    let area = 0.5 * b * h;

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}
function calculateRectangleArea() {
    const w_input = document.getElementById('rectangle-width');
    const w = parseFloat(w_input.value);
    const l_input = document.getElementById('rectangle-length');
    const l = parseFloat(l_input.value);
    let area = w * l;

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;
    
}

function calculateParallelogramArea() {
    const b_input = document.getElementById('parallelogram-base');
    const b = parseFloat(b_input.value);
    const h_input = document.getElementById('parallelogram-hight');
    const h = parseFloat(h_input.value);
    let area = b * h;

    const areaSpan = document.getElementById('parallelogram-area');
    areaSpan.innerText = area;
    
}
function calculateRhombusArea() {
    const d1_input = document.getElementById('rhombus-diagonal1');
    const d1 = parseFloat(d1_input.value);
    const d2_input = document.getElementById('rhombus-diagonal2');
    const d2 = parseFloat(d2_input.value);
    let area = 0.5 * d1 * d2;

    const areaSpan = document.getElementById('rhombus-area');
    areaSpan.innerText = area;
    
}