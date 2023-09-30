const tooltip = document.querySelectorAll('.has-tooltip');

tooltip.forEach(item => {
    const div = document.createElement('div');
    item.appendChild(div);
    div.textContent = item.title;
    div.classList.add("tooltip");
    item.onclick = () => {
        div.classList.toggle("tooltip_active");
        const itempos = item.getBoundingClientRect()
        div.style.left = itempos.left + 'px';
        return false;
    }
})