import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCherriesFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#cherries-fill_svg__a)"><path fill="#000" d="M11.151 4.5a5 5 0 0 0-.638.023 5.7 5.7 0 0 0-1.35-1.568C6.8 1.049 3.567 1.485 3.43 1.505a.5.5 0 0 0-.198.917c1.087.73 1.585 1.932 1.793 3.103a4.505 4.505 0 1 0 1.017.009C5.846 4.287 5.41 3.25 4.75 2.46c1.04.045 2.577.298 3.79 1.28.36.293.677.638.937 1.024q-.18.064-.354.143a.53.53 0 0 0-.28.29.5.5 0 0 0 .15.562q.474.391.85.875a.2.2 0 0 0 .04.04C10 6.76 10.364 7 11 7c.76 0 1.136-.344 1.152-.36l-.006.006a.5.5 0 0 1 .708.708C12.788 7.42 12.174 8 11 8h-.1a.187.187 0 0 0-.188.25 5.5 5.5 0 0 1-.438 4.475.53.53 0 0 0-.062.39.5.5 0 0 0 .447.375q.169.012.336.012a4.5 4.5 0 1 0 .151-9zm-4.5 3.138-.005.006a.5.5 0 1 1 .707.707C7.288 8.42 6.673 9 5.5 9s-1.787-.58-1.854-.646a.5.5 0 1 1 .708-.708l-.006-.005C4.364 7.656 4.741 8 5.5 8c.76 0 1.136-.344 1.152-.36z" /></g><defs><clipPath id="cherries-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCherriesFill);
const Memo = memo(ForwardRef);
export default Memo;