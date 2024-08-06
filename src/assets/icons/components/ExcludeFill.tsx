import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgExcludeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#exclude-fill_svg__a)"><path fill="#000" d="M15 10a5 5 0 0 1-9.915.915 5 5 0 0 0 5.83-5.83A5 5 0 0 1 15 10m-5-5q.461 0 .915.085a5 5 0 1 0-5.83 5.83A5 5 0 0 1 10 5" /></g><defs><clipPath id="exclude-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgExcludeFill);
const Memo = memo(ForwardRef);
export default Memo;