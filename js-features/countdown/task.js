const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function wintimer() {
    if (hours.textContent == 0 && minutes.textContent == 0 && seconds.textContent == 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
        document.location.assign("https://doc-0c-9g-docs.googleusercontent.com/docs/securesc/3a0ad44o2k0t0r9avpk1ud694fabh7sr/dksikvtdko9a7jlb15ivbknqquk6onqn/1694945025000/13935065188696421192/13935065188696421192/1WvUYWcSzJecMTpJGOCEbvsTFc8ygbsSY1g?e=download&ax=AA75yW5GCqNgnmqk8ipKUMVwfu-ywRha5A2i3f5oemw_lyBuE2482-ttV6KKSvIOPXgxy47cEhW6iQuWIfvHNMf5BdebaFYZi3nRQn3x6ThrgDuJ_I-UemOmDpB3ZdcWOR0EI6-WHoUrWw1EGsgse8xxMY4kBollbBkuQBwh_fdSq0AdZ2MTs9jfnxwPs6TQaqj2hnRQQXnEPyZ_3pMTg3ygMLX5F_R8k0X7wVxf7Y0WQP1Jq84N8V_j9w1oLMps2eK5gJzpb0tcMx46pMQZCdbFPijznDv2lxQmj9a5GYMljeW3L1vEdYR9ouOu1sqRNDy7pLEKrI7h7dPlOzHf0ixSBl73c2JTJCgTHQdhYfoxFr0DsTOYzPMwuPjItgrrExJmwlDklGduueP5aV1Dwq-YhTpiLTxvqVf8JABILuCYuulJpky9S_d7l37b3j0614brc0fm_4WWt1GzP3PU6JoW3S5HarWsRYXSaqAzP5CyOw-LP31qUVF4pcAKci37Zng2b4rB9LeSC3TlRBvOxoeX3RvlDfzHod9l2BO8EerHuOiYkeTfgLeHT5F3btmqWDymaPX08uqFKi_xXVGKBO9X190sQyi9t_TPYBNbDFiNgJA0iReKh-IxhQB8KVnYqROL6bf6oW-GI5xrnvbWXCvPVXcQxzKW39JYluBoSD4amwDBzSUlX67iWh0enyLJpJUelrf5HkMXYmiJDeGbaQXK3LAYhQrX1TejRo6DdPPMdZZdUSGAXwF5bddNl6cRwpaIct-a38W0WIZaXuyInjrahw1lPiZ5Dsx178zougDtH4h8ouYAQJs-26Hp1muJGde2PJ6oIfHAjJuvf2r543w_yoc1YQ1E-K4KdrmFKAB64mPuqM2fQHE5K8GpWTZc15tGC4NnoYsjaCpofs3VBU1IaL7jOUF6JDY355g0qb-6&uuid=2ecb5b13-4d73-4f03-b6be-ccebdc1cba20&authuser=0&nonce=5oeq4650235ts&user=13935065188696421192&hash=gmhjlqlne4kvok1ga2lkrb1s7a0f1dqs");
        return;
    }
    
    seconds.textContent--;
    
    if (seconds.textContent.length == 1) {
        seconds.textContent = "0" + seconds.textContent;
    }
    
    if (seconds.textContent == -1) {
        minutes.textContent--;
        seconds.textContent = 59;
    }

    if (minutes.textContent.length == 1) {
        minutes.textContent = "0" + minutes.textContent;
    }

    if (minutes.textContent == -1) {
        hours.textContent--;
        minutes.textContent = 59;
    }

    if (hours.textContent.length == 1) {
        hours.textContent = "0" + hours.textContent;
    }

    if (hours.textContent == -1) {
        minutes.textContent = 59;
    }

}

let interval = setInterval(wintimer, 1000);

