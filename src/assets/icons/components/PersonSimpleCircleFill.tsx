import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPersonSimpleCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#person-simple-circle-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M8 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 3.5H8.5v.849l1.916 2.875a.5.5 0 1 1-.832.555L8 9.404l-1.584 2.375a.5.5 0 0 1-.832-.555L7.5 8.349V7.5H5a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1" /></g><defs><clipPath id="person-simple-circle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPersonSimpleCircleFill);
const Memo = memo(ForwardRef);
export default Memo;