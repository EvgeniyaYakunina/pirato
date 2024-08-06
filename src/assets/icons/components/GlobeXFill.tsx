import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGlobeXFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#globe-x-fill_svg__a)"><path fill="#000" d="M8 1.5a6.5 6.5 0 1 0 0 13 .5.5 0 0 0 .313-.888c-.07-.057-1.306-1.083-1.942-3.11h1.625a.5.5 0 0 0 0-1H6.13a8.8 8.8 0 0 1 0-3h3.743Q10.002 7.244 10 8a.5.5 0 0 0 1 0 10 10 0 0 0-.115-1.5h2.407c.138.488.208.993.208 1.5a.5.5 0 0 0 1 0A6.507 6.507 0 0 0 8 1.5m-1.625 4A7.2 7.2 0 0 1 8 2.688 7.2 7.2 0 0 1 9.625 5.5zm4.297 0a8.5 8.5 0 0 0-1.394-2.85 5.52 5.52 0 0 1 3.625 2.85zm3.184 5.354L12.706 12l1.148 1.146a.501.501 0 0 1-.708.708L12 12.707l-1.146 1.147a.5.5 0 0 1-.708-.708L11.293 12l-1.147-1.146a.5.5 0 0 1 .708-.708L12 11.293l1.146-1.147a.5.5 0 0 1 .708.708z" /></g><defs><clipPath id="globe-x-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGlobeXFill);
const Memo = memo(ForwardRef);
export default Memo;