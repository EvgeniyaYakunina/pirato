import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHospitalFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#hospital-fill_svg__a)"><path fill="#000" d="M15.5 13H15V8a1 1 0 0 0-1-1h-3.5V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v10H2a.5.5 0 0 0 0 1h13.5a.5.5 0 0 0 0-1M8 13H5v-3h3zm0-6.5H7v1a.5.5 0 1 1-1 0v-1H5a.5.5 0 1 1 0-1h1v-1a.5.5 0 1 1 1 0v1h1a.5.5 0 1 1 0 1m6 6.5h-3.5V8H14z" /></g><defs><clipPath id="hospital-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHospitalFill);
const Memo = memo(ForwardRef);
export default Memo;