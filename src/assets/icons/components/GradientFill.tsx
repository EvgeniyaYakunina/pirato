import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGradientFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#gradient-fill_svg__a)"><path fill="#000" d="M5 12a.5.5 0 0 1-.5.5H2a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .5.5m9-.5h-2.5a.5.5 0 0 0 0 1H14a.5.5 0 0 0 0-1m-4.5 0h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-7.5-1h5a.5.5 0 0 0 0-1H2a.5.5 0 1 0 0 1m12-1H9a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1m0-6H2a.5.5 0 0 0-.5.5v1.5A.5.5 0 0 0 2 6h12a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5M14 7H2a.5.5 0 0 0-.5.5V8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-.5A.5.5 0 0 0 14 7" /></g><defs><clipPath id="gradient-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgGradientFill);
const Memo = memo(ForwardRef);
export default Memo;