import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAsteriskSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#asterisk-simple-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m3.959 5.74-3.15 1.023 1.947 2.68a.5.5 0 1 1-.81.587L8 8.85l-1.947 2.68a.5.5 0 0 1-.809-.587l1.947-2.68-3.15-1.024a.5.5 0 0 1 .309-.95L7.5 7.312V4a.5.5 0 1 1 1 0v3.313l3.15-1.024a.5.5 0 0 1 .309.951" /></g><defs><clipPath id="asterisk-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgAsteriskSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;