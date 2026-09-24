// Calculator logic: takes the expression string (e.g. "2+3×4") and returns the result.

function mohasbe(namaish) {

    const amal = ["+", "-", "×", "÷"];

    let ebarat = [];
    let adad = "";


    /* =====================================
       مرحله اول
       پردازش ×
    ===================================== */

    for (let i = 0; i < namaish.length; i++) {

        let x = namaish[i];


        if (amal.includes(x)) {

            /* ---------- ضرب ---------- */

            if (x === "×") {

                let adad2 = "";
                let j;


                for (
                    j = i + 1;
                    j < namaish.length;
                    j++
                ) {

                    let x2 = namaish[j];


                    if (amal.includes(x2)) {

                        /* زنجیره ضرب */

                        if (x2 === "×") {

                            let javab =
                                Number(adad) *
                                Number(adad2);

                            adad = String(javab);
                            adad2 = "";

                        }


                        /* رسیدن به عملگر دیگر */

                        else {

                            let javab =
                                Number(adad) *
                                Number(adad2);

                            ebarat.push(String(javab));
                            ebarat.push(x2);

                            adad = "";

                            /*
                             * قسمت خوانده شده توسط
                             * حلقه داخلی را رد می‌کنیم
                             */

                            i = j;

                            break;
                        }
                    }


                    else {

                        adad2 += x2;
                    }
                }


                /* ضرب در انتهای عبارت */

                if (adad2 !== "") {

                    let javab =
                        Number(adad) *
                        Number(adad2);

                    adad = String(javab);

                    i = j - 1;
                }
            }


            /* ---------- + - ÷ ---------- */

            else {

                ebarat.push(adad);
                ebarat.push(x);

                adad = "";
            }
        }


        /* ---------- عدد ---------- */

        else {

            adad += x;
        }
    }


    /* آخرین عدد */

    if (adad !== "") {
        ebarat.push(adad);
    }


    /* =====================================
       مرحله دوم
       پردازش ÷ روی خود ebarat
    ===================================== */

    for (let i = 0; i < ebarat.length; i++) {

        if (ebarat[i] === "÷") {

            let adad1 = Number(ebarat[i - 1]);
            let adad2 = "";


            for (
                let j = i + 1;
                j < ebarat.length;
                j++
            ) {

                let x = ebarat[j];


                /* رسیدن به عملگر */

                if (amal.includes(x)) {

                    let javab =
                        adad1 /
                        Number(adad2);

                    ebarat.splice(
                        i - 1,
                        3,
                        String(javab)
                    );

                    i--;

                    break;
                }


                /* ادامه عدد */

                else {

                    adad2 += x;
                }
            }


            /* ÷ در انتهای عبارت */

            if (
                adad2 !== "" &&
                i + 1 === ebarat.length
            ) {

                let javab =
                    adad1 /
                    Number(adad2);

                ebarat.splice(
                    i - 1,
                    3,
                    String(javab)
                );

                i--;
            }
        }
    }


    /* =====================================
       مرحله سوم
       پردازش + و -
    ===================================== */

    let javab = Number(ebarat[0]);


    for (
        let i = 1;
        i < ebarat.length;
        i += 2
    ) {

        let operator = ebarat[i];
        let adad = Number(ebarat[i + 1]);


        if (operator === "+") {
            javab += adad;
        }


        if (operator === "-") {
            javab -= adad;
        }
    }


    return javab;
}


export { mohasbe };
