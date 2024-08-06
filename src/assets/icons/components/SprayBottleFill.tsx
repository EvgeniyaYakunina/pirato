import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSprayBottleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#spray-bottle-fill_svg__a)"><path fill="#000" d="M12.5 5a.5.5 0 0 0 .5-.5A3.504 3.504 0 0 0 9.5 1H5a1 1 0 0 0-1 1v3a1.5 1.5 0 0 1-1.5 1.5.5.5 0 1 0 0 1A2.5 2.5 0 0 0 5 5h2v1.539a1.5 1.5 0 0 1-.562 1.171l-1 .8A2.49 2.49 0 0 0 4.5 10.46V14a1 1 0 0 0 1 1H12a1 1 0 0 0 1-1v-.783c0-2.875-.73-5.703-2.125-8.217zM5 2h4.5a2.505 2.505 0 0 1 2.45 2H5z" /></g><defs><clipPath id="spray-bottle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSprayBottleFill);
const Memo = memo(ForwardRef);
export default Memo;