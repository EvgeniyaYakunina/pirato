import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgImagesSquareFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#images-square-fill_svg__a)"><path fill="#000" d="M13 2H5a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M5 3h8v4.336l-1.044-1.043a1 1 0 0 0-1.413 0L5.836 11H5zm6 10H3V5h1v6a1 1 0 0 0 1 1h6zM6.5 5.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0" /></g><defs><clipPath id="images-square-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgImagesSquareFill);
const Memo = memo(ForwardRef);
export default Memo;