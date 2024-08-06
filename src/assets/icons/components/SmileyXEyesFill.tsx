import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSmileyXEyesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#smiley-x-eyes-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.51 6.51 0 0 0 8 1.5M6.854 7.646a.5.5 0 1 1-.708.708L5.5 7.707l-.646.647a.5.5 0 1 1-.708-.708L4.793 7l-.647-.646a.5.5 0 1 1 .708-.708l.646.647.646-.647a.5.5 0 1 1 .708.708L6.207 7zM8 12a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m3.854-4.354a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708L9.793 7l-.647-.646a.5.5 0 1 1 .708-.708l.646.647.646-.647a.5.5 0 1 1 .708.708L11.207 7z" /></g><defs><clipPath id="smiley-x-eyes-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSmileyXEyesFill);
const Memo = memo(ForwardRef);
export default Memo;