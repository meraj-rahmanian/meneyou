import { useEffect, useState } from "react";
import Calculator from "./components/Calculator/Calculator";


function App() {

    const [cal_opener, setCal_opener] = useState(false);


    useEffect(() => {

        const openCalculator = () => {
            setCal_opener(true);
        };


        document.addEventListener(
            "openCalculator",
            openCalculator
        );


        return () => {

            document.removeEventListener(
                "openCalculator",
                openCalculator
            );
        };

    }, []);


    const closeCalculator = () => {
        setCal_opener(false);
    };


    return (
        <>
            {cal_opener && (
                <Calculator
                    closeCalculator={closeCalculator}
                />
            )}
        </>
    );
}


export default App;
