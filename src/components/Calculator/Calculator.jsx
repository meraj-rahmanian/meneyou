import { useState } from "react";
import { mohasbe } from "./mohasbe";


function Calculator({ closeCalculator }) {

    const [namaish, setNamaish] = useState("");
    const [namaishN, setNamaishN] = useState("");


    const clickOn = (x) => {
        setNamaish(prev => prev + x);
    };


    const Do = () => {
        setNamaishN(mohasbe(namaish));
    };


    const backspace = () => {
        setNamaish(prev => prev.slice(0, -1));
    };


    const clear = () => {
        setNamaish("");
        setNamaishN("");
    };


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            <div className="h-auto w-[332px] rounded-xl cal_stayle p-4">

                {/* Close */}

                <div
                    className="flex justify-end mb-3 text-[#E8FFFF]"
                    onClick={closeCalculator}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="size-7"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </div>


                {/* Expression */}

                <div className="w-full h-[52px] bg-[#05636640] rounded mb-3 cal_display">
                    {namaish}
                </div>


                {/* Result */}

                <div className="w-full h-[32px] bg-[#044E5140] rounded mb-5 mt-3 cal_displayN">
                    {namaishN}
                </div>


                {/* Buttons */}

                <div className="grid grid-cols-4 gap-3">


                    {/* Operators */}

                    <button
                        className="cal_key cal_operator"
                        onClick={() => clickOn("+")}
                    >
                        +
                    </button>

                    <button
                        className="cal_key cal_operator"
                        onClick={() => clickOn("-")}
                    >
                        -
                    </button>

                    <button
                        className="cal_key cal_operator"
                        onClick={() => clickOn("×")}
                    >
                        ×
                    </button>

                    <button
                        className="cal_key cal_operator"
                        onClick={() => clickOn("÷")}
                    >
                        ÷
                    </button>


                    {/* 1 2 3 */}

                    <button
                        className="cal_key cal_number"
                        onClick={() => clickOn("1")}
                    >
                        1
                    </button>

                    <button
                        className="cal_key cal_number"
                        onClick={() => clickOn("2")}
                    >
                        2
                    </button>

                    <button
                        className="cal_key cal_number"
                        onClick={() => clickOn("3")}
                    >
                        3
                    </button>


                    {/* Backspace */}

                    <button
                        className="cal_key cal_action"
                        onClick={backspace}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5c0 .298-.119.585-.33.795l-9.284.33Z"
                            />
                        </svg>
                    </button>


                    {/* 4 5 6 */}

                    <button
                        className="cal_key cal_number"
                        onClick={() => clickOn("4")}
                    >
                        4
                    </button>

                    <button
                        className="cal_key cal_number"
                        onClick={() => clickOn("5")}
                    >
                        5
                    </button>

                    <button
                        className="cal_key cal_number"
                        onClick={() => clickOn("6")}
                    >
                        6
                    </button>


                    {/* Clear */}

                    <button
                        className="cal_key cal_action"
                        onClick={clear}
                    >
                        C
                    </button>


                    {/* 7 8 9 */}

                    <button
                        className="cal_key cal_number"
                        onClick={() => clickOn("7")}
                    >
                        7
                    </button>

                    <button
                        className="cal_key cal_number"
                        onClick={() => clickOn("8")}
                    >
                        8
                    </button>

                    <button
                        className="cal_key cal_number"
                        onClick={() => clickOn("9")}
                    >
                        9
                    </button>


                    {/* Equal */}

                    <button
                        className="cal_key cal_equal row-span-2"
                        onClick={Do}
                    >
                        =
                    </button>


                    {/* 00 0 . */}

                    <button
                        className="cal_key cal_number"
                        onClick={() => clickOn("00")}
                    >
                        00
                    </button>

                    <button
                        className="cal_key cal_number"
                        onClick={() => clickOn("0")}
                    >
                        0
                    </button>

                    <button
                        className="cal_key cal_number"
                        onClick={() => clickOn(".")}
                    >
                        .
                    </button>

                </div>
            </div>
        </div>
    );
}


export default Calculator;
