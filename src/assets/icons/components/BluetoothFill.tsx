import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBluetoothFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bluetooth-fill_svg__a)"><path fill="#000" d="M12.5 11a.5.5 0 0 1-.2.4l-4 3a.5.5 0 0 1-.8-.4V9l-3.2 2.4a.5.5 0 1 1-.6-.8L7.167 8 3.7 5.4a.5.5 0 0 1 .6-.8L7.5 7V2a.5.5 0 0 1 .8-.4l4 3a.5.5 0 0 1 0 .8L8.833 8l3.467 2.6a.5.5 0 0 1 .2.4" /></g><defs><clipPath id="bluetooth-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBluetoothFill);
const Memo = memo(ForwardRef);
export default Memo;