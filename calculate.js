function calculateTriangleArea () {
    const b_input = document.getElementById('triangle-base');
    const b = parseFloat(b_input.value);
    const h_input = document.getElementById('triangle-hight');
    const h = parseFloat(h_input.value);
    let area = 0.5 * b * h;

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;


}