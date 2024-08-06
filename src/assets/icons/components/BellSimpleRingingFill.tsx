import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBellSimpleRingingFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#bell-simple-ringing-fill_svg__a)"><path fill="#000" d="M10.5 14a.5.5 0 0 1-.5.5H6a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5m3.712-10.23a6.96 6.96 0 0 0-2.445-2.692.5.5 0 1 0-.534.845 5.9 5.9 0 0 1 2.092 2.307.5.5 0 0 0 .887-.46m-11.98.73a.5.5 0 0 0 .444-.27 5.9 5.9 0 0 1 2.091-2.307.5.5 0 1 0-.534-.845A6.96 6.96 0 0 0 1.788 3.77a.5.5 0 0 0 .444.73M13 7A5 5 0 0 0 3 7c0 1.643-.299 3.024-.863 3.996A1 1 0 0 0 3 12.5h10a1 1 0 0 0 .862-1.504C13.299 10.024 13 8.642 13 7" /></g><defs><clipPath id="bell-simple-ringing-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBellSimpleRingingFill);
const Memo = memo(ForwardRef);
export default Memo;