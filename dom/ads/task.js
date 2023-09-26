const rotator = document.querySelectorAll(".rotator__case");

setInterval(() => {
    for (i = 0; i < rotator.length; i++) {
        if (rotator[i].classList.contains("rotator__case_active")) {
            if (rotator[rotator.length-1].classList.contains("rotator__case_active")) {
                rotator[rotator.length-1].classList.remove("rotator__case_active");
                rotator[0].classList.add("rotator__case_active");
                i = 0;
                return;
            }
            rotator[i].classList.remove("rotator__case_active");
            rotator[i+1].classList.add("rotator__case_active");
            return;
        }
    }
},1000);