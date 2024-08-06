import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLadderSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#ladder-simple-fill_svg__a)"><path fill="#000" d="M12 1.5a.5.5 0 0 0-.5.5v.5h-7V2a.5.5 0 1 0-1 0v12a.5.5 0 0 0 1 0v-.5h7v.5a.5.5 0 0 0 1 0V2a.5.5 0 0 0-.5-.5m-1 10H5a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1m0-3H5a.5.5 0 1 1 0-1h6a.5.5 0 0 1 0 1m0-3H5a.5.5 0 1 1 0-1h6a.5.5 0 0 1 0 1" /></g><defs><clipPath id="ladder-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgLadderSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;