import { useRef, useEffect, useState } from "react"
const SliderComponent = () => {
    const [outputText, setOutputText] = useState("");
    const renderText = (text, time) => {
        let index = 0;
        const addText = () => {
          if (index < text.length) {
            setOutputText(prevText => prevText + text.charAt(index));
            index++;
            setTimeout(addText, time);
          }
        }
        addText();
      }
    useEffect(() => {
        renderText("Welcome to my page!", 200);
    }, []);
    return (
        <>
            <div className="d-flex fs-2 fw-bolder Slider align-items-center justify-content-center pb-5 ps-5">
                {outputText}
                <i class="bi bi-dash write d-flex align-items-center pt-5"></i>
            </div>
        </>
    )
}

export default SliderComponent