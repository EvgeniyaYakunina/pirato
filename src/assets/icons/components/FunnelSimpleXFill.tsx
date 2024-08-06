import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFunnelSimpleXFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#funnel-simple-x-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1M4.5 8a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M8 11H7a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1m4.354.646a.501.501 0 0 1-.708.708L11 11.707l-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646zM13 6H3a.5.5 0 1 1 0-1h10a.5.5 0 0 1 0 1" /></g><defs><clipPath id="funnel-simple-x-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFunnelSimpleXFill);
const Memo = memo(ForwardRef);
export default Memo;