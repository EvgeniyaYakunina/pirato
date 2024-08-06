import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgForkKnifeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#fork-knife-fill_svg__a)"><path fill="#000" d="M13.5 2.5V14a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1-.5-.5c.023-1.198.175-2.39.451-3.555.611-2.53 1.77-4.227 3.352-4.905a.5.5 0 0 1 .697.46m-6.007-.082a.5.5 0 1 0-.986.164L6.993 5.5H5.5v-3a.5.5 0 0 0-1 0v3H3.007l.486-2.918a.5.5 0 1 0-.986-.164l-.5 3A1 1 0 0 0 2 5.5a3.004 3.004 0 0 0 2.5 2.957V14a.5.5 0 0 0 1 0V8.457A3.004 3.004 0 0 0 8 5.5a1 1 0 0 0-.007-.082z" /></g><defs><clipPath id="fork-knife-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgForkKnifeFill);
const Memo = memo(ForwardRef);
export default Memo;