import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEjectSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#eject-simple-fill_svg__a)"><path fill="#000" d="M14.5 12.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1 0-1h12a.5.5 0 0 1 .5.5M2.506 10h10.988a1.007 1.007 0 0 0 .78-1.64L9.171 2.06a1.507 1.507 0 0 0-2.342 0L1.726 8.36a1.006 1.006 0 0 0 .78 1.64" /></g><defs><clipPath id="eject-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgEjectSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;