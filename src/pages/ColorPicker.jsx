
import { Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { SketchPicker } from 'react-color'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaPenNib } from "react-icons/fa6";
const ColorPicker = () => {
    const [selectColorHexCode, setSelectColorHexCode] = useState("#17c317");
    const [selectColorRGBCode, setSelectColorRGBCode] = useState("")
    const [isCopyed, setIsCopyed] = useState(false)
    const hanndelSelectColorChange = (color) => {
        console.log(color);
        setSelectColorHexCode(color.hex);
        setSelectColorRGBCode(`rgb(${color.rgb.r},${color.rgb.g},${color.rgb.b})`)
    }

    useEffect(() => {
        if (isCopyed === true) {
            setTimeout(() => {
                setIsCopyed(false)
            }, 1000)
        }
    }, [isCopyed])

    return (
        <div className='flex flex-col items-center pt-12 gap-8'>
            <div className='flex items-center justify-center w-full'> 
                {/* //NOTE -  */}
                <p className='bg-slate-500 w-2/4 h-7 ' style={{background:`${selectColorHexCode}`}}/>
                
            <FaPenNib style={{transform:"rotate(225deg)"}} fontSize={"5rem"} color={selectColorHexCode} />
            </div>
        <div className='flex  flex-wrap items-center justify-center' >
            <SketchPicker
                color={selectColorHexCode}
                onChangeComplete={hanndelSelectColorChange}
            />
            <div className='flex flex-col gap-4 justify-start m-8' >
                <CopyToClipboard text={selectColorRGBCode}
                    onCopy={() => setIsCopyed(true)}
                >
                    <button>
                        <p>
                            Selected Color Hexa Code:
                            <Tooltip title={isCopyed ? "Copped" : "Copy color code to clipboard"}>
                                <span style={{ color: "blue"  }}> {selectColorHexCode}</span>
                            </Tooltip>
                        </p>
                    </button>
                </CopyToClipboard>
                <CopyToClipboard text={selectColorRGBCode}
                    onCopy={() => setIsCopyed(true)}
                >
                    <button>
                        <p>
                            Selected Color RGB Code:
                            <Tooltip title={isCopyed ? "Copped" : "Copy color code to clipboard"}>
                                <span style={{ color: "blue"  }}> {selectColorRGBCode}</span>
                            </Tooltip>
                        </p>
                    </button>
                </CopyToClipboard>
                <CopyToClipboard text={selectColorRGBCode}
                    onCopy={() => setIsCopyed(true)}
                >
                    <button>
                        <p>
                            Selected Color RGB Code:
                            <Tooltip title={isCopyed ? "Copped" : "Copy color code to clipboard"}>
                                <span style={{ color: "blue" }}> {selectColorRGBCode}</span>
                            </Tooltip>
                        </p>
                    </button>
                </CopyToClipboard>
            </div>

            </div>
        </div>
    )
}
export default ColorPicker