import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgThermometerSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#thermometer-simple-fill_svg__a)"><path fill="#000" d="M10 9.13V2.5a2 2 0 1 0-4 0v6.63a3.5 3.5 0 1 0 4 0M8 1.5a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1" /></g><defs><clipPath id="thermometer-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgThermometerSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;